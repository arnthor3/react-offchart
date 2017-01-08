import React, { PropTypes } from 'react';
import * as ch from '../../Constants/liquid';
import { LiquidTextProps } from '../../Props/liquidProps';

const LiquidText = (props) => (
  <g>
    <text
      {...props.style}
      dy={(props.valueFontSize * props.radius) / 4}
      textAnchor="middle"
      dx={(props.valueFontSize * props.radius) / 4}
    >
      <tspan
        className={ch.TEXT_VALUE}
        fontSize={props.valueFontSize * props.radius}
      />
      <tspan
        className={ch.TEXT_DECIMAL}
        fontSize={props.decimalFontSize * props.radius}
      />
      <tspan
        className={ch.TEXT_PERCENTAGE}
        fontSize={props.postfixFontSize * props.radius}
      />
    </text>
    <text
      {...props.style}
      className={ch.TEXT_LEGEND}
      dy={(props.valueFontSize * props.radius) / 2}
      fontSize={props.radius * 0.1}
      textAnchor="middle"
    >{props.legend}</text>
  </g>
);

export default LiquidText;
