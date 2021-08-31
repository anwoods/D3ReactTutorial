import React, { useState, useEffect } from 'react';
import * as d3 from 'd3';

export const useData= () => {
    const csvUrl =
    'https://gist.githubusercontent.com/curran/a08a1080b88344b0c8a7/raw/639388c2cbc2120a14dcf466e85730eb8be498bb/iris.csv';
  
    const [data, setData] = useState(null);
  
    useEffect(() => {
      // d3.csv(csvUrl).then(data => {
      //   //console.log("data is ", data);
      //   setData(data);
      // });
      const row = (d) => {
          //console.log("row d ", d);
        d.sepal_length = +d.sepal_length;
        d.sepal_width = +d.sepal_width;
        d.petal_length = +d.petal_length;
        d.petal_width = +d.petal_width;
        return d;
      }
      d3.csv(csvUrl, row).then(data => {
        setData(data);
      })
    }, []);
    
    return data;
};