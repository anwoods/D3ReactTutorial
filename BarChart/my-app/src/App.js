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
const margin = {top: 20, bottom: 60, right: 30, left: 220};
const xAxisLabelOffset = 50;


function App() {
  const data= useData();

  if(!data){
    return <pre>
      Loading...
    </pre>
  }

  const innerHeight = height - margin.bottom - margin.top;
  const innerWidth = width - margin.left - margin.right;

  const yValue = d => d.Country;
  const xValue = d => d.Population;

  const siFormat = d3.format(".2s");
  const xAxisTickFormat = n => siFormat(n).replace('G', 'B');

  const yScale = d3.scaleBand()
    .domain(data.map(yValue))
    .range([0, innerHeight])
    .paddingInner(0.1);

  const xScale = d3.scaleLinear()
    .domain([0, d3.max(data, xValue)])
    .range([0, innerWidth]);

  return (
    <svg width={width} height={height}>
      <g transform={`translate(${margin.left}, ${margin.top})`} >
        <AxisBottom 
          xScale={xScale} 
          innerHeight={innerHeight} 
          tickFormat={xAxisTickFormat} 
        />
        <AxisLeft yScale={yScale}/>
        <text 
          className="axis-label" 
          x={innerWidth/2} 
          y={innerHeight+xAxisLabelOffset} 
          textAnchor="middle"
        >
          Population
        </text>
        <Marks 
            data={data} 
            xScale={xScale} 
            yScale={yScale} 
            xValue={xValue} 
            yValue={yValue} 
            tooltipFormat={xAxisTickFormat}
          />
      </g>
    </svg>
  );
}

export default App;