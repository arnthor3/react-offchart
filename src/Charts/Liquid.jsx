import React, { PropTypes } from 'react';
import Chart from '../Components/Common/Chart';
import ReactIf from '../Components/Common/ReactIf';
import Gradient from '../Components/Defs/Gradients';
import { Clip, Liquid, LiquidText, Shape } from '../Components/LiquidChart/';
import unique from '../Helpers/uniqueId';

const LiquidChart = (props) => (
  <Chart
    width={props.width}
    height={props.height}
    responsive={props.responsive}
    value={props.value}
    clipId={unique()}
  >
    <Liquid
      outerBound={0.95}
      innerBound={0.85}
      amplitude={props.amplitude}
      frequency={props.frequency}
      waveScaleLimit={props.waveScaleLimit}
    >
      <Shape
        type={props.type}
        outerStyle={props.outerStyle}
        liquidStyle={props.liquidStyle}
        wetStyle={props.wetStyle}
        dryStyle={props.dryStyle}
      >
        <LiquidText
          deliminator="."
          poestfix="%"
          valueFontSize={0.65}
          decimalFontSize={0.45}
          postfixFontSize={0.25}
          legend={props.legend}
        />
      </Shape>
      <ReactIf condition={props.gradientType} el={<g />}>
        <Gradient
          type={props.gradientType}
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
      <Clip />
    </Liquid>
  </Chart>
);

export default LiquidChart;

