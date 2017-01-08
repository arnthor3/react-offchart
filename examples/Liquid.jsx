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
          stroke: 'pink',
        }}
        wetStyle={{
          fill: 'white',
          stroke: 'red',
        }}
        legend="Percentage of Completed Tasks"
        value={(Math.random() * 50) + 45}
      />
    </div>
    <div style={style}>
      <Liquid
        responsive
        dryStyle={{
          fill: 'red',
          stroke: 'pink',
        }}
        wetStyle={{
          fill: 'white',
          stroke: 'red',
        }}
        legend="Percentage of Completed Tasks"
        value={Math.random() * 75}
      />
    </div>
  </span>


);


render(<LL />, document.getElementById('app'));

