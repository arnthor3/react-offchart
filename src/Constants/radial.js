import { CLASS_PREFIX } from './offcharts';

export const NO_DATA = `React-RadialChart needs the values prop to be set to render,
please set the property and try again,
if you dont know how to set the property please check out https://github.com/arnthor3/react-solidgauge`;

export const UNEXPECTED_ERROR = `An Unexpected error occured please file open an
issue on github containing description of the error`;

export const MAIN = `${CLASS_PREFIX}-radialchart`;
export const GROUP_ARC = `${MAIN}-arc`;
export const GROUP_ARC_CLASS = `g.${GROUP_ARC}`;
export const BACKGROUND_PATH = `${MAIN}-background`;
export const VALUE_PATH = `${GROUP_ARC}-value`;
export const MOUSE_PATH = `${MAIN}-mouse`;
export const TEXT_LABEL = `${MAIN}-label`;
export const animationTime = 1500;
export const animationEase = 'easeBounce';
