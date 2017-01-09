import { PropTypes } from 'react';

export const dataShape = PropTypes.arrayOf(
  PropTypes.shape({
    value: PropTypes.number,
    label: PropTypes.string,
    fill: PropTypes.string,
    stroke: PropTypes.string,
  }),
);

export const fillAndStroke = PropTypes.shape({
  fill: PropTypes.string,
  stroke: PropTypes.string,
});

export const TextProps = {
  size: PropTypes.number,
  fill: PropTypes.string,
  stroke: PropTypes.string,
  filter: PropTypes.string,
};

export const shapeProps = {
  fill: PropTypes.string,
  stroke: PropTypes.string,
  filter: PropTypes.string,
  strokeWidth: PropTypes.string,
};

