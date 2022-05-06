import React from 'react';
import stylex from '@ladifire-opensource/stylex';

const styles = stylex.create({
  root: {
    backgroundColor: 'var(--color-error)',
    color: 'var(--color-background)',
    padding: '12px 16px',
    position: 'absolute',
    width: '100%',
    bottom: 0,
    boxSizing: 'border-box',
    borderRadius: '0 0 4px 4px',
    fontSize: '1rem',
    marginBottom: 0,
  },
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ErrorDisplay = (children: any) => {
  return <p className={stylex(styles.root)}>{children}</p>;
};

export { ErrorDisplay };
