import React from 'react';
import * as d3 from 'd3';
import ReactDOM from 'react-dom';
import './App.css';

function App() {
  const width = 960;
  const height = 500;

  const centerX = width/ 2;
  const centerY = height / 2;
  const strokeWidth = 10

  const eyeOffsetX = 100;
  const eyeOffsetY = 100;
  const eyeRadius = 40;

  return (
    <div className="App">
      <header className="App-header">
      <svg width={width} height={height}>
        <circle 
            cx={centerX} 
            cy={centerY}
            r={centerY - strokeWidth / 2}
            fill="yellow"
            stroke="black"
            stroke-width={strokeWidth}
        >
        </circle>
        <circle 
            cx={centerX - eyeOffsetX}
            cy={centerY - eyeOffsetY}
            r={eyeRadius}
        >
        </circle>
        <circle 
            cx={centerX + eyeOffsetX}
            cy={centerY - eyeOffsetY}
            r={eyeRadius}
        >
        </circle>
        </svg>
      </header>
    </div>
  );
}

export default App;
