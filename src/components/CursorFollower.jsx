import React, { useEffect, useState, useRef } from "react";

const CursorFollower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const rafRef = useRef(null);
  const mousePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    let animationFrameId;

    const updatePosition = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);

      // Cancel previous frame if it exists
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }

      // Use requestAnimationFrame for smooth, optimized updates
      rafRef.current = requestAnimationFrame(() => {
        setPosition(mousePos.current);
      });
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", updatePosition, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", updatePosition);
      document.removeEventListener("mouseleave", handleMouseLeave);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [isVisible]);

  return (
    <>
      {/* Main cursor ball */}
      <div
        className="cursor-follower"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          opacity: isVisible ? 1 : 0,
        }}
      />

      {/* Trailing effect */}
      <div
        className="cursor-follower-trail"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          opacity: isVisible ? 0.5 : 0,
        }}
      />

      <style jsx>{`
        .cursor-follower {
          position: fixed;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: linear-gradient(135deg, #e8c127, #cfa80f);
          pointer-events: none;
          z-index: 9999;
          transform: translate(-50%, -50%);
          transition: opacity 0.3s ease, transform 0.15s ease;
          box-shadow: 0 0 15px rgba(232, 193, 39, 0.6);
        }

        .cursor-follower-trail {
          position: fixed;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          border: 2px solid #e8c127;
          pointer-events: none;
          z-index: 9998;
          transform: translate(-50%, -50%);
          transition: opacity 0.3s ease, transform 0.4s ease, width 0.3s ease,
            height 0.3s ease;
        }

        .cursor-follower:hover {
          transform: translate(-50%, -50%) scale(1.5);
        }

        @media (max-width: 768px) {
          .cursor-follower,
          .cursor-follower-trail {
            display: none;
          }
        }
      `}</style>
    </>
  );
};

export default CursorFollower;
