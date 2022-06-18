import { makeStyles, shorthands } from '@griffel/react';
import * as React from 'react';

interface ErrorType {
  title?: string;
  message: string;
  column?: number;
  line?: number;
  path?: string;
}

const useRootStyles = makeStyles({
  root: {
    backgroundColor: '#fff',
    ...shorthands.borderWidth('2px'),
    ...shorthands.borderColor('rgb(193 85 77'),
    ...shorthands.borderRadius('.5rem'),
    ...shorthands.padding('1.5rem'),
  },

  title: {
    color: 'rgb(193 85 77)',
    fontSize: '20px',
    marginBottom: '1rem',
  },

  message: {
    color: 'rgb(64 71 86)',
    whiteWpace: 'pre-wrap',
    overflowWrap: 'break-word',
  },
});

export const Error = ({ error }: { error: ErrorType }) => {
  const { message, title } = error;
  const rootStyles = useRootStyles();

  return (
    <div className={rootStyles.root}>
      <h2 className={rootStyles.title}>{title || 'Error'}</h2>
      <pre className={rootStyles.message}>{message}</pre>
    </div>
  );
};
