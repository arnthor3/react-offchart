import React, { Component } from 'react';
import { render } from 'react-dom';
import Liquid from '../src/Charts/Liquid';

const style = {
  width: '800px',
  height: '400px',
};

class TestLiquid extends Component {
  constructor() {
    super();
    this.onClickOne = this.onClickOne.bind(this);
    this.onClickTwo = this.onClickTwo.bind(this);
    this.state = {
      valueOne: Math.random() * 100,
      valueTwo: Math.random() * 100,
    };
  }

  onClickOne() {
    this.setState({ valueOne: Math.random() * 100 });
  }

  onClickTwo() {
    this.setState({ valueTwo: Math.random() * 100 });
  }

  render() {
    return(
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
            value={this.state.valueOne}
            amplitude={4}
            animationWavesTime={2500}
          />
        </div>
        <button onClick={() => { this.onClickOne(); }}>RANDOM</button>
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
            value={this.state.valueTwo}
            waveScaleLimit
            amplitude={0}
          />
        </div>
      </span>
    );
  }

}

render(<TestLiquid />, document.getElementById('app'));

