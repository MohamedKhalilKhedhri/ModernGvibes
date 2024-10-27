import { useAnimate } from "framer-motion";
import React, { useRef } from "react";

const Trail = ({
  children,
  images,
  renderImageBuffer,
}) => {
  const [scope, animate] = useAnimate();

  const lastRenderPosition = useRef({ x: 0, y: 0 });
  const imageRenderCount = useRef(0);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;

    const distance = calculateDistance(
      clientX,
      clientY,
      lastRenderPosition.current.x,
      lastRenderPosition.current.y
    );

    if (distance >= renderImageBuffer) {
      lastRenderPosition.current.x = clientX;
      lastRenderPosition.current.y = clientY;

      renderNextImage();
    }
  };

  const calculateDistance = (x1, y1, x2, y2) => {
    const deltaX = x2 - x1;
    const deltaY = y2 - y1;
    return Math.sqrt(deltaX * deltaX + deltaY * deltaY);
  };

  const renderNextImage = () => {
    const imageIndex = imageRenderCount.current % images.length;
    const selector = `[data-mouse-move-index="${imageIndex}"]`;

    const el = document.querySelector(selector);

    el.style.top = `${lastRenderPosition.current.y}px`;
    el.style.left = `${lastRenderPosition.current.x}px`;
  



    animate(
      selector,
      {
        opacity: [0, 1],
        transform: [
          ` scale(0.5)`,
          ` scale(1)`,
        ],
        x: lastRenderPosition.current.x,
        y: lastRenderPosition.current.y,
      },
<<<<<<< HEAD
      { type: "spring",  damping: 15, stiffness: 200 }
=======
     { duration: .6, ease: "circIn"}
>>>>>>> c6eaba12d539acc181550dad74ed6bf03b1b3438
    );

    animate(
      selector,
      {
        opacity: [1, 0],
        
      },
      { ease: "linear", duration: 0.5, delay: 1.5 }
    );

    imageRenderCount.current = imageRenderCount.current + 1;
  };
  return (
    <div
      ref={scope}
      className="relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {children}

      {images.map((img, index) => (
        <img
          className="pointer-events-none absolute left-0 top-0 h-52 w-auto rounded-xl border-2 border-black bg-neutral-900 object-cover opacity-0"
          src={img}
          alt={`Mouse move image ${index}`}
          key={index}
          data-mouse-move-index={index}
          
        />
      ))}
    </div>
  );
};

export default Trail;
