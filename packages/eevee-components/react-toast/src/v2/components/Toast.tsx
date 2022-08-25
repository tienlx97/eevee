import * as React from 'react';
import { ToastItem, useToastDispatchContext } from '../contexts/ToastContext';
import { tokens } from '@eevee/react-theme';
import { makeStyles, mergeClasses, shorthands } from '@griffel/react';
import { Error } from './icons/Error';
import { Warning } from './icons/Warning';
import { Success } from './icons/Success';
import { Info } from './icons/Info';
import { Close } from './icons/Close';

const useStyles = makeStyles({
  root: {
    // v2
    position: 'relative',
    minHeight: '64px',
    boxSizing: 'border-box',
    // marginBottom: '1rem',
    ...shorthands.padding('8px'),
    ...shorthands.borderRadius('4px'),
    boxShadow: '0 1px 10px 0 rgb(0 0 0 / 10%), 0 2px 15px 0 rgb(0 0 0 / 5%)',
    display: 'flex',
    MsFlexPack: 'justify',
    justifyContent: 'space-between',
    maxHeight: '800px',
    ...shorthands.overflow('hidden'),
    fontFamily: tokens.fontFamily,
    cursor: 'pointer',
    direction: 'ltr',

    animationDuration: '0.75s',
    transitionProperty: 'all',
    transitionDuration: '0.2s',
    transitionTimingFunction: 'ease',
    transitionDelay: '0s',
    animationName: {
      from: {
        opacity: 0,
      },
      to: {
        opacity: 1,
      },
    },

    ':hover': {
      transitionProperty: 'all',
      transitionDuration: '0.2s',
      transitionTimingFunction: 'ease',
      transitionDelay: '0s',
      transform: 'scale(0.95)',
      boxShadow: '0px 0px 3px gray',
    },
  },

  body: {
    ...shorthands.margin('auto', '0'),
    flexGrow: '1',
    flexShrink: '1',
    flexBasis: 'auto',
    ...shorthands.padding('6px'),
    display: 'flex',
    alignItems: 'center',
  },

  icon: {
    WebkitMarginEnd: '10px',
    marginInlineEnd: '10px',
    width: '20px',
    MsFlexNegative: '0',
    flexShrink: '0',
    display: 'flex',
  },

  close: {
    color: '#fff',
    borderTopStyle: 'none',
    borderRightStyle: 'none',
    borderBottomStyle: 'none',
    borderLeftStyle: 'none',
    ...shorthands.outline('none'),
    ...shorthands.padding('0'),
    backgroundColor: 'transparent',
    cursor: 'pointer',
    opacity: '.7',
    transitionDuration: '0.3s',
    transitionTimingFunction: 'ease',
    transitionDelay: '0s',
    alignSelf: 'flex-start',

    '> svg': {
      fill: 'currentColor',
      height: '16px',
      width: '14px',
    },
  },
});

const useModeStyles = makeStyles({
  success: {
    backgroundColor: '#07bc0c',
    color: '#fff',
  },
  warning: {
    backgroundColor: '#f1c40f',
    color: '#fff',
  },
  error: {
    backgroundColor: '#e74c3c',
    color: '#fff',
  },
  info: {
    backgroundColor: '#3498db',
    color: '#fff',
  },
});

export const Toast = ({ id, message, mode }: ToastItem) => {
  const styles = useStyles();
  const modeStyles = useModeStyles();
  const { dispatch } = useToastDispatchContext();

  return (
    <div
      onClick={() => {
        dispatch({ type: 'DELETE_TOAST', id: id });
      }}
      className={mergeClasses(styles.root, modeStyles[mode])}
    >
      <div role="alert" className={styles.body}>
        <div className={styles.icon}>
          {mode === 'error' && <Error />}
          {mode === 'info' && <Info />}
          {mode === 'success' && <Success />}
          {mode === 'warning' && <Warning />}
        </div>
        <div>{message}</div>
      </div>
      <button type="button" aria-label="close" className={styles.close}>
        <Close />
      </button>
    </div>
  );
};
