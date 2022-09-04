import * as React from 'react';
import { Heading } from '@components/medium/index';
import { breakPoints, tokens } from '@eevee/react-theme';
import { makeStyles, shorthands } from '@griffel/react';

const useStyles = makeStyles({
  verticalDivider: {
    ...shorthands.borderLeft('1px', 'solid', tokens.b2),
    display: 'flex',
    paddingLeft: '8px',
    paddingTop: '8px',

    [`@media ${breakPoints.lgAndLarger}`]: {
      marginLeft: '15px',
    },

    [`@media ${breakPoints.lg}`]: {
      marginLeft: '15px',
    },

    [`@media ${breakPoints.md}`]: {
      marginLeft: '15px',
    },

    [`@media ${breakPoints.sm}`]: {
      marginLeft: '5px',
    },

    [`@media ${breakPoints.xs}`]: {
      marginLeft: '5px',
    },
  },

  'mt-30': {
    marginTop: '30px',
  },
});

type BlockProps = {
  heading: string;
};
export const Block: React.FC<BlockProps> = ({ heading, children }) => {
  return (
    <div>
      <div style={{ height: '40px' }} />
      <Heading>{heading}</Heading>
      {children}
    </div>
  );
};

type ItemProps = {
  from: React.ReactNode;
};

export const Item: React.FC<ItemProps> = ({ from, children }) => {
  const styles = useStyles();

  return (
    <div className={styles['mt-30']}>
      <div>{from}</div>
      <div className={styles.verticalDivider}>{children}</div>
    </div>
  );
};
