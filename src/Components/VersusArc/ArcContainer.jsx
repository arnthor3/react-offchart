import React, { PropTypes, Component } from 'react';
import { select, selectAll } from 'd3-selection';
import { timer } from 'd3-timer';
import { scaleLinear } from 'd3-scale';
import { ease } from 'd3-ease';
import * as dh from '../../Helpers/VersusArcs/dimensions';
import cloneChildren from '../../Helpers/cloneChildren';
import * as ch from '../../Constants/versusArc';

export default class ArcContainer extends Component {
  static propTypes = {
    animationTime: PropTypes.number,
    animationEase: PropTypes.string,
  }

  componentDidMount() {
    this.renderChart();
  }

  componentDidUpdate(prevProps, prevState) {
    this.renderChart();
  }

  getEasing() {
    const animationEase = ease[this.props.animationEase];
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

  animate() {
    const el = select(this.container);
    const left = el.select(ch.LEFT_ARC);
    const right = el.select(ch.RIGHT_ARC);
    const cLine = el.select(ch.CENTER_LINE);
    const { leftDim, rightDim } = dh.getScales(this.props);
    const animationEase = this.getEasing();
    const time = scaleLinear().range([0, 1]).domain([0, this.getAnimationTime()]);
    const animationTimer = timer((t) => {
      const thisTime = animationEase(time(t));
      if (thisTime >= 1) {
        console.log(stop);
        animationTimer.stop();
      }
    });
  }

  draw() {
    const el = select(this.container);
    const left = el.select(`path.${ch.LEFT_ARC}`);
    const right = el.select(`path.${ch.RIGHT_ARC}`);
    const cLine = el.select(`path.${ch.CENTER_LINE}`);
    console.log(left.empty());
    const { leftDim, rightDim } = dh.getScales(this.props);
    const l = leftDim.arc.endAngle(leftDim.scale(this.props.values[0].value));
    const r = rightDim.arc.endAngle(rightDim.scale(this.props.values[1].value));
    left.attr('d', l);
    right.attr('d', r);
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
    const clonedChildren = cloneChildren(this.props, d);
    return (
      <g
        ref={(c) => { this.container = c; }}
        transform={`translate(${d.cx},${d.y})`}
      >
        {clonedChildren}
      </g>
    );
  }
}
