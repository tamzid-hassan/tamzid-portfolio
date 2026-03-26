import { useEffect, useRef } from 'react';

class Pixel {
  x: number;
  y: number;
  size: number;
  color: string;
  life: number;
  maxLife: number;

  constructor(x: number, y: number) {
    const gridSize = 6;
    // Snap to grid for a true pixelated feel
    this.x = Math.floor(x / gridSize) * gridSize;
    this.y = Math.floor(y / gridSize) * gridSize;
    this.size = gridSize;
    // Mix of white, purple, indigo, and cyan to match the theme
    this.color = ['#ffffff', '#c084fc', '#818cf8', '#22d3ee'][Math.floor(Math.random() * 4)];
    this.maxLife = Math.random() * 40 + 20;
    this.life = this.maxLife;
  }

  update() {
    this.life--;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = this.color;
    const alpha = Math.max(0, this.life / this.maxLife);
    ctx.globalAlpha = alpha;
    
    // Shrink the pixel as it dies
    const currentSize = this.size * alpha;
    const offset = (this.size - currentSize) / 2;
    
    ctx.fillRect(this.x + offset, this.y + offset, currentSize, currentSize);
    ctx.globalAlpha = 1;
  }
}

export function CustomCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // Disable on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return;

    // Hide the default cursor globally to replace it with our pixel cursor
    const style = document.createElement('style');
    style.innerHTML = `* { cursor: none !important; }`;
    document.head.appendChild(style);

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let pixels: Pixel[] = [];
    let animationFrameId: number;
    let mouse = { x: -100, y: -100 };
    let isHovering = false;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resize);
    resize();

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      
      // Add a pixel at the exact mouse location
      pixels.push(new Pixel(mouse.x, mouse.y));
      
      // Randomly add a scattered pixel for a thicker trail effect
      if (Math.random() > 0.5) {
         pixels.push(new Pixel(mouse.x + (Math.random() - 0.5) * 20, mouse.y + (Math.random() - 0.5) * 20));
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Detect if hovering over clickable elements
      if (
        target.tagName.toLowerCase() === 'a' || 
        target.tagName.toLowerCase() === 'button' || 
        target.closest('a') || 
        target.closest('button')
      ) {
        isHovering = true;
      } else {
        isHovering = false;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw trail pixels
      for (let i = pixels.length - 1; i >= 0; i--) {
        const p = pixels[i];
        p.update();
        p.draw(ctx);
        if (p.life <= 0) {
          pixels.splice(i, 1);
        }
      }

      // Draw the main lead cursor pixel
      const gridSize = 6;
      const leadX = Math.floor(mouse.x / gridSize) * gridSize;
      const leadY = Math.floor(mouse.y / gridSize) * gridSize;
      
      ctx.fillStyle = isHovering ? '#c084fc' : '#ffffff';
      ctx.fillRect(leadX, leadY, gridSize, gridSize);
      
      // Draw cursor outline/brackets
      if (isHovering) {
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 2;
        ctx.strokeRect(leadX - 4, leadY - 4, gridSize + 8, gridSize + 8);
      } else {
        ctx.strokeStyle = '#c084fc';
        ctx.lineWidth = 1;
        ctx.strokeRect(leadX - 2, leadY - 2, gridSize + 4, gridSize + 4);
      }

      animationFrameId = requestAnimationFrame(render);
    };
    render();

    return () => {
      // Cleanup
      document.head.removeChild(style);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[9999]"
      style={{ mixBlendMode: 'screen' }}
    />
  );
}
