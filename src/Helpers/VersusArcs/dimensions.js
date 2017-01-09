import { arc } from 'd3-shape';
import { START_ANGLE, END_ANGLE } from '../../Constants/versusArc';

export const getDimensions = (props) => {
  const cx = props.width / 2;
  const cy = props.height / 2;
  const r = Math.min(cx, cy);
  const y = r - props.height;

  const backgroundArc = (
    arc()
      .innerRadius(props.innerRadius * r)
      .outerRadius(props.outerRadius * r)
      .startAngle(props.startAngle)
      .endAngle(props.endAngle)
  );

  return { cx, cy, r, y, backgroundArc };
};

export const leftDimensions = () => {

};

export const rightDimensions = () => {

};
