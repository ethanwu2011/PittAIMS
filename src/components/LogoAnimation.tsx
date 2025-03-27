
import React, { useEffect, useRef } from "react";

const LogoAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    canvas.width = 40;
    canvas.height = 40;

    // Logo animation parameters
    let hue = 210; // Initial hue value for the blue color
    let time = 0;
    const brainNodes: { x: number; y: number; size: number; speed: number }[] = [];
    
    // Create brain nodes
    for (let i = 0; i < 12; i++) {
      brainNodes.push({
        x: 20 + (Math.random() * 10 - 5),
        y: 20 + (Math.random() * 10 - 5),
        size: 1 + Math.random() * 1.5,
        speed: 0.05 + Math.random() * 0.05
      });
    }
    
    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw brain circle
      ctx.fillStyle = `hsla(${hue}, 100%, 65%, 0.1)`;
      ctx.beginPath();
      ctx.arc(20, 20, 15, 0, Math.PI * 2);
      ctx.fill();
      
      // Draw pulsing outer circle
      ctx.strokeStyle = `hsla(${hue}, 100%, 65%, ${0.3 + Math.sin(time * 2) * 0.1})`;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(20, 20, 15 + Math.sin(time) * 1.5, 0, Math.PI * 2);
      ctx.stroke();
      
      // Draw brain nodes
      brainNodes.forEach((node, i) => {
        // Update position with circular motion
        const angle = time * node.speed + (i * Math.PI / 6);
        const radius = 8 + Math.sin(time * 0.5) * 2;
        node.x = 20 + Math.cos(angle) * radius;
        node.y = 20 + Math.sin(angle) * radius;
        
        // Draw node
        ctx.fillStyle = `hsla(${hue}, 100%, 65%, 0.8)`;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2);
        ctx.fill();
        
        // Draw connections
        brainNodes.forEach((otherNode, j) => {
          if (i !== j && Math.random() > 0.85) {
            const distance = Math.hypot(node.x - otherNode.x, node.y - otherNode.y);
            if (distance < 10) {
              ctx.strokeStyle = `hsla(${hue}, 100%, 65%, ${0.1 * (1 - distance / 10)})`;
              ctx.lineWidth = 0.5;
              ctx.beginPath();
              ctx.moveTo(node.x, node.y);
              ctx.lineTo(otherNode.x, otherNode.y);
              ctx.stroke();
            }
          }
        });
      });
      
      // Draw the letters "AI" in the center
      ctx.fillStyle = "#fff";
      ctx.font = "bold 10px Inter";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText("AI", 20, 20);
      
      // Update animation parameters
      time += 0.03;
      hue = 210 + Math.sin(time * 0.2) * 10; // Slight hue variation
      
      requestAnimationFrame(animate);
    };
    
    animate();
  }, []);

  return (
    <div className="relative w-10 h-10 animate-pulse-light">
      <canvas ref={canvasRef} className="absolute top-0 left-0" />
    </div>
  );
};

export default LogoAnimation;
