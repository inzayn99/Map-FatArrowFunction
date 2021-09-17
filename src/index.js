import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Cards';
import './App';
import "./index.css";
import Sdata from "./Sdata";


ReactDOM.render(
  <>
  <h1 className="heading_style">List Of Top 8 Netflix Series</h1>

  {Sdata.map((val) => {
    return(
      <Card 
      imgsrc={val.imgsrc}
      title={val.title}
      sname={val.sname}
      link={val.link} 
      />
    );

  })}
  </>,
  document.getElementById('root')
);



// ---------------------start map & flat arrow function example-----------------//
// function myname(a,b){
//   return a+b;
// }

// const myname = (a,b) => a+b;

// ---------------end map & flat arrow function-----------------------//
