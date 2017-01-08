import React, { Component } from 'react';
import { render } from 'react-dom';
import Liquid from '../src/Charts/Liquid';

const style = {
  width: '600px',
  height: '500px',
};

const LL = () => (
  <span>
    <div style={style}>
      <Liquid
        responsive
        dryStyle={{
          fill: 'red',
        }}
        wetStyle={{
          fill: 'white',
        }}
        legend="Percentage of Completed Tasks"
        value={(Math.random() * 50) + 45}
        amplitude={4}
        animationWavesTime={2500}
      />
    </div>
    <div style={style}>
      <Liquid
        responsive
        dryStyle={{
          fill: 'red',
        }}
        wetStyle={{
          fill: 'white',
        }}
        legend="Percentage of Completed Tasks"
        value={Math.random() * 100}
        waveScaleLimit
        amplitude={0}
      />
    </div>
  </span>


);


render(<LL />, document.getElementById('app'));

