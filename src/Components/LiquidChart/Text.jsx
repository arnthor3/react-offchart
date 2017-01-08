import React, { PropTypes } from 'react';
import * as ch from '../../Constants/liquid';
import { LiquidTextProps } from '../../Props/liquidProps';

const LiquidText = (props) => (
  <g>
    <text {...props.style} textAnchor="middle">
      <tspan
        className={ch.TEXT_VALUE}
        fontSize={props.valueFontSize * props.radius}
      />
      <tspan
        className={ch.TEXT_DECIMAL}
        fontSize={props.decimalFontSize * props.radius}
      />
      <tspan
        className={ch.TEXT_POSTFIX}
        fontSize={props.postfixFontSize * props.radius}
      >{props.postfix}</tspan>
    </text>
    <text
      {...props.style}
      className={ch.TEXT_LEGEND}
      dy={props.radius * 0.15}
      fontSize={props.radius * 0.1}
      textAnchor="middle"
    >{props.legend}</text>
  </g>
);

export default LiquidText;
