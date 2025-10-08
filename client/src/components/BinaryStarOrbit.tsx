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

    const stars: { x: number; y: number; size: number; opacity: number }[] = [];
    for (let i = 0; i < 200; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2,
        opacity: Math.random() * 0.8 + 0.2,
      });
    }

    const draw = () => {
      ctx.fillStyle = "rgba(13, 13, 26, 0.3)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      stars.forEach((star) => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.fill();
      });

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const orbitRadius = Math.min(canvas.width, canvas.height) * 0.28;

      angle += 0.003;

      const sun1X = centerX + Math.cos(angle) * orbitRadius;
      const sun1Y = centerY + Math.sin(angle) * orbitRadius;
      const sun2X = centerX + Math.cos(angle + Math.PI) * orbitRadius;
      const sun2Y = centerY + Math.sin(angle + Math.PI) * orbitRadius;

      const gradient1Outer = ctx.createRadialGradient(sun1X, sun1Y, 0, sun1X, sun1Y, 120);
      gradient1Outer.addColorStop(0, "rgba(100, 220, 255, 0.6)");
      gradient1Outer.addColorStop(0.3, "rgba(100, 220, 255, 0.4)");
      gradient1Outer.addColorStop(0.6, "rgba(100, 220, 255, 0.2)");
      gradient1Outer.addColorStop(1, "rgba(100, 220, 255, 0)");

      ctx.beginPath();
      ctx.arc(sun1X, sun1Y, 120, 0, Math.PI * 2);
      ctx.fillStyle = gradient1Outer;
      ctx.fill();

      const gradient1 = ctx.createRadialGradient(sun1X, sun1Y, 0, sun1X, sun1Y, 60);
      gradient1.addColorStop(0, "rgba(200, 250, 255, 1)");
      gradient1.addColorStop(0.4, "rgba(100, 220, 255, 0.9)");
      gradient1.addColorStop(0.7, "rgba(80, 200, 240, 0.6)");
      gradient1.addColorStop(1, "rgba(60, 180, 220, 0)");

      ctx.beginPath();
      ctx.arc(sun1X, sun1Y, 60, 0, Math.PI * 2);
      ctx.fillStyle = gradient1;
      ctx.fill();

      const gradient2Outer = ctx.createRadialGradient(sun2X, sun2Y, 0, sun2X, sun2Y, 110);
      gradient2Outer.addColorStop(0, "rgba(255, 180, 60, 0.6)");
      gradient2Outer.addColorStop(0.3, "rgba(255, 160, 40, 0.4)");
      gradient2Outer.addColorStop(0.6, "rgba(255, 140, 30, 0.2)");
      gradient2Outer.addColorStop(1, "rgba(255, 120, 20, 0)");

      ctx.beginPath();
      ctx.arc(sun2X, sun2Y, 110, 0, Math.PI * 2);
      ctx.fillStyle = gradient2Outer;
      ctx.fill();

      const gradient2 = ctx.createRadialGradient(sun2X, sun2Y, 0, sun2X, sun2Y, 55);
      gradient2.addColorStop(0, "rgba(255, 240, 200, 1)");
      gradient2.addColorStop(0.4, "rgba(255, 180, 60, 0.9)");
      gradient2.addColorStop(0.7, "rgba(240, 150, 40, 0.6)");
      gradient2.addColorStop(1, "rgba(220, 120, 30, 0)");

      ctx.beginPath();
      ctx.arc(sun2X, sun2Y, 55, 0, Math.PI * 2);
      ctx.fillStyle = gradient2;
      ctx.fill();

      const energyGradient = ctx.createLinearGradient(sun1X, sun1Y, sun2X, sun2Y);
      energyGradient.addColorStop(0, "rgba(100, 220, 255, 0.4)");
      energyGradient.addColorStop(0.5, "rgba(200, 200, 255, 0.3)");
      energyGradient.addColorStop(1, "rgba(255, 180, 60, 0.4)");

      ctx.beginPath();
      ctx.moveTo(sun1X, sun1Y);
      ctx.lineTo(sun2X, sun2Y);
      ctx.strokeStyle = energyGradient;
      ctx.lineWidth = 3;
      ctx.stroke();

      for (let i = 0; i < 80; i++) {
        const particleAngle = (angle * 1.5 + i * 0.08) % (Math.PI * 2);
        const particleRadius = orbitRadius * 1.3;
        const px = centerX + Math.cos(particleAngle) * particleRadius;
        const py = centerY + Math.sin(particleAngle) * particleRadius;

        ctx.beginPath();
        ctx.arc(px, py, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(150, 200, 255, ${0.4 + Math.sin(particleAngle * 3) * 0.3})`;
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
