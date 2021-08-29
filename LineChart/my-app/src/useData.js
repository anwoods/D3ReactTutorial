import React, { useState, useEffect } from 'react';
import * as d3 from 'd3';

export const useData= () => {
  const csvUrl =
  'https://gist.githubusercontent.com/curran/90240a6d88bdb1411467b21ea0769029/raw/7d4c3914cc6a29a7f5165f7d5d82b735d97bcfe4/week_temperature_sf.csv';

    const [data, setData] = useState(null);
  
    useEffect(() => {
      // d3.csv(csvUrl).then(data => {
      //   //console.log("data is ", data);
      //   setData(data);
      // });
      const row = (d) => {
        d.temperature = +d.temperature;
        d.timestamp = new Date(d.timestamp)
        return d;
      }
      d3.csv(csvUrl, row).then(data => {
        setData(data);
      })
    }, []);
    
    return data;
};