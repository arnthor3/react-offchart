import React, { Component, PropTypes } from 'react';
import { select, selectAll } from 'd3-selection';
import { scaleLinear } from 'd3-scale';
import { timer } from 'd3-timer';
import * as ease from 'd3-ease';
import 'd3-transition';
import { interpolate } from 'd3-interpolate';
import * as ch from '../../Constants/liquid';
import cloneChildren from '../../Helpers/cloneChildren';
import { LiquidProps } from '../../Props/liquidProps';

import * as dh from '../../Helpers/Liquid/dimensions';

export default class Liquid extends Component {
  static propTypes = LiquidProps;
  static defaultProps = {
    animationTime: 2000,
    animationEase: 'easeCubicInOut',
    amplitude: 1,
    liquidMargin: 0.005,
    waveScaleLimit: true,
    frequency: 4,
    animationWavesTime: 2000,
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

    return ease.easeCubicInOut;
  }

  getAnimationTime() {
    const animationTime = this.props.animationTime;

    if (animationTime === undefined) {
      return 2000;
    }

    return animationTime;
  }

  setText() {

  }
  animateWaves() {
    console.log('herellll');
    const arr = new Array(ch.SAMPLING);

    const container = select(this.container);

    const el = container.select('clipPath').select('path');

    const { waveArea, x, y, w, h } = dh.getWaveArea(this.props);
    const area1 = are
    const animatie = () => {
      el
      .transition()
      .ease(ease.easeSin)
      .duration(2500)
      .attr('d', w2(arr))
      .transition()
      .ease(ease.easeSin)
      .duration(2500)
      .attr('d', w1(arr))
      .on('end', () => {
        console.log('werwer');
        animatie();
      });
    };
    animatie();
  }
  animate() {
    const arr = new Array(ch.SAMPLING);

    const container = select(this.container);

    const el = container.select('clipPath').select('path');

    const animationEase = this.getEasing();

    const animationTime = this.getAnimationTime();

    const waveScale = dh.getWaveScaleLimit(this.props);

    const { waveArea, x, y, w, h } = dh.getWaveArea(this.props);

    const time = scaleLinear().range([0, 1]).domain([0, this.props.animationTime]);

    const interpolateValue = interpolate(el.node().old || 0, this.props.value);
    const sine = (a, i, f) => a * Math.sin(((Math.PI * 2) / ch.SAMPLING) * i * 4);
    const animationTimer = timer((t) => {
      const animate = animationEase(time(t));
      const value = interpolateValue(animate);
      const ws = waveScale(value);
      waveArea.y0((d, i) => y(sine(ws, i, this.props.frequency) + value));
      el.attr('d', waveArea(arr));
      el.node().old = value;
      if (t >= this.props.animationTime) {
        animationTimer.stop();
        el.node().old = value;
        if (this.props.animationWavesTime) {
          this.animateWaves();
        }
      }
    });
  }

  draw() {
    const arr = new Array(ch.SAMPLING);
    const container = select(this.container);
    const el = container.select('clipPath').select('path');
    const textValue = container.selectAll(`.${ch.TEXT_VALUE}`);
    const decimalValue = container.selectAll(`.${ch.TEXT_DECIMAL}`);
    decimalValue.text('.3');
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
