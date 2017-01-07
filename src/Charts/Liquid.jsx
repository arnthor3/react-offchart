import React, { PropTypes } from 'react';
import Chart from '../Components/Common/Chart';
import ReactIf from '../Components/Common/ReactIf';
import Gradient from '../Components/Defs/Gradients';
import { Clip, Liquid, LiquidText, Shape } from '../Components/LiquidChart/';

const LiquidChart = (props) => (
  <Chart
    width={props.width}
    height={props.height}
    responsive={props.responsive}
  >
    <Liquid >
      <Shape />
      <LiquidText />
      <ReactIf condition={props.gradientType} el={<g></g>}>
        <Gradient
          x={props.gradientX}
          y={props.gradientY}
          cx={props.gradientCx}
          cy={props.gradientCy}
          r={props.gradientR}
          width={props.gradientWidth}
          height={props.gradientHeight}
        />
      </ReactIf>
      <Clip />
    </Liquid>
  </Chart>
);

export default LiquidChart;

