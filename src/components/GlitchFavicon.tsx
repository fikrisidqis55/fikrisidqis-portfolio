import { useEffect, useRef } from "react";

export default function GlitchFavicon() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number | undefined>(undefined);
  const timeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const size = 32; // Favicon size
    canvas.width = size;
    canvas.height = size;

    // Noise animation frames (similar to CSS keyframes)
    const noiseFrames = [
      { x: 0, y: 0 },
      { x: -1, y: 1 },
      { x: 1, y: -1 },
      { x: -2, y: 0 },
      { x: 2, y: 1 },
      { x: 0, y: -1 },
      { x: -1, y: 2 },
      { x: 1, y: -2 },
      { x: -2, y: 1 },
      { x: 2, y: -1 },
    ];

    const updateFavicon = () => {
      if (!ctx) return;

      // Clear canvas
      ctx.fillStyle = "#222";
      ctx.fillRect(0, 0, size, size);

      // Set text properties
      ctx.font = "bold 20px Arial";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      timeRef.current += 0.016; // ~60fps

      // Calculate glitch effects
      const noiseIndex = Math.floor(
        (timeRef.current * 10) % noiseFrames.length
      );
      const noiseFrame = noiseFrames[noiseIndex];

      // Skew animation (similar to CSS shift animation)
      const skewProgress = (timeRef.current * 0.25) % 1; // 4s cycle
      let skewX = 0;
      if (skewProgress > 0.4 && skewProgress < 0.41) skewX = 10;
      else if (skewProgress > 0.41 && skewProgress < 0.42) skewX = -10;
      else if (skewProgress > 0.58 && skewProgress < 0.59) skewX = 40;
      else if (skewProgress > 0.59 && skewProgress < 0.6) skewX = -40;
      else if (skewProgress > 0.63 && skewProgress < 0.64) skewX = 10;
      else if (skewProgress > 0.7 && skewProgress < 0.71) skewX = -50;
      else if (skewProgress > 0.71 && skewProgress < 0.72) skewX = 10;

      // Save context
      ctx.save();

      // Apply skew transformation
      ctx.translate(size / 2, size / 2);
      ctx.transform(1, 0, Math.tan((skewX * Math.PI) / 180), 1, 0, 0);
      ctx.translate(-size / 2, -size / 2);

      // Draw cyan glitch layer (before) - offset left
      ctx.fillStyle = "#00ffff";
      ctx.fillText("U", size / 2 + noiseFrame.x - 1, size / 2 + noiseFrame.y);

      // Draw magenta glitch layer (after) - offset right
      ctx.fillStyle = "#ff00ff";
      ctx.fillText("U", size / 2 + noiseFrame.x + 1, size / 2 + noiseFrame.y);

      // Draw main "U" on top
      ctx.fillStyle = "#fff";
      ctx.fillText("U", size / 2 + noiseFrame.x, size / 2 + noiseFrame.y);

      // Restore context
      ctx.restore();

      // Get or create favicon link element
      let favicon = document.querySelector(
        "link[rel='icon']"
      ) as HTMLLinkElement;

      // Create favicon link if it doesn't exist
      if (!favicon) {
        favicon = document.createElement("link");
        favicon.rel = "icon";
        favicon.type = "image/png";
        document.head.appendChild(favicon);
      }

      // Update favicon
      favicon.href = canvas.toDataURL("image/png");

      animationFrameRef.current = requestAnimationFrame(updateFavicon);
    };

    updateFavicon();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return <canvas ref={canvasRef} style={{ display: "none" }} />;
}
