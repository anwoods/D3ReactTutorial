import './App.css';
import ReactDOM from 'react-dom';
import React, { useState, useCallback, useEffect } from 'react';
import * as d3 from 'd3';

const csvUrl =
  'https://gist.githubusercontent.com/curran/0ac4077c7fc6390f5dd33bf5c06cb5ff/raw/605c54080c7a93a417a3cea93fd52e7550e76500/UN_Population_2019.csv';

const width = 960;
const height = 500;

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

  const yScale = d3.scaleBand()
    .domain(data.map(d => d.Country))
    .range([0, height]);

  const xScale = d3.scaleLinear()
    .domain([0, d3.max(data, d => d.Population)])
    .range([0, width]);


  return (
    <svg width={width} height={height}>
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
    </svg>
  );
}

export default App;
