import React from 'react';
import './App.css';
import {ReactComponent as Semicircle} from './svg/semicircle.svg';
import Info from './sections/info';

function App() {
  return (
    <>
      <div className = "home">
        <div className = "line">
          <div className = "bg"/>
        </div>
        {/*Here goes the js animation*/}
      </div>
      <div className = "transition-circles-container">
        <Semicircles/>
      </div>
      <div className = "info">
        <Info/>
      </div>
    </>
  );
}

function Semicircles() {
  return (
    <>
      <div className="circle">
        <Semicircle></Semicircle>
      </div>
      <div className="circle">
        <Semicircle></Semicircle>
      </div>
      <div className="circle">
        <Semicircle></Semicircle>
      </div>
      <div className="circle">
        <Semicircle></Semicircle>
      </div>
      <div className="circle">
        <Semicircle></Semicircle>
      </div>
      <div className="circle">
        <Semicircle></Semicircle>
      </div>
      <div className="circle">
        <Semicircle></Semicircle>
      </div>
      <div className="circle">
        <Semicircle></Semicircle>
      </div>
    </>
  );
}

export default App;
