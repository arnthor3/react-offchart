import React, { Component } from 'react';
import { render } from 'react-dom';
import VersusArc from '../src/Charts/VersusArc';

const style = {
  width: '800px',
  height: '300px',
};

const valuesOne = [
  { label: 'Yes', value: 2148135 },
  { label: 'No', value: 2455645 },
];

class TestVersus extends Component {
  constructor() {
    super();
    this.onClickOne = this.onClickOne.bind(this);
    this.onClickTwo = this.onClickTwo.bind(this);
  }

  onClickOne() {
    this.setState({ valueOne: Math.random() * 100 });
  }

  onClickTwo() {
    this.setState({ valueTwo: Math.random() * 100 });
  }

  render() {
    return (
      <span>
        <div style={style}>
          <VersusArc
            responsive
            legend="Percentage of Completed Tasks"
            values={valuesOne}
          />
        </div>
        <button onClick={() => { this.onClickOne(); }}>RANDOM</button>
      </span>
    );
  }

}

render(<TestVersus />, document.getElementById('app'));

