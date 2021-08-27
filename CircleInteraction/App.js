import logo from './logo.svg';
import './App.css';
import React, { useState, useCallback } from 'react';



function App() {

  const width = 960;
  const height = 500;
  
  const strokeWidth = 5
  const circleRadius = 30;
  const initialMousePosition = {x: width/2, y: height/2};

  const [mousePosition, setMousePosition] = useState(initialMousePosition)

  const handleMouseMove = useCallback((event) => {
    const { clientX, clientY } = event;
    console.log({ clientX, clientY });
    setMousePosition({ x: clientX, y: clientY});
  }, [setMousePosition]);

  return (
        <svg width={width} height={height} onMouseMove={handleMouseMove}>
          <circle
            cx={mousePosition.x}
            cy={mousePosition.y}
            r={circleRadius}
            fill="yellow"
            stroke="black"
            stroke-width={strokeWidth}
          />
        </svg>
  );
}

export default App;
