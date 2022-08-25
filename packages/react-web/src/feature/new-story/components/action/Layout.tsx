import * as React from 'react';
import { makeStyles, mergeClasses, shorthands } from '@griffel/react';
import { breakPoints, tokens } from '@eevee/react-theme';

const useRootStyles = makeStyles({
  wrapper: {
    height: '40px',
    ...shorthands.padding('0px', '14px', '0px', '14px'),
    ...shorthands.borderRadius('20px'),
    ...shorthands.border('none'),
    alignItems: 'center',
    display: 'flex',
    backgroundColor: tokens.bg1,
    boxShadow: `${tokens.b2} 0px 2px 10px 0px`,

    [`@media ${breakPoints.lgAndLarger}`]: {
      ...shorthands.padding('0px', '14px', '0px', '14px'),
    },

    [`@media ${breakPoints.lg}`]: {
      ...shorthands.padding('0px', '14px', '0px', '14px'),
    },

    [`@media ${breakPoints.md}`]: {
      ...shorthands.padding('0px', '14px', '0px', '14px'),
    },

    [`@media ${breakPoints.sm}`]: {
      ...shorthands.padding('0px', '4px'),
    },

    [`@media ${breakPoints.xs}`]: {
      ...shorthands.padding('0px', '4px'),
    },
  },

  flex: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export const Layout = ({ children, ...props }: JSX.IntrinsicElements['div']) => {
  const styles = useRootStyles();
  return (
    <div {...props}>
      <div className={styles.wrapper}>
        <div className={styles.flex}>{children}</div>
      </div>
    </div>
  );
};
