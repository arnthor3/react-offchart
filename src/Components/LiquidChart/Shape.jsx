import React, { PropTypes } from 'react';
import * as ch from '../../Constants/liquid';

const Shape = ({ shapeType }) => {
  return (
    <g className={ch.MAIN}>
      <g className={ch.OUTER}>
        <path />
      </g>
      <g className={ch.INNER} clipPath>
        <circle />
      </g>
    </g>
  );
};

export default Shape;
