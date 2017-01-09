import React, { PropTypes } from 'react';
import * as ch from '../../Helpers/VersusArc/constants';

const VersusArc = () => {
  const c = 34;
  return (
    <g transform={`translate(${props.cx},${props.cy})`} >
      <path
        d={props.chartBackground()}
        fill={props.background.fill}
        stroke={props.background.stroke}
        className={ch.BACKGROUND_ARC}
      />
      <path
        fill={props.left.fill}
        stroke={props.left.stroke}
        className={ch.LEFT_ARC}
      />
      <path
        fill={props.right.fill}
        stroke={props.right.stroke}
        className={ch.RIGHT_ARC}
      />
    </g>
  );
}