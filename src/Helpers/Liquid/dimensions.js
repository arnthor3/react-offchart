export const getDimensions = ({ width, height, chartMargin }) => {
  const cx = (width - (chartMargin / 2)) / 2;
  const cy = (height - (chartMargin / 2)) / 2;
  const radius = Math.min(cx, cy);
  return { cx, cy, radius };
};

export const getOuterArc = ({ outerBoundaries, innerBoundaries, radius }) => {

};
