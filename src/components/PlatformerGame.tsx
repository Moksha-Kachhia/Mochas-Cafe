import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";

interface GameState {
  playerY: number;
  playerVelocity: number;
  obstacles: { x: number; y: number; width: number; height: number }[];
  score: number;
  gameRunning: boolean;
  gameOver: boolean;
}

export const PlatformerGame = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const gameStateRef = useRef<GameState>({
    playerY: 0,
    playerVelocity: 0,
    obstacles: [],
    score: 0,
    gameRunning: false,
    gameOver: false,
  });
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [gameRunning, setGameRunning] = useState(false);

  const canvasWidth = Math.min(window.innerWidth - 32, 600); // responsive
  const canvasHeight = canvasWidth * 0.5; // keep ratio

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const GRAVITY = 0.5;
    const JUMP_FORCE = -12;
    const PLAYER_SIZE = 30 * (canvasWidth / 600); // scale for mobile
    const GROUND_HEIGHT = 50 * (canvasHeight / 300);
    const OBSTACLE_WIDTH = 20 * (canvasWidth / 600);
    const OBSTACLE_HEIGHT = 40 * (canvasHeight / 300);

    let animationId: number;
    let lastObstacle = 0;

    const resetGame = () => {
      gameStateRef.current = {
        playerY: canvas.height - GROUND_HEIGHT - PLAYER_SIZE,
        playerVelocity: 0,
        obstacles: [],
        score: 0,
        gameRunning: true,
        gameOver: false,
      };
      lastObstacle = 0;
      setScore(0);
      setGameOver(false);
      setGameRunning(true);
    };

    const jump = () => {
      const state = gameStateRef.current;
      if (state.gameRunning && !state.gameOver) {
        state.playerVelocity = JUMP_FORCE;
      }
    };

    const gameLoop = () => {
      const state = gameStateRef.current;

      if (!state.gameRunning) {
        animationId = requestAnimationFrame(gameLoop);
        return;
      }

      ctx.fillStyle = "#f5f5dc"; // cream background
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Ground
      ctx.fillStyle = "#8B4513";
      ctx.fillRect(0, canvas.height - GROUND_HEIGHT, canvas.width, GROUND_HEIGHT);

      // Player physics
      state.playerVelocity += GRAVITY;
      state.playerY += state.playerVelocity;

      if (state.playerY > canvas.height - GROUND_HEIGHT - PLAYER_SIZE) {
        state.playerY = canvas.height - GROUND_HEIGHT - PLAYER_SIZE;
        state.playerVelocity = 0;
      }

      // Draw player (simple cup)
      ctx.fillStyle = "#fff";
      ctx.fillRect(50, state.playerY, PLAYER_SIZE, PLAYER_SIZE);

      ctx.fillStyle = "#9CAF7A"; // matcha
      ctx.fillRect(50 + 5, state.playerY + 5, PLAYER_SIZE - 10, 10);

      // Add obstacles
      if (Date.now() - lastObstacle > 2000) {
        state.obstacles.push({
          x: canvas.width,
          y: canvas.height - GROUND_HEIGHT - OBSTACLE_HEIGHT,
          width: OBSTACLE_WIDTH,
          height: OBSTACLE_HEIGHT,
        });
        lastObstacle = Date.now();
      }

      // Obstacles
      state.obstacles = state.obstacles.filter((obstacle) => {
        obstacle.x -= 5;

        ctx.fillStyle = "#6F4E37";
        ctx.fillRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);

        return obstacle.x > -obstacle.width;
      });

      // Collision
      state.obstacles.forEach((obstacle) => {
        if (
          50 < obstacle.x + obstacle.width &&
          50 + PLAYER_SIZE > obstacle.x &&
          state.playerY < obstacle.y + obstacle.height &&
          state.playerY + PLAYER_SIZE > obstacle.y
        ) {
          state.gameOver = true;
          state.gameRunning = false;
          setGameOver(true);
          setGameRunning(false);
        }
      });

      // Score
      if (!state.gameOver) {
        state.score += 1;
        if (state.score % 10 === 0) setScore(Math.floor(state.score / 10));
      }

      ctx.fillStyle = "#8B4513";
      ctx.font = `${16 * (canvasWidth / 600)}px serif`;
      ctx.fillText(`Score: ${Math.floor(state.score / 10)}`, 20, 30);

      if (!state.gameOver) {
        animationId = requestAnimationFrame(gameLoop);
      }
    };

    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.code === "Space" || e.code === "ArrowUp") {
        e.preventDefault();
        jump();
      }
    };

    const handleTouch = () => jump();

    canvas.addEventListener("click", handleTouch);
    canvas.addEventListener("touchstart", handleTouch);
    window.addEventListener("keydown", handleKeyPress);

    resetGame();
    gameLoop();

    return () => {
      canvas.removeEventListener("click", handleTouch);
      canvas.removeEventListener("touchstart", handleTouch);
      window.removeEventListener("keydown", handleKeyPress);
      cancelAnimationFrame(animationId);
    };
  }, [canvasWidth, canvasHeight]);

  const startGame = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const PLAYER_SIZE = 30 * (canvas.width / 600);
    const GROUND_HEIGHT = 50 * (canvas.height / 300);

    gameStateRef.current = {
      playerY: canvas.height - GROUND_HEIGHT - PLAYER_SIZE,
      playerVelocity: 0,
      obstacles: [],
      score: 0,
      gameRunning: true,
      gameOver: false,
    };

    setScore(0);
    setGameOver(false);
    setGameRunning(true);
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <canvas
        ref={canvasRef}
        className="w-full max-w-lg border-2 border-mocha rounded-lg bg-cream shadow-lg"
      />
      <div className="text-center space-y-2">
        {!gameRunning && !gameOver && (
          <Button onClick={startGame} variant="default">
            Start Cafe Run!
          </Button>
        )}
        {gameOver && (
          <div className="space-y-2">
            <p className="text-lg font-semibold text-mocha">Game Over! Score: {score}</p>
            <Button onClick={startGame} variant="default">
              Try Again
            </Button>
          </div>
        )}
        <p className="text-sm text-muted-foreground">
          Tap, click, or press Space/Up Arrow to jump over coffee beans!
        </p>
      </div>
    </div>
  );
};
