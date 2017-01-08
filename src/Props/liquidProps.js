import { PropTypes } from 'react';
import { TextProps } from './offchartProps';

export const LiquidTextProps = {
  valueText: PropTypes.shape(TextProps),
  percentageText: PropTypes.shape(TextProps),
  decimalText: PropTypes.shape(TextProps),
  legendText: PropTypes.shape(TextProps),
};

export const ShapeProps = {

};

export const LiquidProps = {
  value: PropTypes.number,
  // This width and height are either constants from when the chart was
  // created or calculated on rendering time  by the chart component
  width: PropTypes.number,
  height: PropTypes.number,
  // The type number controls what shape is rendered in the component
  // 1. is the pie shape
  // 2. is a square
  // 3. is a triangle
  type: PropTypes.number,
  // a d3 easeing variable name
  animateWavesEase: PropTypes.string,
  // the speed of the wave animations per length
  // of the wave
  animateWavesTime: PropTypes.number,
  // the wave rise animation time
  animationTime: PropTypes.number,
  // the name of the d3 animation ease
  animationEase: PropTypes.string,
  // if true then animate do enter animation
  enterAnimation: PropTypes.bool,
  // where the outer shape starts, 1 is 100% 0.5 is 50% of the minimum of widht and height
  outerBoundaries: PropTypes.number,
  // where the outer shape ends, 1 is 100% 0.5 is 50% of the minimum of widht and height
  innerBoundaries: PropTypes.number,
  // margin between innerBoundaries and where the liquid start
  liquidMargin: PropTypes.number,
  // the wave amplitude, height, The A in A * sine(theta)
  amplitude: PropTypes.number,
  // the inverse frequency, the higher the number is the smoother the waves
  frequency: PropTypes.number,
  // if true then reduce wave height according to area position, not same for all shape types
  waveScaleLimit: PropTypes.bool,
  outerStyle: PropTypes.shape({
    fill: PropTypes.string,
    stroke: PropTypes.string,
    filter: PropTypes.string,
  }),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
