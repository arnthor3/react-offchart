import React, { PropTypes } from 'react';
import * as ch from '../../Constants/liquid';

const LiquidText = (props) => (
  <g className={ch.TEXT}>
    <g className="dryText">
      <text>
        <tspan
          className={ch.TEXT_VALUE}
          fontSize={props.valueFontSize}
          fill={props.valueFill}
          filter={props.valueFilter}
        />
        <tspan
          className={ch.TEXT_DECIMAL}
          fontSize={props.decimalFontSize}
          fill={props.decimalFill}
          filter={props.decimalFilter}
        />
        <tspan
          className={ch.TEXT_PERCENTAGE}
          fontSize={props.percentFontSize}
          fill={props.percentFill}
          filter={props.percentFilter}
        />
      </text>
    </g>
    <g className="wetText" clipPath={ch.CLIP}>
      <text>
        <tspan
          className={ch.TEXT_VALUE}
          fontSize={props.valueFontSize}
          fill={props.valueFill}
          filter={props.valueFilter}
        />
        <tspan
          className={ch.TEXT_DECIMAL}
          fontSize={props.decimalFontSize}
          fill={props.decimalFill}
          filter={props.decimalFilter}
        />
        <tspan
          className={ch.TEXT_PERCENTAGE}
          fontSize={props.percentFontSize}
          fill={props.percentFill}
          filter={props.percentFilter}
        />
      </text>
    </g>
  </g>
);

export default LiquidText;
