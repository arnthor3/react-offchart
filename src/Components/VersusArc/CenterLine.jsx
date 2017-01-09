import React, { PropTypes } from 'react';
import * as ch from '../../Constants/versusArc';

const centerLine = props => (
  <g>
    <path
      strokeWidth={props.strokeWidth}
      strokeDasharray={props.strokeDasharray}
      stroke={props.stroke}
      className={ch.CENTER_LINE}
    />
  </g>
);

centerLine.propTypes = {
  strokeWidth: PropTypes.number,
  strokeDasharray: PropTypes.number,
  stroke: PropTypes.string,
};

export default centerLine;

