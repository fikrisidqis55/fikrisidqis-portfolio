"use client";

import { useEffect, useRef } from "react";

interface GlitchBar {
  x: number;
  y: number;
  width: number;
  height: number;
  color: string;
  speed: number;
  opacity: number;
  offset: number;
}

export default function GlitchBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Vaporwave color palette
    const colors = ["#090014", "#FF00FF", "#00FFFF", "#1a103c", "#FF9900"];

    const glitchBars: GlitchBar[] = [];
    const numBars = 50;

    // Initialize glitch bars
    for (let i = 0; i < numBars; i++) {
      glitchBars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        width: Math.random() * 200 + 80,
        height: Math.random() * 5 + 2,
        color: colors[Math.floor(Math.random() * colors.length)],
        speed: Math.random() * 4 + 0.5,
        opacity: Math.random() * 0.7 - 0.2,
        offset: Math.random() * 20 - 10,
      });
    }

    let animationFrameId: number;
    let frameCount = 0;

    const animate = () => {
      // Vaporwave void background
      ctx.fillStyle = "#090014";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      frameCount++;

      glitchBars.forEach((bar) => {
        if (Math.random() > 0.92) {
          bar.x = Math.random() * canvas.width;
          bar.y = Math.random() * canvas.height;
          bar.color = colors[Math.floor(Math.random() * colors.length)];
          bar.width = Math.random() * 200 + 80;
          bar.opacity = Math.random() * 0.7 + 0.2;
          bar.offset = Math.random() * 30 - 15;
        }

        const mainX =
          bar.x + (Math.random() > 0.9 ? Math.random() * 10 - 5 : 0);

        // Red channel offset
        // ctx.fillStyle = "#6A041D";
        // ctx.globalAlpha = bar.opacity * 0.6;
        // ctx.fillRect(mainX - bar.offset, bar.y, bar.width, bar.height);

        // // Green channel offset
        // ctx.fillStyle = "#00ff00";
        // ctx.globalAlpha = bar.opacity * 0.5;
        // ctx.fillRect(mainX + bar.offset * 0.5, bar.y, bar.width, bar.height);

        // Blue channel (main)
        ctx.fillStyle = bar.color;
        ctx.globalAlpha = bar.opacity;
        ctx.fillRect(mainX, bar.y, bar.width, bar.height);

        if (Math.random() > 0.96) {
          const scanlineHeight = 1;
          ctx.fillStyle = "#ffffff";
          ctx.globalAlpha = 0.1;
          ctx.fillRect(0, bar.y, canvas.width, scanlineHeight);
        }

        if (Math.random() > 0.75) {
          const blockSize = Math.floor(Math.random() * 8) + 4;
          const numBlocks = Math.floor(bar.width / blockSize);

          for (let i = 0; i < numBlocks; i++) {
            if (Math.random() > 0.6) {
              ctx.fillStyle = bar.color;
              ctx.globalAlpha = bar.opacity * 0.8;
              ctx.fillRect(
                mainX + i * blockSize + (Math.random() * 4 - 2),
                bar.y,
                blockSize,
                bar.height
              );
            }
          }
        }

        if (Math.random() > 0.96 && frameCount % 3 === 0) {
          const tearHeight = Math.random() * 50 + 20;
          ctx.fillStyle = bar.color;
          ctx.globalAlpha = bar.opacity * 0.5;
          ctx.fillRect(bar.x, bar.y, bar.width, tearHeight);
        }

        // Move bars
        bar.x += bar.speed;
        if (bar.x > canvas.width + 100) {
          bar.x = -bar.width - 100;
          bar.y = Math.random() * canvas.height;
          bar.speed = Math.random() * 4 + 0.5;
        }
      });

      ctx.globalAlpha = 1;

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full z-[-1]"
      style={{ imageRendering: "pixelated" }}
    />
  );
}
