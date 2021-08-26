import React from 'react';
import ReactDOM from 'react-dom';
import * as d3 from 'd3';
import './App.css';
import {Face} from './Face';

const width = 166;
const height = 166;

// const centerX = width/ 2;
// const centerY = height / 2;
// const strokeWidth = 10

// const eyeOffsetX = 100;
// const eyeOffsetY = 100;
// const eyeRadius = 40;
// const mouthWidth = 20;
// const mouthRadius = 150;

// const mouthArc = d3.arc()
//   .innerRadius(mouthRadius)
//   .outerRadius(mouthRadius + mouthWidth)
//   .startAngle(Math.PI / 2)
//   .endAngle(Math.PI * 3/2);

// const BackgroundCircle = (props) => (
//   <circle 
//     r={props.radius}
//     fill="yellow"
//     stroke="black"
//     stroke-width={strokeWidth}
//   >
//   </circle>
// );

// const BackgroundCircle = ({ radius, strokeWidth }) => (
//   <circle 
//     r={radius}
//     fill="yellow"
//     stroke="black"
//     stroke-width={strokeWidth}
//   >
//   </circle>
// );

const array = d3.range(5*3);

const App = () => array.map(() => (
  // <div className="App">
  //   <header className="App-header">
    <Face
      width={width}
      height={height}
      centerX={width/ 2}
      centerY={height / 2}
      strokeWidth={5 + Math.random() * 10}
      eyeOffsetX={20 + Math.random() * 10}
      eyeOffsetY={20 + Math.random() * 10}
      eyeRadius={5 + Math.random() * 10}
      mouthWidth={7 + Math.random() * 10}
      mouthRadius={30 + Math.random() * 10}
    />


      // {/* <Face
      //   width={width}
      //   height={height}
      //   centerX={width/ 2}
      //   centerY={height / 2}
      //   strokeWidth={10}
      //   eyeOffsetX={100}
      //   eyeOffsetY={100}
      //   eyeRadius={40}
      //   mouthWidth={20}
      //   mouthRadius={150}
      // /> */}
  //   </header>
  // </div>
));

// const App = () => (
//   <div className="App">
//       <header className="App-header">
//       {/* <svg width={width} height={height}>
//         <g transform={`translate(${centerX}, ${centerY})`} > */}

//         <FaceContainer
//           width={width}
//           height={height}
//           centerX={centerX}
//           centerY={centerY}
//         >
//           <BackgroundCircle radius = {centerY - strokeWidth / 2}
//             strokeWidth={strokeWidth}
//           >
//           </BackgroundCircle>

//           <Eyes
//             eyeOffsetX={eyeOffsetX}
//             eyeOffsetY={eyeOffsetY}
//             eyeRadius={eyeRadius}
//           >
//           </Eyes>

//           <Mouth
//             mouthRadius={mouthRadius}
//             mouthWidth={mouthWidth}
//           >
//           </Mouth>

//         </FaceContainer>
//         {/* </g>
        
//         </svg> */}
//       </header>
//     </div>
// )

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
