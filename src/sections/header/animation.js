import React, { Component } from 'react';
import './animation.css';
import Button from './button.js';
import {ReactComponent as J} from '../svg/logo/J.svg';
import {ReactComponent as D} from '../svg/logo/D.svg';
import anime from 'animejs';

export default class Animation extends Component {

  animation () {
    anime ({
      targets: document.getElementsByTagName("rect"),
      loop: true,
      direction: 'alternate',
      strokeDashoffset: [anime.setDashoffset, 0],
      //x: anime.stagger([0,0.4], {grid: [40,40], from: 'center', 'axis' : 'x'}),
      //y: anime.stagger([0,10], {grid: [40,40], from: 'center', 'axis' : 'y'}),
      duration: 2500,
      delay: 350,
      endDelay: anime.stagger(10)
    });
  }

  componentDidMount () {
    this.animation()
  }

  render () {
    return (
    <>
      <Button/>
      <div className = "logo-container">
        <div className = "svgs">
            <J/>
            <D/>
            <D/>
        </div>
      </div>
    </>
  )
  }
}