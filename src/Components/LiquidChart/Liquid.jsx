import React, { Component, PropTypes } from 'react';
import { select, selectAll } from 'd3-selection';
import { area, curveMonotoneX } from 'd3-shape';
import { timer } from 'd3-timer';
import * as ease from 'd3-ease';
import { interpolate } from 'd3-interpolate';
import * as ch from '../../Constants/liquid';
import cloneChildren from '../../Helpers/cloneChildren';
import { LiquidProps } from '../../Props/liquidProps';

import * as dh from '../../Helpers/Liquid/dimensions';

export default class Liquid extends Component {
  static propTypes = LiquidProps;
  static defaultProps = {
    // animationTime: 2000,
    // animationEase: 'easeCubicInOut',
    amplitude: 1,
  }
  constructor(props) {
    super();
    if (props.innerBoundaries > props.outerBoundaries) {
      throw new Error(ch.INNER_BIGGER_THAN_OUTER);
    } else if (props.outerBoundaries > 1) {
      throw new Error(ch.OUTER_BIGGER_THAN_ONE);
    }
  }

  componentDidMount() {
    this.renderChart();
  }

  componentDidUpdate(prevProps, prevState) {
    this.renderChart();
  }

  getEasing() {
    const animationEase = ease[this.props.ease];

    if (animationEase === 'function') {
      return animationEase;
    }

    return ease[ch.EASE];
  }

  getAnimationTime() {
    const animationTime = this.props.animationTime;

    if (animationTime === undefined) {
      return 2000;
    }

    return animationTime;
  }

  animate() {
    const el = select(this.container);

    const animationEase = this.getEasing();

    const animationTime = this.getAnimationTime();

    const waveScale = dh.getWaveScaleLimit();
  }

  draw() {
    const arr = new Array(ch.SAMPLING);
    console.log(this.container);
    const chart = select(this.container);
    const el = chart.select('clipPath').select('path');

    const textValue = chart.selectAll(`.${ch.TEXT_VALUE}`);
    const decimalValue = chart.selectAll(`.${ch.TEXT_DECIMAL}`);
    const percentageValue = chart.selectAll(`.${ch.TEXT_PERCENTAGE}`);
    decimalValue.text('.3');
    percentageValue.text('%');
    console.log(textValue.empty());
    textValue.text(parseInt(this.props.value));
    el.attr('d', dh.getWave(this.props)(arr));
  }

  renderChart() {
    const shouldAnimate = (
      this.props.animationTime || this.props.animationEase
    );
    if (shouldAnimate) {
      this.animate();
      return;
    }
    this.draw();
  }

  render() {
    const d = dh.getDimensions(this.props);
    return (
      <g>

      <g
        ref={(c) => { this.container = c; }}
        transform={`translate(${d.cx},${d.cy})`}
      >
        {cloneChildren(this.props, d)}
      </g>
      <line
          x1={d.cx}
          x2={d.cx}
          y1={0}
          y2={this.props.height}
          stroke="red"
        />
      <line
          x1={0}
          x2={this.props.width}
          y1={d.cy}
          y2={d.cy}
          stroke="red"
        />
      </g>);
  }
}
