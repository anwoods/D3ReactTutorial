import React from 'react';
import * as d3 from 'd3';
import ReactDOM from 'react-dom';
import './App.css';

const width = 960;
const height = 500;

const centerX = width/ 2;
const centerY = height / 2;
const strokeWidth = 10

const eyeOffsetX = 100;
const eyeOffsetY = 100;
const eyeRadius = 40;
const mouthWidth = 20;
const mouthRadius = 150;

const mouthArc = d3.arc()
  .innerRadius(mouthRadius)
  .outerRadius(mouthRadius + mouthWidth)
  .startAngle(Math.PI / 2)
  .endAngle(Math.PI * 3/2);

// const BackgroundCircle = (props) => (
//   <circle 
//     r={props.radius}
//     fill="yellow"
//     stroke="black"
//     stroke-width={strokeWidth}
//   >
//   </circle>
// );

const BackgroundCircle = ({ radius }) => (
  <circle 
    r={radius}
    fill="yellow"
    stroke="black"
    stroke-width={strokeWidth}
  >
  </circle>
);

const App = () => (
  <div className="App">
      <header className="App-header">
      <svg width={width} height={height}>
        <g transform={`translate(${centerX}, ${centerY})`} >
          <BackgroundCircle radius = {centerY - strokeWidth / 2}
          >
          </BackgroundCircle>

          <circle 
            cx={-eyeOffsetX}
            cy={-eyeOffsetY}
            r={eyeRadius}
          >
          </circle>
          <circle 
            cx={eyeOffsetX}
            cy={-eyeOffsetY}
            r={eyeRadius}
          >
          </circle>
          <path 
            d={mouthArc()}
          >
          </path>
        </g>
        
        </svg>
      </header>
    </div>
)

// function App() {
//   const width = 960;
//   const height = 500;

//   const centerX = width/ 2;
//   const centerY = height / 2;
//   const strokeWidth = 10

//   const eyeOffsetX = 100;
//   const eyeOffsetY = 100;
//   const eyeRadius = 40;
//   const mouthWidth = 20;
//   const mouthRadius = 150;

//   const mouthArc = d3.arc()
//     .innerRadius(mouthRadius)
//     .outerRadius(mouthRadius + mouthWidth)
//     .startAngle(Math.PI / 2)
//     .endAngle(Math.PI * 3/2);

//   return (
//     <div className="App">
//       <header className="App-header">
//       <svg width={width} height={height}>
//         <g transform={`translate(${centerX}, ${centerY})`} >
//           <circle 
//             r={centerY - strokeWidth / 2}
//             fill="yellow"
//             stroke="black"
//             stroke-width={strokeWidth}
//           >
//           </circle>
//           <circle 
//             cx={-eyeOffsetX}
//             cy={-eyeOffsetY}
//             r={eyeRadius}
//           >
//           </circle>
//           <circle 
//             cx={eyeOffsetX}
//             cy={-eyeOffsetY}
//             r={eyeRadius}
//           >
//           </circle>
//           <path 
//             d={mouthArc()}
//           >
//           </path>
//         </g>
        
//         </svg>
//       </header>
//     </div>
//   );
// }

export default App;
