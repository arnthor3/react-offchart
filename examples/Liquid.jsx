import React, { Component } from 'react';
import { render } from 'react-dom';
import Liquid from '../src/Charts/Liquid';

const style = {
  width: '600px',
  height: '500px',
};

const LL = () => (
  <div style={style}>
    <Liquid
    responsive
  />
  </div>

);


render(<LL />, document.getElementById('app'));

