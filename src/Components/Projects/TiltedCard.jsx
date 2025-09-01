import React, { useRef, useState } from "react";

function TiltedCard({project}) {
  const cardRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!cardRef.current || !isHovering) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    const x = (clientX - left) / width;
    const y = (clientY - top) / height;

    const tiltX = (y - 1) * 12; // Adjusted tilt amplitude
    const tiltY = -(x - 1) * 12; // Adjusted tilt amplitude

    setPosition({ x: tiltX, y: tiltY });
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setPosition({ x: 0, y: 0 });
  };

  const transformStyle = {
    transform: `perspective(1000px) rotateX(${position.x}deg) rotateY(${position.y}deg)`,
    transition: isHovering ? 'none' : 'transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
  };

  return (
    <div
      key={project.index}
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group relative p-1 transition-all duration-500 hover:scale-[1.02] active:scale-[0.98] reveal reveal-delay-1"
    >
      <div className="absolute inset-0 rounded-[0.5rem] "></div>
      <div
        className="relative z-10 rounded-[0.5rem] overflow-hidden backdrop-blur-3xl bg-white/5 border border-white/10 shadow-xl"
        style={transformStyle}
      >
        {/* Card Image */}
        <div className="overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-48 sm:h-56 object-cover "
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="relative p-6 flex flex-col flex-1">
          <h3 className="text-xl sm:text-xl font-extrabold mb-2 text-white bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-400">
            {project.title}
          </h3>
          <p className="text-gray-300 mb-2 flex-1 text-[14px] sm:text-[14px] leading-relaxed line-clamp-3">
            {project.description}
          </p>
          <div className="flex gap-4 mt-auto">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative overflow-hidden inline-flex items-center justify-center px-8 py-3 bg-blue-600 text-white font-bold rounded-full shadow-lg transition-all duration-300 ease-in-out hover:bg-blue-700 hover:tracking-wide active:scale-95"
            >
              <span className="relative z-10">View Project</span>
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/50 to-transparent transform -skew-x-12 -translate-x-full transition-all duration-500 group-hover:translate-x-full"></span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TiltedCard
