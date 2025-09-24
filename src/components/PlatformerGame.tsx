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

  const canvasWidth = Math.min(window.innerWidth - 32, 600);
  const canvasHeight = canvasWidth * 0.5;

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

    gameLoop();
  };

  const gameLoop = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const GRAVITY = 0.5;
    const PLAYER_SIZE = 30 * (canvas.width / 600);
    const GROUND_HEIGHT = 50 * (canvas.height / 300);
    const OBSTACLE_WIDTH = 20 * (canvas.width / 600);
    const OBSTACLE_HEIGHT = 40 * (canvas.height / 300);

    let lastObstacle = Date.now();

    const loop = () => {
      const state = gameStateRef.current;
      if (!state.gameRunning) return;

      // Clear canvas
      ctx.fillStyle = "#f5f5dc";
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

      // Draw player (coffee cup character)
      const cupX = 50 * (canvas.width / 600);
      const cupY = state.playerY;

      // Cup body
      ctx.fillStyle = "#fff";
      ctx.fillRect(cupX, cupY, PLAYER_SIZE, PLAYER_SIZE);

      // Cup rim
      ctx.fillStyle = "#e0e0e0";
      ctx.fillRect(cupX, cupY, PLAYER_SIZE, PLAYER_SIZE * 0.15);

      // Matcha inside (bigger)
      ctx.fillStyle = "#9CAF7A";
      ctx.beginPath();
      ctx.ellipse(
        cupX + PLAYER_SIZE / 2,         // center x
        cupY + PLAYER_SIZE * 0.2,       // center y
        PLAYER_SIZE * 0.42,             // radius x
        PLAYER_SIZE * 0.18,             // radius y
        0, 0, Math.PI * 2
      );
      ctx.fill();

      // Cup body shading
      ctx.fillStyle = "#f5f5f5";
      ctx.fillRect(
        cupX + PLAYER_SIZE * 0.13,
        cupY + PLAYER_SIZE * 0.4,
        PLAYER_SIZE * 0.73,
        PLAYER_SIZE * 0.55
      );

      // Handle (right side, mirrored)
      ctx.beginPath();
      ctx.arc(
        cupX + PLAYER_SIZE * 1.05,      // center x
        cupY + PLAYER_SIZE / 2,         // center y
        PLAYER_SIZE * 0.27,             // radius
        -Math.PI / 2,
        Math.PI / 2
      );
      ctx.lineWidth = 4;
      ctx.strokeStyle = "#e0e0e0";
      ctx.stroke();
      ctx.closePath();

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

      // Update obstacles
      state.obstacles = state.obstacles.filter((obstacle) => {
        obstacle.x -= 5;
        ctx.fillStyle = "#6F4E37";
        ctx.fillRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);
        return obstacle.x > -obstacle.width;
      });

      // Collision detection
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
      ctx.font = `${16 * (canvas.width / 600)}px serif`;
      ctx.fillText(`Score: ${Math.floor(state.score / 10)}`, 20, 30);

      if (state.gameRunning) {
        requestAnimationFrame(loop);
      }
    };

    loop();
  };

  const jump = () => {
    const state = gameStateRef.current;
    if (state.gameRunning && !state.gameOver) {
      state.playerVelocity = -12;
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

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

    return () => {
      canvas.removeEventListener("click", handleTouch);
      canvas.removeEventListener("touchstart", handleTouch);
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

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
