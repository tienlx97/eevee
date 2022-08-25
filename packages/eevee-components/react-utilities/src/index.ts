export {
  useIsomorphicLayoutEffect,
  useEventCallback,
  useId,
  usePrevious,
  usePrefersReducedMotion,
  useBoop,
  useControllableState,
  useMergedRefs,
  useOnClickOutside,
  useOnScrollOutside,
} from './hooks/index';

export { canUseDOM, defaultSSRContextValue, useIsSSR, useSSRContext, SSRProvider } from './ssr/index';
export type { SSRContextValue } from './ssr/index';

export {
  resolveShorthand,
  getSlots,
  resetCommonWrapperStyles,
  resetCommonTextStyles,
  resetTextFontStyles,
  resetCommonTextOverflowStyles,
} from './compose/index';
export type {
  AsIntrinsicElement,
  ComponentProps,
  ComponentState,
  ExtractSlotProps,
  ForwardRefComponent,
  IsSingleton,
  PropsWithoutRef,
  ReplaceNullWithUndefined,
  ResolveShorthandFunction,
  ResolveShorthandOptions,
  Slot,
  Slots,
  SlotClassNames,
  SlotPropsRecord,
  SlotRenderFunction,
  SlotShorthandValue,
  UnionToIntersection,
  UnknownSlotProps,
} from './compose/index';

export { applyTriggerPropsToChildren, getTriggerChild } from './trigger/index';

export type { EeveeTriggerComponent } from './trigger/index';
export type { RefObjectFunction, UseControllableStateOptions, UseOnClickOrScrollOutsideOptions } from './hooks/index';
export {
  getNativeElementProps,
  getPartitionedNativeProps,
  omit,
  slugify,
  genTimeStampHash,
  mergeCallbacks,
  shouldPreventDefaultOnKeyDown,
} from './utils/index';
