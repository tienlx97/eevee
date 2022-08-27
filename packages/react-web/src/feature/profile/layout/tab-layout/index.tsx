import * as React from 'react';
import { makeStyles, shorthands } from '@griffel/react';
import { breakPoints, tokens } from '@eevee/react-theme';

const useStyles = makeStyles({
  root: {
    ...shorthands.flex(1, 0, 'auto'),
    display: 'block',
  },

  padding: {
    ...shorthands.padding('8px', 0),
    display: 'block',
  },

  mediaQueryContent: {
    width: '100%',
    minWidth: 0,
    [`@media ${breakPoints.lgAndLarger}`]: {
      maxWidth: '692px',
      ...shorthands.margin('0px', '32px'),
    },

    [`@media ${breakPoints.lg}`]: {
      maxWidth: '692px',
      ...shorthands.margin('0px', '32px'),
    },

    [`@media ${breakPoints.md}`]: {
      maxWidth: '692px',
      ...shorthands.margin('0px', '32px'),
    },

    [`@media ${breakPoints.sm}`]: {
      ...shorthands.margin('0px', '24px'),
    },

    [`@media ${breakPoints.xs}`]: {
      ...shorthands.margin('0px', '0px'),
    },
  },

  auto: {
    marginRight: 'auto',
    marginLeft: 'auto',
    boxSizing: 'content-box',
    display: 'block',
  },

  flexCenter: {
    display: 'flex',
    justifyContent: 'center',
  },
});

export const TabLayout: React.FC = ({ children }) => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <div className={styles.padding}>
        <div className={styles.auto}>
          <div className={styles.flexCenter}>
            <div className={styles.mediaQueryContent}>{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
