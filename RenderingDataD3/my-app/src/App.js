import './App.css';
import ReactDOM from 'react-dom';
import React, { useState, useCallback, useEffect } from 'react';
import * as d3 from 'd3';
import { Message } from './message';

const csvUrl =
  'https://gist.githubusercontent.com/curran/b236990081a24761f7000567094914e0/raw/cssNamedColors.csv';



function App() {


  const [data, setData] = useState(null);
  useEffect(() => {
    // d3.csv(csvUrl).then(data => {
    //   //console.log("data is ", data);
    //   setData(data);
    // });
    d3.csv(csvUrl).then(setData)
  }, []);



  return (
    <pre>
      Data is: {data ? Message(data) : 'Loading...'}
    </pre>
  );
}

export default App;
