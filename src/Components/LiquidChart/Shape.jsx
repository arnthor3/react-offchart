import React, { PropTypes } from 'react';
import * as ch from '../../Constants/liquid';
import clone from '../../Helpers/cloneChildren';
import { getOuterShape, getInnerShape } from '../../Helpers/Liquid/dimensions';

const Shape = (props) => {
  return (
    <g className={ch.MAIN}>
      <g className={ch.OUTER}>
        <path
          d={getOuterShape(props)()}
          {...props.outerStyle}
        />
        {clone(props, { style: props.dryStyle })}
      </g>
      <g className={ch.INNER} clipPath={`url(#${props.clipId})`}>
        <path d={getInnerShape(props)()} />
        {clone(props, {  style: props.wetStyle })}
      </g>
    </g>
  );
};

export default Shape;
