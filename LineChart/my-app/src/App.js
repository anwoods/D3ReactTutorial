import './App.css';
import ReactDOM from 'react-dom';
import React from 'react';
import * as d3 from 'd3';
import { useData } from './useData';
import { AxisBottom } from './AxisBottom';
import { AxisLeft } from './AxisLeft';
import { Marks } from './Marks';


const width = 960;
const height = 500;
const margin = {top: 20, bottom: 60, right: 30, left: 90};
const xAxisLabelOffset = 50;
const yAxisLabelOffset= 40;
const tickOffset = 5;


function App() {
  const data= useData();

  if(!data){
    return <pre>
      Loading...
    </pre>
  }

  console.log("data ", data)

  const innerHeight = height - margin.bottom - margin.top;
  const innerWidth = width - margin.left - margin.right;
  const radiusSize= 10;

  const yValue = d => d.temperature;
  const yAxisLabel = "Temperature";
  const xValue = d => d.timestamp;
  const xAxisLabel ='Timestamp';

  const xAxisTickFormat = d3.timeFormat("%a");

  const yScale = d3.scaleLinear()
    .domain(d3.extent(data, yValue))
    .range([innerHeight, 0])

    //d3.extent(data, xValue)
  const xScale = d3.scaleTime()
    .domain(d3.extent(data, xValue))
    .range([0, innerWidth])
    .nice();

  const num = 5.1;

  console.log(" xvale ", data.map(d => xValue(d)))
  console.log(" some thing ", (d3.extent(data, xValue)))
  console.log("num ", xScale(num.toString()))

  return (
    <svg width={width} height={height}>
      <g transform={`translate(${margin.left}, ${margin.top})`} >
        <AxisBottom 
          xScale={xScale} 
          innerHeight={innerHeight} 
          tickFormat={xAxisTickFormat} 
          tickOffset={5}
        />
        <text 
          className="axis-label" 
          textAnchor="middle"
          transform={`translate(${-yAxisLabelOffset},${innerHeight / 2}) rotate(-90)`}
        >
          {yAxisLabel}
        </text>
        <AxisLeft yScale={yScale} innerWidth={innerWidth} tickOffset={-5}/>
        <text 
          className="axis-label" 
          x={innerWidth/2} 
          y={innerHeight+xAxisLabelOffset} 
          textAnchor="middle"
        >
          {xAxisLabel}
        </text>
        <Marks 
            data={data} 
            xScale={xScale} 
            yScale={yScale} 
            xValue={xValue} 
            yValue={yValue} 
            tooltipFormat={xAxisTickFormat}
            radiusSize={radiusSize}
          />
      </g>
    </svg>
  );
}

export default App;