import './App.css';
import ReactDOM from 'react-dom';
import React, { useState, useCallback, useEffect } from 'react';
import * as d3 from 'd3';
import { Message } from './message';

const csvUrl =
  'https://gist.githubusercontent.com/curran/b236990081a24761f7000567094914e0/raw/cssNamedColors.csv';

const width = 960;
const height = 500;
const centerX = width / 2;
const centerY = height / 2;

function App() {


  const [data, setData] = useState(null);
  useEffect(() => {
    // d3.csv(csvUrl).then(data => {
    //   //console.log("data is ", data);
    //   setData(data);
    // });
    d3.csv(csvUrl).then(setData)
  }, []);

  if(!data){
    return <pre>
      Loading...
    </pre>
  }

  const pieArc = d3.arc()
  .innerRadius(0)
  .outerRadius(width);

  const colorPie = d3.pie().value(1);

    // <pre>
    //   Data is: {data ? Message(data) : 'Loading...'}
    // </pre>

  /* {data.map((d, i) => (
    <path 
      fill={d['RGB hex value']}
      d={pieArc({
        startAngle: i / data.length * 2 * Math.PI,
        endAngle:  (i+1) / data.length * 2 * Math.PI
    })}
    />
  ))} */

  return (
    <svg width={width} height={height}>
      <g transform={`translate(${centerX}, ${centerY})`} >
        {
          colorPie(data).map(d => (
            <path
              fill={d.data['RGB hex value']}
              d={pieArc(d)}
            />
          ))
        
        

        }
      </g>
    </svg>

  );
}

export default App;
