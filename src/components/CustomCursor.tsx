import { useState, useEffect } from "react";

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    // Hide default cursor
    document.body.style.cursor = 'none';

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.body.style.cursor = 'auto';
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999]">
      {/* Main Cursor */}
      <div
        className="absolute w-6 h-6 transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-100 ease-out"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
        }}
      >
        {/* Custom Building/House SVG */}
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          className="drop-shadow-lg"
        >
          <path
            d="M12 2L2 7V22H8V16H16V22H22V7L12 2Z"
            fill="hsl(var(--primary))"
            stroke="hsl(var(--primary-foreground))"
            strokeWidth="1"
          />
          <circle cx="12" cy="19" r="1" fill="hsl(var(--primary-foreground))" />
        </svg>
      </div>

      {/* Orbiting Currency SVG */}
      <div
        className="absolute w-20 h-20 transform -translate-x-1/2 -translate-y-1/2"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
        }}
      >
        <div className="relative w-full h-full animate-spin" style={{ animationDuration: '8s' }}>
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              className="opacity-20"
            >
              <circle cx="12" cy="12" r="10" stroke="hsl(var(--primary))" strokeWidth="2" />
              <path
                d="M12 6V8M12 16V18M8 12H10M14 12H16"
                stroke="hsl(var(--primary))"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <text
                x="12"
                y="16"
                textAnchor="middle"
                className="text-xs fill-current"
                style={{ fill: 'hsl(var(--primary))' }}
              >
                ₦
              </text>
            </svg>
          </div>
        </div>
      </div>

      {/* Second orbiting element for more dynamic effect */}
      <div
        className="absolute w-24 h-24 transform -translate-x-1/2 -translate-y-1/2"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
        }}
      >
        <div 
          className="relative w-full h-full animate-spin" 
          style={{ 
            animationDuration: '12s',
            animationDirection: 'reverse'
          }}
        >
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-45">
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              className="opacity-15"
            >
              <path
                d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12z"
                stroke="hsl(var(--primary))"
                strokeWidth="1.5"
              />
              <path
                d="M8 12h8M12 8v8"
                stroke="hsl(var(--primary))"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomCursor;