import { arc } from 'd3-shape';
import { scaleLinear } from 'd3-scale';
import { interpolate } from 'd3-interpolate';
import { START_ANGLE, END_ANGLE } from '../../Constants/versusArc';

export const getDimensions = (props) => {
  const cx = props.width / 2;
  const cy = props.height / 2;
  const r = Math.min(cx, cy);
  const y = props.height;
  console.log(r, props);

  const backgroundArc = (
    arc()
      .innerRadius(props.innerRadius * r)
      .outerRadius(props.outerRadius * r)
      .startAngle(START_ANGLE)
      .endAngle(END_ANGLE)
  );

  return { cx, cy, r, y, backgroundArc };
};

export const getScales = (props) => {
  const { r } = getDimensions(props);
  const left = props.values[0];
  const right = props.values[1];

  const leftScale = (
    scaleLinear()
      .range([-Math.PI / 2, Math.PI / 2])
      .domain([0, left.value + right.value])
  );

  const rightScale = (
    scaleLinear()
      .range([Math.PI / 2, -Math.PI / 2])
      .domain([0, left.value + right.value])
  );

  const leftArc = (
    arc()
      .innerRadius(props.innerRadius * r)
      .outerRadius(props.outerRadius * r)
      .startAngle(-Math.PI / 2)
  );

  const rightArc = (
    arc()
      .innerRadius(props.innerRadius * r)
      .outerRadius(props.outerRadius * r)
      .startAngle(Math.PI / 2)
    );

  const leftDim = {
    scale: leftScale,
    arc: leftArc,
  };

  const rightDim = {
    scale: rightScale,
    arc: rightArc,
  };
  console.log(rightDim);
  return { leftDim, rightDim };
};


export const leftDimensions = () => {

};

export const rightDimensions = () => {

};
