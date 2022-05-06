import React, { FunctionComponent } from 'react';
import stylex from '@ladifire-opensource/stylex';
import { PaneProps } from './types';

const styles = stylex.create({
  wrapper: {
    padding: '16px',
    paddingTop: 0,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: 'white',
  },
  title: {
    textTransform: 'uppercase',
    fontSize: '1rem',
    lineHeight: '46px',
    fontWeight: 'var(--font-weight-bold)',
    cursor: 'default',
    margin: 0,
  },
});

const Pane: FunctionComponent<PaneProps> = ({
  title,
  children,
  actions,
  xstyle,
}) => {
  return (
    <div className={stylex(styles.wrapper, xstyle)}>
      <div className={stylex(styles.header)}>
        <p className={stylex(styles.title)}>{title}</p>
        {actions}
      </div>
      {children}
    </div>
  );
};

export { Pane };
