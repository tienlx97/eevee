export { useIsomorphicLayoutEffect, useEventCallback } from './hooks/index';

export { canUseDOM, defaultSSRContextValue, useIsSSR, useSSRContext, SSRContext, SSRProvider } from './ssr/index';
export type { SSRContextValue } from './ssr/index';

export { resolveShorthand, getSlots } from './compose/index';
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
  //
  EeveeProps,
  EeveeSlot,
  EeveeState,
} from './compose/index';

export { omit } from './utils';
