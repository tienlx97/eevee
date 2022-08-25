import * as React from 'react';
import { getNativeElementProps, resolveShorthand } from '@eevee/react-utilities';
import type { DialogTitleProps, DialogTitleState } from './DialogTitle.types';
// import { useARIAButtonShorthand } from '@eevee/react-aria';
import { Button } from '@eevee/react-button';
import { useDialogContext } from '../../contexts/dialogContext';
import { DismissRegular } from './Dismiss/index';

/**
 * Create the state required to render DialogTitle.
 *
 * The returned state can be modified with hooks such as useDialogTitleStyles,
 * before being passed to renderDialogTitle.
 *
 * @param props - props from this instance of DialogTitle
 * @param ref - reference to root HTMLElement of DialogTitle
 */
export const useDialogTitle = (props: DialogTitleProps, ref: React.Ref<HTMLElement>): DialogTitleState => {
  const { as = 'div', closeButton } = props;
  const modalType = useDialogContext(ctx => ctx.modalType);

  return {
    components: {
      root: 'div',
      closeButton: Button,
    },
    root: getNativeElementProps(as, {
      ref,
      id: useDialogContext(ctx => ctx.dialogTitleID),
      ...props,
    }),
    closeButton: resolveShorthand(closeButton, {
      required: modalType === 'non-modal',
      defaultProps: {
        type: 'button', // This is added because the default for type is 'submit'
        'aria-label': 'close', // TODO: find a better way to add internal labels
        children: <DismissRegular />,
      },
    }),
  };
};
