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
    animationTime: 2000,
    animationEase: 'easeCubicInOut',
  }
  constructor(props) {
    super();
    if (props.innerBoundaries > props.outerBoundaries) {
      throw new Error(ch.INNER_BIGGER_THAN_OUTER);
    } else if (props.outerBoundaries > 1) {
      throw new Error(ch.OUTER_BIGGER_THAN_ONE);
    }
  }

  componentWillMount() {
    this.renderChart();
  }

  componentDidUpdate(prevProps, prevState) {
    this.renderChart();
  }

  animate() {
    const el = select(this.container);
  }

  draw() {

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
    const { cx, cy, radius } = dh.getDimensions(this.props);
    return (
      <g ref={(c) => { this.contianer = c; }}>
        {cloneChildren(this.props)}
      </g>);
  }
}
