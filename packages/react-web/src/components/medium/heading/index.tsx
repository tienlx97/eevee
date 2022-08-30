import * as React from 'react';
import { useStyles } from './styles';

export const Heading: React.FC = ({ children }) => {
  const styles = useStyles();
  return (
    <header className={styles.root}>
      <div className={styles.clearfix}>
        <div className={styles['heading-content']}>
          <h2>{children}</h2>
        </div>
      </div>
    </header>
  );
};
