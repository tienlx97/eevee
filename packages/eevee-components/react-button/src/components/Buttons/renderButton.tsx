import * as React from 'react';
import type { ButtonState, CompState, SlotPropsRecord, SlotRenderFunction } from './Button.types';

/**
 * Renders a Button component by passing the state defined props to the appropriate slots.
 */
export const renderButton_unstable = (state: ButtonState) => {
  // const { iconOnly, iconPosition, icon, root: Root } = state;

  getSlots(state);
  return (
    // <Root>
    //   {iconPosition !== 'after' && icon && <Icon />}
    //   {!iconOnly && root.children}
    //   {iconPosition === 'after' && icon && <Icon />}
    // </Root>
    <></>
  );
};

function getSlot<R extends SlotPropsRecord, K extends keyof R>(
  state: CompState<R>,
  slotName: K,
): readonly [React.ElementType<R[K]> | null, R[K]] {
  if (state[slotName] === undefined) {
    return [null, undefined as R[K]];
  }

  const { children, ...rest } = state[slotName]!;

  const slot = (
    state.components?.[slotName] === undefined || typeof state.components[slotName] === 'string'
      ? state.components?.[slotName] || 'div'
      : state.components[slotName]
  ) as React.ElementType<R[K]>;

  if (typeof children === 'function') {
    const render = children as SlotRenderFunction<R[K]>;
    return [
      React.Fragment as any,
      {
        children: render(slot, rest as Omit<R[K], 'children' | 'as'>),
      } as unknown as R[K],
    ];
  }

  // const shouldOmitAsProp = typeof slot === 'string' && state[slotName]?.as;
  // const slotProps = (shouldOmitAsProp ? omit(state[slotName]!, ['as']) : state[slotName]) as R[K];

  // return [slot, slotProps];

  return [slot, state[slotName] as R[K]];
}

function getSlots<R extends SlotPropsRecord>(state: CompState<R>) {
  const slotNames: (keyof R)[] = Object.keys(state.components);

  for (const slotName of slotNames) {
    const [slot, props] = getSlot(state, slotName);

    console.log(slot, props);
  }
}
