import type { BreakPoints, BreakPointSizes } from '../theme.types';

export const breakPointSizes: BreakPointSizes = {
  xs: 552,
  sm: 728,
  md: 904,
  lg: 1080,
  xl: 1240,
  xxl: 7000,
};

export const breakPoints: BreakPoints = {
  xs: `all and (max-width: ${breakPointSizes.xs - 1}px)`,
  sm: `all and (min-width: ${breakPointSizes.xs}px) and (max-width: ${breakPointSizes.sm - 1}px)`,
  md: `all and (min-width: ${breakPointSizes.sm}px) and (max-width: ${breakPointSizes.md - 1}px)`,
  lg: `all and (min-width: ${breakPointSizes.md}px) and (max-width: ${breakPointSizes.lg - 1}px)`,
  xl: `all and (min-width: ${breakPointSizes.lg}px) and (max-width: ${breakPointSizes.xl - 1}px)`,

  // rare?
  xxl: `all and (min-width: ${breakPointSizes.xl}px) and (max-width: ${breakPointSizes.xxl}px)`,

  xsAndSmaller: `all and (max-width: ${breakPointSizes.xs - 1}px)`,
  smAndSmaller: `all and (max-width: ${breakPointSizes.sm - 1}px)`,
  mdAndSmaller: `all and (max-width: ${breakPointSizes.md - 1}px)`,
  lgAndSmaller: `all and (max-width: ${breakPointSizes.lg - 1}px)`,
  xlAndSmaller: `all and (max-width: ${breakPointSizes.xl - 1}px)`,

  lgAndLarger: `(min-width: ${breakPointSizes.lg}px )`,
  xsAndLarger: `(min-width: ${breakPointSizes.xs}px )`,
  mdAndLarger: `(min-width: ${breakPointSizes.md}px )`,
  smAndLarger: `(min-width: ${breakPointSizes.sm}px )`,
  xlAndExtraExtraLarger: `all and (min-width: ${breakPointSizes.xxl}px)`,
};
/**
 * all and (max-width: 551.98px)
 * all and (min-width: 552px) and (max-width: 727.98px)
 * all and (min-width: 728px) and (max-width: 903.98px)
 * all and (min-width: 904px) and (max-width: 1079.98px)
 *
 * all and (max-width: 727.98px)
 * all and (max-width: 1079.98px)
 * all and (max-width: 1239.98px)
 * all and (min-width: 1080px)
 * all and (max-width: 903.98px)
 * all and (min-width: 7000px)
 * (orientation: landscape) and (max-width: 903.98px)
 */
