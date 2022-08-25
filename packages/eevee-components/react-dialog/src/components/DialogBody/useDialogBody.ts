import * as React from 'react';
import { getNativeElementProps } from '@eevee/react-utilities';
import type { DialogBodyProps, DialogBodyState } from './DialogBody.types';
import { useDialogContext } from '../../contexts/index';

/**
 * Create the state required to render DialogBody.
 *
 * The returned state can be modified with hooks such as useDialogBodyStyles,
 * before being passed to renderDialogBody.
 *
 * @param props - props from this instance of DialogBody
 * @param ref - reference to root HTMLElement of DialogBody
 */
export const useDialogBody = (props: DialogBodyProps, ref: React.Ref<HTMLElement>): DialogBodyState => {
  return {
    components: {
      root: 'div',
    },
    root: getNativeElementProps('div', {
      ref,
      id: useDialogContext(ctx => ctx.dialogBodyID),
      ...props,
    }),
  };
};
