import './App.css';
import ReactDOM from 'react-dom';
import React, { useState } from 'react';
import * as d3 from 'd3';
import { useData } from './useData';
import { AxisBottom } from './AxisBottom';
import { AxisLeft } from './AxisLeft';
import { Marks } from './Marks';
import { Dropdown } from './Dropdown';


const width = 960;
const menuHeight = 50;
const height = 500 - menuHeight;
const margin = {top: 20, bottom: 60, right: 30, left: 90};
const xAxisLabelOffset = 50;
const yAxisLabelOffset= 40;

const attributes = [
  { value: 'sepal_length', label: 'Sepal Length' },
  { value: 'sepal_width', label: 'Sepal Width' },
  { value: 'petal_length', label: 'Petal Length' },
  { value: 'petal_width', label: 'Petal Width' },
  { value: 'species', label: 'Species' }
];

const getLabel = (value) => {
  for(let i = 0; i < attributes.length; i++){
   if( attributes[i].value === value){
     return attributes[i].label;
   }
  }
};


function App() {
  const data= useData();

  const initialXAttribute = 'petal_length';
  const [xAttribute, setXAttribute] = useState(initialXAttribute);

  const initialYAttribute = 'sepal_width';
  const [yAttribute, setYAttribute] = useState(initialYAttribute);

  if(!data){
    return <pre>
      Loading...
    </pre>
  }

  const innerHeight = height - margin.bottom - margin.top;
  const innerWidth = width - margin.left - margin.right;
  const radiusSize= 8;



  const yValue = d => d[yAttribute];
  const yAxisLabel = getLabel(yAttribute);
  
  const xValue = d => d[xAttribute];
  const xAxisLabel = getLabel(xAttribute);

  const siFormat = d3.format(".2s");
  const xAxisTickFormat = n => siFormat(n).replace('G', 'B');

  const yScale = d3.scaleLinear()
    .domain(d3.extent(data, yValue))
    .range([0, innerHeight])

    //d3.extent(data, xValue)
  const xScale = d3.scaleLinear()
    .domain(d3.extent(data, xValue))
    .range([0, innerWidth])
    .nice();




  return (
    <>
      <label for='x-select'>X:</label>
      <Dropdown 
       options={attributes} 
       id='x-select' 
       selectedValue={xAttribute}
       onSelectedValueChange={setXAttribute}
      />
      <label for='y-select'>Y:</label>
      <Dropdown 
       options={attributes} 
       id='y-select' 
       selectedValue={yAttribute}
       onSelectedValueChange={setYAttribute}
      />
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
    </>
  );
}

export default App;