import { PropTypes } from 'react';

const oneOf = PropTypes.oneOfType([PropTypes.number, PropTypes.string]);

export const radialGradientProps = {
  x: oneOf,
  y: oneOf,
  cx: oneOf,
  r: oneOf,
  width: oneOf,
  height: oneOf,
  children: PropTypes.arrayOf(PropTypes.node),
};

export const linearGradiantProps = {
  x1: oneOf,
  y1: oneOf,
  x2: oneOf,
  y2: oneOf,
  width: oneOf,
  height: oneOf,
  children: PropTypes.arrayOf(PropTypes.node),
};


export const GradientProps = Object.assign(radialGradientProps, linearGradiantProps);

