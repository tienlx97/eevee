import * as React from 'react';
import { THEME_MAPPING } from '../../constants/css';
import { Close } from '../icons/Close';
import type { CommentSystemState } from './CommentSystem.types';
import { useTheme } from '@eevee/react-shared-contexts';

export const useCommentSystemState = (state: CommentSystemState): CommentSystemState => {
  const { show, onClose } = state;
  const { colorMode } = useTheme();
  state.theme = THEME_MAPPING[colorMode as keyof typeof THEME_MAPPING];

  state.root.role = 'dialog';
  state.root['aria-modal'] = 'true';
  state.root.tabIndex = -1;
  state.root.style = {
    visibility: show ? 'visible' : 'hidden',
  };

  state.blur.role = 'presentation';
  state.blur['aria-hidden'] = show ? 'false' : 'true';
  state.blur.onClick = onClose;

  state.commentWrapper['aria-hidden'] = show ? 'false' : 'true';

  state.closeButton.onClick = onClose;

  return state;
};
