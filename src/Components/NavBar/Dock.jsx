import React, { useRef, useState, useEffect } from 'react';

function DockItem({ children, className = '', onClick, onMouseMove, baseItemSize, magnification, distance, mouseX }) {
  const ref = useRef(null);
  const [size, setSize] = useState(baseItemSize);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const itemCenter = rect.x + baseItemSize / 2;
    const mouseDistance = Math.abs(mouseX - itemCenter);

    let newSize = baseItemSize;
    if (mouseDistance < distance) {
      const scale = 1 - mouseDistance / distance;
      newSize = baseItemSize + scale * (magnification - baseItemSize);
    }
    setSize(newSize);
    
    // Check if the element is being hovered by the mouse
    const hovered = mouseDistance < baseItemSize * 2;
    if (hovered !== isHovered) {
      setIsHovered(hovered);
    }

  }, [mouseX, baseItemSize, magnification, distance, isHovered]);

  return (
    <div
      ref={ref}
      style={{
        width: size,
        height: size,
      }}
      onClick={onClick}
      onMouseMove={onMouseMove}
      className={`relative inline-flex items-center justify-center rounded-full bg-[#060010] border-neutral-700 border-2 shadow-md ${className}`}
      tabIndex={0}
      role="button"
    >
      {React.Children.map(children, child =>
        React.cloneElement(child, { isHovered })
      )}
    </div>
  );
}

function DockLabel({ children, className = '', isHovered }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show the label when hovered to prevent it from appearing on load
    setIsVisible(isHovered);
  }, [isHovered]);

  return (
    <>
      {isVisible && (
        <div
          className={`${className} absolute -top-6 left-1/2 w-fit whitespace-pre rounded-md border border-neutral-700 bg-[#060010] px-2 py-0.5 text-xs text-white`}
          role="tooltip"
          style={{ transform: 'translate(-50%, 0)' }}
        >
          {children}
        </div>
      )}
    </>
  );
}

function DockIcon({ children, className = '' }) {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <img src={children} alt="" className="w-full h-full p-2" />
    </div>
  );
}

export default function Dock({
  items,
  className = '',
  magnification = 60,
  distance = 150,
  panelHeight = 64,
  baseItemSize = 40,
}) {
  const [mouseX, setMouseX] = useState(Infinity);
  const dockRef = useRef(null);

  const handleMouseMove = (e) => {
    if (dockRef.current) {
      setMouseX(e.pageX);
    }
  };

  const handleMouseLeave = () => {
    setMouseX(Infinity);
  };

  return (
    <div className="w-[calc(100%-2rem)]  flex justify-center fixed z-50 bottom-10 ">
      <div
        ref={dockRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={`${className} flex items-end px-5 w-fit gap-2 sm:gap-4 rounded-2xl border-neutral-700 border-2 pb-2 bg-neutral-900/40 backdrop-blur-lg`}
        style={{ height: panelHeight }}
        role="toolbar"
        aria-label="Application dock"
      >
        {items.map((item, index) => (
          <DockItem
            key={index}
            onClick={item.onClick}
            className={item.className}
            mouseX={mouseX}
            distance={distance}
            magnification={magnification}
            baseItemSize={baseItemSize}
          >
            <DockIcon>{item.icon}</DockIcon>
            <DockLabel>{item.label}</DockLabel>
          </DockItem>
        ))}
      </div>
    </div>
  );
}
