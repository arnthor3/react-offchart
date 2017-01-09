import React, { PropTypes } from 'react';
import * as ch from '../../Constants/versusArc';

const VersusArc = (props) => {
  const c = 34;
  return (
    <g>
      <path
        d={props.backgroundArc()}
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
};

const fillAndStroke = PropTypes.shape({
  fill: PropTypes.string,
  stroke: PropTypes.string,
});

VersusArc.propTypes = {
  backgroundArc: PropTypes.func,
  background: fillAndStroke,
  left: fillAndStroke,
  right: fillAndStroke,
};

export default VersusArc;
