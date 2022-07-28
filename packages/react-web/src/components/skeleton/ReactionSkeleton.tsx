import { makeStyles, mergeClasses, shorthands } from '@griffel/react';
import * as React from 'react';
import { tokens } from '@eevee/react-theme';
import { Clap } from '../icons/Clap';
import { Comment } from '../icons/Comment';
import { Button } from '@eevee/react-button';

const useRootStyles = makeStyles({
  wrapper: {
    height: '40px',
    ...shorthands.padding('0px', '14px', '0px', '16px'),
    ...shorthands.borderRadius('20px'),
    ...shorthands.border('none'),
    alignItems: 'center',
    display: 'flex',
    backgroundColor: 'var(--bg1)',
    boxShadow: 'var(--b2) 0px 2px 10px 0px',
  },

  flex: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },

  spacing: {
    height: '12px',
    ...shorthands.margin('0', '16px'),
    ...shorthands.borderRight('1px', 'solid', tokens.b1),
  },
});

export const ReactionSkeleton = ({ className, ...props }: JSX.IntrinsicElements['div']) => {
  const styles = useRootStyles();
  return (
    <div className={mergeClasses('tweet-text', className)} {...props}>
      <div className={styles.wrapper}>
        <div className={styles.flex}>
          <Button icon={{ children: <Clap /> }} />
          <div className={styles.spacing} />
          <Button icon={{ children: <Comment /> }} />
        </div>
      </div>
    </div>
  );
};
