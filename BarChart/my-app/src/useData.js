import React, { useState, useEffect } from 'react';
import * as d3 from 'd3';

export const useData= () => {
    const csvUrl =
  'https://gist.githubusercontent.com/curran/0ac4077c7fc6390f5dd33bf5c06cb5ff/raw/605c54080c7a93a417a3cea93fd52e7550e76500/UN_Population_2019.csv';

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
    
    return data;
};