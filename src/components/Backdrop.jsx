
'use client'
import React, { useEffect, useRef } from 'react';
import '@/styles/Backdrop.css'; // Import CSS

const Backdrop = ({children}) => {
  const objectRefs = useRef([]);

  useEffect(() => {
    // Set random starting positions, animation durations, and delays for each object
    objectRefs.current.forEach((obj) => {
      if (obj) {
        obj.style.top = `${Math.random() * 100}vh`;
        obj.style.left = `${Math.random() * 100}vw`;
        obj.style.animationDuration = `${5 + Math.random() * 10}s`; // Random duration between 5s and 15s
        obj.style.animationDelay = `${Math.random() * 5}s`; // Random delay
      }
    });
  }, []);

  return (
    <div className="backdrop">
      {Array.from({ length: 5 }).map((_, idx) => (
        <div
          key={idx}
          ref={(el) => (objectRefs.current[idx] = el)}
          className="animated-object"
        ></div>
      ))}
    </div>
  );
};

export default Backdrop;
