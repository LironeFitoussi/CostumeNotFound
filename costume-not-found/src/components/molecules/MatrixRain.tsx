import React, { useEffect, useRef, useCallback } from 'react';

export const MatrixRain: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number | null>(null);
  const dropsRef = useRef<number[]>([]);

  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Use dvh/dvw units for better mobile support
    const width = Math.min(window.innerWidth, window.visualViewport?.width || window.innerWidth);
    const height = Math.min(window.innerHeight, window.visualViewport?.height || window.innerHeight);
    
    // Set actual pixel size for retina displays
    const dpr = window.devicePixelRatio || 1;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    
    // Set display size
    canvas.style.width = width + 'px';
    canvas.style.height = height + 'px';

    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.scale(dpr, dpr);
    }

    const fontSize = Math.max(12, Math.floor(width / 50)); // Responsive font size
    const columns = Math.ceil(width / fontSize);
    
    dropsRef.current = Array(columns).fill(1);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%你好世界中国人生活工作学习爱情家庭朋友";
    let lastTime = 0;
    const targetFPS = 30; // Limit FPS for better performance
    const frameInterval = 1000 / targetFPS;

    const draw = (currentTime: number) => {
      const deltaTime = currentTime - lastTime;
      
      if (deltaTime < frameInterval) {
        animationFrameRef.current = requestAnimationFrame(draw);
        return;
      }

      const width = canvas.width / (window.devicePixelRatio || 1);
      const height = canvas.height / (window.devicePixelRatio || 1);
      const fontSize = Math.max(12, Math.floor(width / 50));

      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, width, height);

      ctx.fillStyle = '#00ff00';
      ctx.font = `${fontSize}px monospace`;

      dropsRef.current.forEach((drop, i) => {
        const text = matrix[Math.floor(Math.random() * matrix.length)];
        ctx.fillText(text, i * fontSize, drop * fontSize);

        if (drop * fontSize > height && Math.random() > 0.975) {
          dropsRef.current[i] = 0;
        }
        dropsRef.current[i]++;
      });

      lastTime = currentTime - (deltaTime % frameInterval);
      animationFrameRef.current = requestAnimationFrame(draw);
    };

    resizeCanvas();

    // Debounced resize handler
    let resizeTimeout: number;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = window.setTimeout(resizeCanvas, 250);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', resizeCanvas);
    window.visualViewport?.addEventListener('resize', handleResize);

    animationFrameRef.current = requestAnimationFrame(draw);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      clearTimeout(resizeTimeout);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', resizeCanvas);
      window.visualViewport?.removeEventListener('resize', handleResize);
    };
  }, [resizeCanvas]);

  return (
    <canvas 
      ref={canvasRef} 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        opacity: 0.9,
        touchAction: 'none',
        WebkitTapHighlightColor: 'transparent'
      }} 
    />
  );
}; 