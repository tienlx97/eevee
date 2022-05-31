import * as React from 'react';
import { makeStyles, shorthands } from '@griffel/react';
import type { Props } from './types';
import { Portal } from '../Portal';

const useStyles = makeStyles({
  container: {
    ...shorthands.border('3px', 'solid', 'green'),
    ...shorthands.padding('10px'),
  },

  portalContent: {
    backgroundColor: 'green',
    ...shorthands.border('3px', 'dashed'),
    marginTop: '10px',
  },
});

const Container: React.FC<Props> = ({ children }) => {
  const styles = useStyles();
  return (
    <div className={styles.container}>
      Portal nested within
      {children}
    </div>
  );
};

const ExamplePortalContent: React.FC<Props> = ({ children }) => {
  const styles = useStyles();

  return <div className={styles.portalContent}>{children}</div>;
};

export const Nested = () => {
  return (
    <Container>
      <Container>
        <Portal>
          <ExamplePortalContent>Outer portal</ExamplePortalContent>
          <Portal>
            <ExamplePortalContent>Inner portal</ExamplePortalContent>
          </Portal>
        </Portal>
      </Container>
    </Container>
  );
};
