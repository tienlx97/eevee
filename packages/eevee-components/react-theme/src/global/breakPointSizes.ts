import type { BreakPointSizes } from '../types';

export const breakPointSizes: BreakPointSizes = {
  xs: 552,
  sm: 728,
  md: 904,
  lg: 1080,
  xl: 1240,
  xxl: 7000,
};
/**
 * all and (min-width: 1080px)
 * all and (max-width: 1079.98px)
 * all and (max-width: 903.98px)
 * all and (max-width: 727.98px)
 * all and (max-width: 551.98px)
 * all and (min-width: 904px) and (max-width: 1079.98px)
 * all and (min-width: 728px) and (max-width: 903.98px)
 * all and (min-width: 552px) and (max-width: 727.98px)
 * all and (min-width: 7000px)
 * all and (max-width: 1239.98px)
 * (orientation: landscape) and (max-width: 903.98px)
 */
