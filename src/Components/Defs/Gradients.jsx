import React, { PropTypes } from 'react';
import { radialGradientProps, linearGradientProps } from '../../Props/gradientProps';

export const LinearGradient = ({ x1, x2, y1, y2, children }) => (
  <defs>
    <linearGradient>
      {children}
    </linearGradient>
  </defs>
);

LinearGradient.propTypes = linearGradientProps;

export const RadialGradient = ({ cx, cy, r, fx, fy, children }) => (
  <defs>
    <radialGradient>
      {children}
    </radialGradient>
  </defs>
);

RadialGradient.propTypes = RadialGradient;

export default (props) => {
  if (props.type === 1) {
    return LinearGradient(props);
  }
  return RadialGradient(props);
};
