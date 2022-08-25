import { makeStyles, shorthands } from '@griffel/react';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { useToastStateContext } from '../contexts/ToastContext';
import { useToastPortal } from '../hooks/index';
import { Toast } from './Toast';

const useStyles = makeStyles({
  root: {
    ...shorthands.gap('10px'),
    display: 'flex',
    flexDirection: 'column',
    ...shorthands.padding('4px'),
    width: '320px',
    boxSizing: 'border-box',
    color: '#fff',
  },
});

export const ToastPortal = () => {
  const { loaded, portalID } = useToastPortal();
  const { toastList } = useToastStateContext();
  const styles = useStyles();
  return loaded ? (
    ReactDOM.createPortal(
      <div className={styles.root}>
        {toastList.map(t => (
          <Toast id={t.id} key={t.id} mode={t.mode} message={t.message} />
        ))}
      </div>,
      document.getElementById(portalID)!,
    )
  ) : (
    <></>
  );
};
