import { useEffect, useRef } from "react";

export default function BinaryStarOrbit() {
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

    let animationId: number;
    let angle = 0;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const orbitRadius = Math.min(canvas.width, canvas.height) * 0.15;

      angle += 0.005;

      const sun1X = centerX + Math.cos(angle) * orbitRadius;
      const sun1Y = centerY + Math.sin(angle) * orbitRadius;
      const sun2X = centerX + Math.cos(angle + Math.PI) * orbitRadius;
      const sun2Y = centerY + Math.sin(angle + Math.PI) * orbitRadius;

      const gradient1 = ctx.createRadialGradient(sun1X, sun1Y, 0, sun1X, sun1Y, 80);
      gradient1.addColorStop(0, "rgba(58, 167, 255, 0.8)");
      gradient1.addColorStop(0.5, "rgba(58, 167, 255, 0.3)");
      gradient1.addColorStop(1, "rgba(58, 167, 255, 0)");

      ctx.beginPath();
      ctx.arc(sun1X, sun1Y, 80, 0, Math.PI * 2);
      ctx.fillStyle = gradient1;
      ctx.fill();

      const gradient2 = ctx.createRadialGradient(sun2X, sun2Y, 0, sun2X, sun2Y, 70);
      gradient2.addColorStop(0, "rgba(255, 155, 58, 0.8)");
      gradient2.addColorStop(0.5, "rgba(255, 155, 58, 0.3)");
      gradient2.addColorStop(1, "rgba(255, 155, 58, 0)");

      ctx.beginPath();
      ctx.arc(sun2X, sun2Y, 70, 0, Math.PI * 2);
      ctx.fillStyle = gradient2;
      ctx.fill();

      const energyGradient = ctx.createLinearGradient(sun1X, sun1Y, sun2X, sun2Y);
      energyGradient.addColorStop(0, "rgba(58, 167, 255, 0.3)");
      energyGradient.addColorStop(0.5, "rgba(255, 211, 105, 0.3)");
      energyGradient.addColorStop(1, "rgba(255, 155, 58, 0.3)");

      ctx.beginPath();
      ctx.moveTo(sun1X, sun1Y);
      ctx.lineTo(sun2X, sun2Y);
      ctx.strokeStyle = energyGradient;
      ctx.lineWidth = 2;
      ctx.stroke();

      for (let i = 0; i < 50; i++) {
        const particleAngle = (angle * 2 + i * 0.1) % (Math.PI * 2);
        const particleRadius = orbitRadius * 1.5;
        const px = centerX + Math.cos(particleAngle) * particleRadius;
        const py = centerY + Math.sin(particleAngle) * particleRadius;

        ctx.beginPath();
        ctx.arc(px, py, 1, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(58, 167, 255, ${0.3 + Math.sin(particleAngle) * 0.3})`;
        ctx.fill();
      }

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      data-testid="canvas-binary-star-orbit"
    />
  );
}
