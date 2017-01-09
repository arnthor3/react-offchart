import React, { PropTypes } from 'react';
import Chart from '../Components/Common/Chart';
import ReactIf from '../Components/Common/ReactIf';
import ArcContianer from '../Components/VersusArc/ArcContainer';
import VersusArc from '../Components/VersusArc/VersusArc';
import CenterLine from '../Components/VersusArc/CenterLine';
import Legend from '../Components/VersusArc/Legend';
import MouseContainer from '../Components/VersusArc/MouseContainer';
import Gradient from '../Components/Defs/Gradients';
import Shadow from '../Components/Defs/Shadows';

const VersusArcChart = props => (
  <Chart
    responsive={props.responsive}
    width={props.width}
    height={props.height}
    values={props.values}
  >
    <ArcContianer
      animationTime={props.animationTime}
      animationEase={props.animationEase}
      hoverAnimationEase={props.hoverAnimationEase}
      hoverAnimationTime={props.hoverAnimationTime}
      innerRadius={0.9}
      outerRadius={1.5}
    >
      <VersusArc />
      <CenterLine />
      <ReactIf>
        <Legend />
      </ReactIf>
    </ArcContianer>
    <ReactIf
      condition={props.showToolTip}
      el={<g />}
      copy
    >
      <MouseContainer />
    </ReactIf>
    <ReactIf
      condition={props.gradientType}
      el={<g />}
      copy
    >
      <Gradient
        type={props.gradientType}
        stops={props.stops}
        x={props.gradientX}
        y={props.gradientY}
        x1={props.gradientX1}
        y1={props.gradientY1}
        x2={props.gradientX2}
        y2={props.gradientY2}
        cx={props.gradientCx}
        cy={props.gradientCy}
        r={props.gradientR}
        width={props.gradientWidth}
        height={props.gradientHeight}
      />
    </ReactIf>
  </Chart>
);

export const dataShape = PropTypes.shape({
  value: PropTypes.number,
  label: PropTypes.string,
  fill: PropTypes.string,
  stroke: PropTypes.string,
});

VersusArcChart.propTypes = {
  responsive: PropTypes.bool,
  width: PropTypes.number,
  height: PropTypes.number,
  values: dataShape,
  animationTime: PropTypes.number,
  animationEase: PropTypes.string,
  hoverAnimationEase: PropTypes.string,
  hoverAnimationTime: PropTypes.string,
  showToolTip: PropTypes.bool,
  gradientType: PropTypes.number,
  stops: PropTypes.arrayOf(PropTypes.node),
  gradientX: PropTypes.number,
  gradientY: PropTypes.number,
  gradientX1: PropTypes.number,
  gradientX2: PropTypes.number,
  gradientY1: PropTypes.number,
  gradientY2: PropTypes.number,
  gradientR: PropTypes.number,
  gradientCx: PropTypes.number,
  gradientCy: PropTypes.number,
  gradientHeight: PropTypes.number,
  gradientWidth: PropTypes.number,

};

export default VersusArcChart;
