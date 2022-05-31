import * as React from 'react';
import { makeStyles, shorthands } from '@griffel/react';
import type { Props } from './types';
// import { tokens } from '@fluentui/react-theme';

import { Portal } from '../Portal';

const useStyles = makeStyles({
  container: {
    ...shorthands.border('3px', 'solid', 'red'),
    ...shorthands.padding('10px'),
  },

  portalContent: {
    backgroundColor: 'yellow',
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

export const Default = () => {
  return (
    <Container>
      <Container>
        <Portal>
          <ExamplePortalContent>Portal content</ExamplePortalContent>
        </Portal>
        <Portal>
          <ExamplePortalContent>Portal content</ExamplePortalContent>
        </Portal>
      </Container>
    </Container>
  );
};
