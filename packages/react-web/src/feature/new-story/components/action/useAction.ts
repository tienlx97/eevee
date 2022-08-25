import * as React from 'react';
import { getNativeElementProps, resolveShorthand } from '@eevee/react-utilities';
import type { ActionProps, ActionState } from './Action.types';
import { useActionState } from './useActionState';
import { Button } from '@eevee/react-button';

/**
 * Create the state required to render Action.
 *
 * The returned state can be modified with hooks such as useActionStyles,
 * before being passed to renderAction.
 *
 * @param props - props from this instance of Action
 * @param ref - reference to root HTMLElement of Action
 */
export const useAction = (props: ActionProps, ref: React.Ref<HTMLElement>): ActionState => {
  const { publish, editOrPreview, onEditPreviewChange, ...rest } = props;
  const state: ActionState = {
    // TODO add appropriate props/defaults
    components: {
      // TODO add each slot's element type or component
      root: 'div',
      editOrPreview: Button,
      publish: Button,
    },
    onEditPreviewChange,
    // TODO add appropriate slots, for example:
    // mySlot: resolveShorthand(props.mySlot),
    root: getNativeElementProps('div', {
      ref,
      ...rest,
    }),
    publish: resolveShorthand(publish, {
      required: true,
    }),
    editOrPreview: resolveShorthand(editOrPreview, {
      required: true,
    }),
  };

  useActionState(state);

  return state;
};
