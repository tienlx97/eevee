import type { BreakPoints } from '../types';
import { breakPointSizes as BREAKPOINT_SIZES } from './breakPointSizes';

export const breakPoints: BreakPoints = {
  xs: `@media all and (max-width: ${BREAKPOINT_SIZES.xs - 1}px)`,
  sm: `@media all and (min-width: ${BREAKPOINT_SIZES.xs}px) and (max-width: ${BREAKPOINT_SIZES.sm - 1}px)`,
  md: `@media all and (min-width: ${BREAKPOINT_SIZES.sm}px) and (max-width: ${BREAKPOINT_SIZES.md - 1}px)`,
  lg: `@media all and (min-width: ${BREAKPOINT_SIZES.md}px) and (max-width: ${BREAKPOINT_SIZES.lg - 1}px)`,
  xl: `@media all and (min-width: ${BREAKPOINT_SIZES.lg}px) and (max-width: ${BREAKPOINT_SIZES.xl - 1}px)`,

  // rare?
  xxl: `@media all and (min-width: ${BREAKPOINT_SIZES.xl}px) and (max-width: ${BREAKPOINT_SIZES.xxl}px)`,

  xsAndSmaller: `@media all and (max-width: ${BREAKPOINT_SIZES.xs - 1}px)`,
  smAndSmaller: `@media all and (max-width: ${BREAKPOINT_SIZES.sm - 1}px)`,
  mdAndSmaller: `@media all and (max-width: ${BREAKPOINT_SIZES.md - 1}px)`,
  lgAndSmaller: `@media all and (max-width: ${BREAKPOINT_SIZES.lg - 1}px)`,
  xlAndSmaller: `@media all and (max-width: ${BREAKPOINT_SIZES.xl - 1}px)`,

  lgAndLarger: `@media (min-width: ${BREAKPOINT_SIZES.lg}px )`,
  xlAndExtraExtraLarger: `@media all and (min-width: ${BREAKPOINT_SIZES.xxl}px)`,
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
