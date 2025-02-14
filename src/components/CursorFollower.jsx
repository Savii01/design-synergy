import { useEffect, useState } from "react";

const CursorFollower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Smooth following effect using requestAnimationFrame
  useEffect(() => {
    const followMouse = () => {
      setTrail((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.1,
        y: prev.y + (position.y - prev.y) * 0.1,
      }));
      requestAnimationFrame(followMouse);
    };
    
    followMouse();
  }, [position]);

  return (
    <div
      className="z-[1500] fixed top-0 left-0 w-4 h-4 bg-purple dark:bg-lightBlue rounded-full pointer-events-none transition-transform duration-75 ease-out"
      style={{
        transform: `translate(${trail.x}px, ${trail.y}px)`,
      }}
    />
  );
};

export default CursorFollower;
