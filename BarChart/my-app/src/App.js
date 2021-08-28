import './App.css';
import ReactDOM from 'react-dom';
import React, { useState, useCallback, useEffect } from 'react';
import * as d3 from 'd3';

const csvUrl =
  'https://gist.githubusercontent.com/curran/0ac4077c7fc6390f5dd33bf5c06cb5ff/raw/605c54080c7a93a417a3cea93fd52e7550e76500/UN_Population_2019.csv';

const width = 960;
const height = 500;
const margin = {top: 20, bottom: 20, right: 20, left: 20};

function App() {


  const [data, setData] = useState(null);
  useEffect(() => {
    // d3.csv(csvUrl).then(data => {
    //   //console.log("data is ", data);
    //   setData(data);
    // });
    const row = (d) => {
      d.Population = +d['2020']
      return d;
    }
    d3.csv(csvUrl, row).then(data => {
      setData(data.slice(0, 10));
    })
  }, []);

  if(!data){
    return <pre>
      Loading...
    </pre>
  }

  const innerHeight = height - margin.bottom - margin.top;
  const innerWidth = width - margin.left - margin.right;


  const yScale = d3.scaleBand()
    .domain(data.map(d => d.Country))
    .range([0, innerHeight]);

  const xScale = d3.scaleLinear()
    .domain([0, d3.max(data, d => d.Population)])
    .range([0, innerWidth]);


  return (
    <svg width={width} height={height}>
      <g transform={`translate(${margin.left}, ${margin.top})`} >
        {
          xScale.ticks().map(tickValue =>
            <g  transform={`translate(${xScale(tickValue)}, 0)`}>
              <line 
                y2={innerHeight}
                stroke= "black"
              />
              <text style={{textAnchor: "middle"}} dy=".71em" y={innerHeight + 3}>
                {tickValue}
              </text>
            </g>
          )
        }
        {
          data.map(d => 
            <rect 
              x={0}
              y={yScale(d.Country)}
              width= {xScale(d.Population)}
              height={yScale.bandwidth()}
            />
          )
        }
      </g>
    </svg>
  );
}

export default App;
