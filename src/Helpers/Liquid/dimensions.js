import { arc, area } from 'd3-shape';
import { scaleLinear } from 'd3-scale';
import { SAMPLING } from '../../Constants/liquid';

export const getDimensions = ({ width, height, chartMargin = 0 }) => {
  const cx = (width - (chartMargin / 2)) / 2;
  const cy = (height - (chartMargin / 2)) / 2;
  const radius = Math.min(cx, cy);
  return { cx, cy, radius };
};

export const getOuterShape = ({ outerBound, innerBound, radius }) => (
  arc()
    .innerRadius(innerBound * radius)
    .outerRadius(outerBound * radius)
    .startAngle(0)
    .endAngle(Math.PI * 2)
);

export const getInnerShape = ({ innerBound, radius, liquidMargin = 0.0025 }) => (
  arc()
    .innerRadius(0)
    .outerRadius((innerBound - liquidMargin) * radius)
    .startAngle(0)
    .endAngle(Math.PI * 2)
);

export const getWave = ({ width, height, innerBound, liquidMargin = 0.0025, value }) => {
  const h = ((height * (innerBound - liquidMargin)) / 2);
  const w = ((width * (innerBound - liquidMargin)) / 2);
  const x = scaleLinear().range([-w, w]).domain([0, SAMPLING]);
  const y = scaleLinear().range([h, -h]).domain([0, 100]);
  const sine = (a, i, f) => a * (Math.sin((((Math.PI * 2) / SAMPLING) * i * f) + Math.PI));
  return (
    area()
      .x((d, i) => x(i))
      .y0((d, i) => y(sine(4, i, 4) + value))
      .y1(d => height / 2)
  );
};

export const getWaveScaleLimit = ({ waveScaleLimit, amplitude }) => {
  if (waveScaleLimit) {
    return (
      scaleLinear()
        .range([0, amplitude, 0])
        .domain([0, 50, 100])
    );
  }
  return (
    scaleLinear()
      .range([this.props.amplitude])
      .domain([0, 100])
  );
};


