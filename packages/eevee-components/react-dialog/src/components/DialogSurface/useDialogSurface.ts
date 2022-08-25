import * as React from 'react';
import { getNativeElementProps, useEventCallback, useMergedRefs } from '@eevee/react-utilities';
import { useModalAttributes } from '@eevee/react-tabster';
import type { DialogSurfaceProps, DialogSurfaceState } from './DialogSurface.types';
import { useDialogContext } from '../../contexts/index';
import { isEscapeKeyDismiss } from '../../utils/index';

/**
 * Create the state required to render DialogSurface.
 *
 * The returned state can be modified with hooks such as useDialogSurfaceStyles,
 * before being passed to renderDialogSurface.
 *
 * @param props - props from this instance of DialogSurface
 * @param ref - reference to root HTMLElement of DialogSurface
 */
export const useDialogSurface = (props: DialogSurfaceProps, ref: React.Ref<HTMLElement>): DialogSurfaceState => {
  const modalType = useDialogContext(ctx => ctx.modalType);
  const { as = 'div' } = props;

  const contentRef = useDialogContext(ctx => ctx.contentRef);
  const dialogTitleID = useDialogContext(ctx => ctx.dialogTitleID);
  const dialogBodyID = useDialogContext(ctx => ctx.dialogBodyID);
  const requestOpenChange = useDialogContext(ctx => ctx.requestOpenChange);

  const { modalAttributes } = useModalAttributes({ trapFocus: modalType !== 'non-modal' });

  const handleRootKeyDown = useEventCallback((event: React.KeyboardEvent<HTMLDivElement>) => {
    props.onKeyDown?.(event);
    if (isEscapeKeyDismiss(event, modalType)) {
      requestOpenChange({ event, open: false, type: 'escapeKeyDown' });
      event.preventDefault();
    }
  });

  return {
    components: {
      root: 'div',
    },
    root: getNativeElementProps(as, {
      ref: useMergedRefs(ref, contentRef),
      'aria-modal': modalType !== 'non-modal',
      'aria-describedby': dialogBodyID,
      'aria-labelledby': props['aria-label'] ? undefined : dialogTitleID,
      role: modalType === 'alert' ? 'alertdialog' : 'dialog',
      ...props,
      ...modalAttributes,
      onKeyDown: handleRootKeyDown,
    }),
  };
};
