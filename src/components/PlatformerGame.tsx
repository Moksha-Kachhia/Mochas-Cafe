import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";

interface GameState {
  playerY: number;
  playerVelocity: number;
  obstacles: { x: number; y: number }[];
  score: number;
  gameRunning: boolean;
  gameOver: boolean;
}

export const PlatformerGame = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const gameStateRef = useRef<GameState>({
    playerY: 200,
    playerVelocity: 0,
    obstacles: [],
    score: 0,
    gameRunning: false,
    gameOver: false,
  });
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [gameRunning, setGameRunning] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const GRAVITY = 0.5;
    const JUMP_FORCE = -12;
    const GROUND_HEIGHT = 50;
    const PLAYER_SIZE = 30;
    const OBSTACLE_WIDTH = 20;
    const OBSTACLE_HEIGHT = 40;

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
      if (gameStateRef.current.gameRunning && !gameStateRef.current.gameOver) {
        gameStateRef.current.playerVelocity = JUMP_FORCE;
      }
    };

    const gameLoop = () => {
      const state = gameStateRef.current;
      
      if (!state.gameRunning) {
        animationId = requestAnimationFrame(gameLoop);
        return;
      }

      // Clear canvas
      ctx.fillStyle = "#f5f5dc"; // cream background
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw ground
      ctx.fillStyle = "#8B4513"; // mocha brown
      ctx.fillRect(0, canvas.height - GROUND_HEIGHT, canvas.width, GROUND_HEIGHT);

      // Update player physics
      state.playerVelocity += GRAVITY;
      state.playerY += state.playerVelocity;

      // Ground collision
      if (state.playerY > canvas.height - GROUND_HEIGHT - PLAYER_SIZE) {
        state.playerY = canvas.height - GROUND_HEIGHT - PLAYER_SIZE;
        state.playerVelocity = 0;
      }

      // Draw player (coffee cup character)
      // Cup body (white)
      ctx.fillStyle = "#fff";
      ctx.fillRect(50, state.playerY, PLAYER_SIZE, PLAYER_SIZE);

      // Cup rim (light gray, slightly thicker top)
      ctx.fillStyle = "#e0e0e0";
      ctx.fillRect(50, state.playerY, PLAYER_SIZE, 6);

      // Matcha inside (green oval near top)
      ctx.fillStyle = "#9CAF7A";
      ctx.beginPath();
      ctx.ellipse(
        50 + PLAYER_SIZE / 2,           // center x
        state.playerY + 9,              // center y
        PLAYER_SIZE / 2 - 5,            // radius x
        7,                              // radius y
        0, 0, Math.PI * 2
      );
      ctx.fill();

      // Cup body shading (optional, subtle highlight)
      ctx.fillStyle = "#f5f5f5";
      ctx.fillRect(54, state.playerY + 12, PLAYER_SIZE - 8, PLAYER_SIZE - 18);

      // Handle (light gray, right side)
      ctx.fillStyle = "#ffffffff";
      ctx.beginPath();
      ctx.arc(
        50 + PLAYER_SIZE - 2,           // center x
        state.playerY + PLAYER_SIZE / 2,// center y
        8,                              // radius
        Math.PI / 2, Math.PI * 1.5
      );
      ctx.lineWidth = 5;
      ctx.strokeStyle = "#e0e0e0";
      ctx.stroke();
      ctx.closePath();

      // Add obstacles
      if (Date.now() - lastObstacle > 2000) {
        state.obstacles.push({
          x: canvas.width,
          y: canvas.height - GROUND_HEIGHT - OBSTACLE_HEIGHT,
        });
        lastObstacle = Date.now();
      }

      // Update and draw obstacles
      state.obstacles = state.obstacles.filter((obstacle) => {
        obstacle.x -= 5;

        // Draw obstacle (coffee bean)
        ctx.fillStyle = "#6F4E37"; // coffee brown
        ctx.fillRect(obstacle.x, obstacle.y, OBSTACLE_WIDTH, OBSTACLE_HEIGHT);
        
        // Coffee bean line
        ctx.strokeStyle = "#4a3427";
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(obstacle.x + OBSTACLE_WIDTH/2, obstacle.y + 5);
        ctx.lineTo(obstacle.x + OBSTACLE_WIDTH/2, obstacle.y + OBSTACLE_HEIGHT - 5);
        ctx.stroke();

        return obstacle.x > -OBSTACLE_WIDTH;
      });

      // Collision detection
      state.obstacles.forEach((obstacle) => {
        if (
          50 < obstacle.x + OBSTACLE_WIDTH &&
          50 + PLAYER_SIZE > obstacle.x &&
          state.playerY < obstacle.y + OBSTACLE_HEIGHT &&
          state.playerY + PLAYER_SIZE > obstacle.y
        ) {
          state.gameOver = true;
          state.gameRunning = false;
          setGameOver(true);
          setGameRunning(false);
        }
      });

      // Update score
      if (!state.gameOver) {
        state.score += 1;
        if (state.score % 10 === 0) {
          setScore(Math.floor(state.score / 10));
        }
      }

      // Draw score
      ctx.fillStyle = "#8B4513";
      ctx.font = "20px serif";
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

    const handleClick = () => {
      jump();
    };

    canvas.addEventListener("click", handleClick);
    window.addEventListener("keydown", handleKeyPress);

    return () => {
      canvas.removeEventListener("click", handleClick);
      window.removeEventListener("keydown", handleKeyPress);
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  const startGame = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    gameStateRef.current = {
      playerY: canvas.height - 50 - 30,
      playerVelocity: 0,
      obstacles: [],
      score: 0,
      gameRunning: true,
      gameOver: false,
    };
    setScore(0);
    setGameOver(false);
    setGameRunning(true);

    const gameLoop = () => {
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const state = gameStateRef.current;
      
      if (!state.gameRunning) return;

      // Clear canvas
      ctx.fillStyle = "#f5f5dc";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw ground
      ctx.fillStyle = "#8B4513";
      ctx.fillRect(0, canvas.height - 50, canvas.width, 50);

      // Update player physics
      state.playerVelocity += 0.5;
      state.playerY += state.playerVelocity;

      if (state.playerY > canvas.height - 50 - 30) {
        state.playerY = canvas.height - 50 - 30;
        state.playerVelocity = 0;
      }

      // Draw player
      ctx.fillStyle = "rgba(247, 191, 191, 1)";
      ctx.fillRect(50, state.playerY, 30, 30);
      ctx.fillStyle = "#7BA05B";
      ctx.fillRect(55, state.playerY + 5, 20, 15);
      ctx.fillRect(75, state.playerY + 10, 8, 5);

      // Add obstacles
      if (Math.random() < 0.005) {
        state.obstacles.push({
          x: canvas.width,
          y: canvas.height - 50 - 40,
        });
      }

      // Update obstacles
      state.obstacles = state.obstacles.filter((obstacle) => {
        obstacle.x -= 5;
        ctx.fillStyle = "#6F4E37";
        ctx.fillRect(obstacle.x, obstacle.y, 20, 40);
        
        ctx.strokeStyle = "#4a3427";
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(obstacle.x + 10, obstacle.y + 5);
        ctx.lineTo(obstacle.x + 10, obstacle.y + 35);
        ctx.stroke();

        // Collision
        if (
          50 < obstacle.x + 20 &&
          50 + 30 > obstacle.x &&
          state.playerY < obstacle.y + 40 &&
          state.playerY + 30 > obstacle.y
        ) {
          state.gameOver = true;
          state.gameRunning = false;
          setGameOver(true);
          setGameRunning(false);
          return false;
        }

        return obstacle.x > -20;
      });

      state.score += 1;
      if (state.score % 10 === 0) {
        setScore(Math.floor(state.score / 10));
      }

      ctx.fillStyle = "#8B4513";
      ctx.font = "20px serif";
      ctx.fillText(`Score: ${Math.floor(state.score / 10)}`, 20, 30);

      if (state.gameRunning) {
        requestAnimationFrame(gameLoop);
      }
    };

    gameLoop();
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <canvas
        ref={canvasRef}
        width={600}
        height={300}
        className="border-2 border-mocha rounded-lg bg-cream shadow-lg"
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
          Click or press Space/Up Arrow to jump over coffee beans!
        </p>
      </div>
    </div>
  );
};