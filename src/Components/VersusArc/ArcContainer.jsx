import React, { PropTypes, Component } from 'react';
import { select, selectAll } from 'd3-selection';
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

  animate() {
    const el = select(this.container);
    const left = el.select(ch.LEFT_ARC);
    const right = el.select(ch.RIGHT_ARC);
    const cLine = el.select(ch.CENTER_LINE);
  }

  draw() {
    const el = select(this.container);
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
