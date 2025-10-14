import { useEffect, useRef } from "react";
import "../App.css";
import { Link } from "react-router-dom";

export default function Home() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    // Make 50 circles
    const circles = Array.from({ length: 50 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      dx: (Math.random() - 0.5)/5,
      dy: (Math.random() - 0.5)/5,
      radius: Math.random() * (Math.min(canvas.width, canvas.height) / (25)),
      color: "rgba(" + Math.random() * 255 + ", " + Math.random() * 255 + ", " + Math.random() * 255 + ", " + (Math.random()/2 + 0.25) + ")"
    }));

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const c of circles) {
        c.x += c.dx;
        c.y += c.dy;

        if (c.x < 0 || c.x > canvas.width) c.dx *= -1;
        if (c.y < 0 || c.y > canvas.height) c.dy *= -1;

        ctx.beginPath();
        ctx.arc(c.x, c.y, c.radius, 0, Math.PI * 2);
        ctx.fillStyle = c.color;
        ctx.fill();
      }

      requestAnimationFrame(animate);
    }
    animate();

    return () => window.removeEventListener("resize", resizeCanvas);
  }, []);

  return (
    <div className="container">
      <canvas ref={canvasRef} className="background-canvas"></canvas>
      <div className="centered-content">
        <h1 className="name">Josef Wolf</h1>
        <nav className="menu">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/education">Education</Link>
            <Link to="/contact">Contact</Link>
        </nav>
      </div>
    </div>
  );
}
