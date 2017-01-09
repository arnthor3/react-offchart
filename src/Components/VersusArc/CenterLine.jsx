import React from 'react';
import ch from '../../Helpers/VersusArc/constants';

export default props => (
  <g>
    <path
      strokeWidth={props.strokeWidth}
      strokeDasharray={props.strokeDasharray}
      stroke={props.stroke}
      fill={props.fill}
      className={ch.CENTER_LINE}
    />
  </g>
);

