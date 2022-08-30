import * as React from 'react';
import { THEME_MAPPING } from '../../constants/css';
import { Close } from '../icons/Close';
import type { CommentSystemState } from './CommentSystem.types';
import { useTheme } from '@eevee/react-shared-contexts';
import { useLocation } from 'react-router-dom';

export const useCommentSystemState = (state: CommentSystemState): CommentSystemState => {
  const { show, onClose } = state;
  const { colorMode } = useTheme();
  const { pathname } = useLocation();

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

  const [reset, setReset] = React.useState(false);

  state.reset = reset;

  React.useEffect(() => {
    setReset(true);
  }, [pathname]);

  React.useEffect(() => {
    if (show) {
      if (reset) {
        setReset(false);
      }
    }
  }, [reset, show]);

  return state;
};
