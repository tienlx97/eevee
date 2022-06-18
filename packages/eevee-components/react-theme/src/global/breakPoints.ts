import type { BreakPoints } from '../types';
import { breakPointSizes as BREAKPOINT_SIZES } from './breakPointSizes';

export const breakPoints: BreakPoints = {
  xs: `all and (max-width: ${BREAKPOINT_SIZES.xs - 1}px)`,
  sm: `all and (min-width: ${BREAKPOINT_SIZES.xs}px) and (max-width: ${BREAKPOINT_SIZES.sm - 1}px)`,
  md: `all and (min-width: ${BREAKPOINT_SIZES.sm}px) and (max-width: ${BREAKPOINT_SIZES.md - 1}px)`,
  lg: `all and (min-width: ${BREAKPOINT_SIZES.md}px) and (max-width: ${BREAKPOINT_SIZES.lg - 1}px)`,
  xl: `all and (min-width: ${BREAKPOINT_SIZES.lg}px) and (max-width: ${BREAKPOINT_SIZES.xl - 1}px)`,

  // rare?
  xxl: `all and (min-width: ${BREAKPOINT_SIZES.xl}px) and (max-width: ${BREAKPOINT_SIZES.xxl}px)`,

  xsAndSmaller: `all and (max-width: ${BREAKPOINT_SIZES.xs - 1}px)`,
  smAndSmaller: `all and (max-width: ${BREAKPOINT_SIZES.sm - 1}px)`,
  mdAndSmaller: `all and (max-width: ${BREAKPOINT_SIZES.md - 1}px)`,
  lgAndSmaller: `all and (max-width: ${BREAKPOINT_SIZES.lg - 1}px)`,
  xlAndSmaller: `all and (max-width: ${BREAKPOINT_SIZES.xl - 1}px)`,

  lgAndLarger: `(min-width: ${BREAKPOINT_SIZES.lg}px )`,
  xsAndLarger: `(min-width: ${BREAKPOINT_SIZES.xs}px )`,
  mdAndLarger: `(min-width: ${BREAKPOINT_SIZES.md}px )`,
  smAndLarger: `(min-width: ${BREAKPOINT_SIZES.sm}px )`,
  xlAndExtraExtraLarger: `all and (min-width: ${BREAKPOINT_SIZES.xxl}px)`,
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
