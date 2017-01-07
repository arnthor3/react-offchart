import { CLASS_PREFIX } from './offcharts';

/*
  ClassNames for liquid
*/
export const MAIN_NAME = `${CLASS_PREFIX}liquid`;
export const LIQUID_PREFIX = `${MAIN_NAME}-`;
export const CLIP = `${LIQUID_PREFIX}clip`;
export const MAIN = `${LIQUID_PREFIX}-main`;
export const OUTER = `${LIQUID_PREFIX}-outer`;
export const INNER = `${LIQUID_PREFIX}-inner`;
export const TEXT = `${LIQUID_PREFIX}text`;
export const TEXT_VALUE = `${LIQUID_PREFIX}text-value`;
export const TEXT_PERCENTAGE = `${LIQUID_PREFIX}text-percentage`;
export const TEXT_DECIMAL = `${LIQUID_PREFIX}text-decimal`;

/*
  Error messages
*/
export const INNER_BIGGER_THAN_OUTER = 'The Innerboundaries props is bigger than outerboundaries';
export const OUTER_BIGGER_THAN_ONE = 'The Outerboundaries props is bigger than 1';
