import * as React from 'react';
import {
  useEventCallback,
  shouldPreventDefaultOnKeyDown,
  resolveShorthand,
  useMergedRefs,
  getNativeElementProps,
} from '@eevee/react-utilities';

import type { PopoverItemProps, PopoverItemState } from './PopoverItem.types';

/**
 * Returns the props and state required to render the component
 */
export const usePopoverItem = (props: PopoverItemProps, ref: React.Ref<HTMLElement>): PopoverItemState => {
  const innerRef = React.useRef<HTMLElement>(null);

  const state: PopoverItemState = {
    ...props,
    components: {
      root: 'div',
      content: 'span',
    },
    root: getNativeElementProps('div', {
      ref: useMergedRefs(ref, innerRef),
      role: 'menuitem',
      tabIndex: 0,
      'aria-disabled': props.disabled,
      ...props,
    }),
    content: resolveShorthand(props.content, {
      required: !!props.children,
      defaultProps: { children: props.children },
    }),
  };

  const { onClick: onClickOriginal, onKeyDown: onKeyDownOriginal } = state.root;
  state.root.onKeyDown = e => {
    if (shouldPreventDefaultOnKeyDown(e)) {
      if (state.disabled) {
        e.preventDefault();
        e.stopPropagation();
        return;
      }

      e.preventDefault();
      (e.target as HTMLElement)?.click();
    }

    onKeyDownOriginal?.(e);
  };

  state.root.onClick = e => {
    if (state.disabled) {
      e.preventDefault();
      e.stopPropagation();
      return;
    }

    onClickOriginal?.(e);
  };

  const { onMouseEnter: onMouseEnterOriginal } = state.root;
  state.root.onMouseEnter = useEventCallback(e => {
    innerRef.current?.focus();

    onMouseEnterOriginal?.(e);
  });

  return state;
};
