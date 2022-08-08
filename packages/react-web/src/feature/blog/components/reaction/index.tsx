import * as React from 'react';
import { makeStyles, mergeClasses, shorthands } from '@griffel/react';
import { breakPoints, tokens } from '@eevee/react-theme';
import { Button } from '@eevee/react-button';
import { Clap, Comment } from '@components/icons/index';
import { useBlogParam } from '@feature/blog/index';

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

  'mr-5': {
    marginRight: '5px',
  },

  'text-base': {
    fontSize: tokens.fontSizeBase200,
  },

  spacing: {
    height: '12px',
    ...shorthands.borderRight('1px', 'solid', tokens.b1),
    ...shorthands.margin('0', '16px'),

    [`@media ${breakPoints.sm}`]: {
      ...shorthands.margin('0px', '8px'),
    },

    [`@media ${breakPoints.xs}`]: {
      ...shorthands.margin('0px', '8px'),
    },
  },
});

type ReactionProps = JSX.IntrinsicElements['div'] & {
  setOpenComment: (value: boolean) => void;
};

export const Reaction = ({ setOpenComment, ...props }: ReactionProps) => {
  const slug = useBlogParam();
  const styles = useRootStyles();

  return (
    <div {...props}>
      <div className={styles.wrapper}>
        <div className={styles.flex}>
          <Button className={styles['text-base']} icon={{ children: <Clap />, className: styles['mr-5'] }}>
            250
          </Button>
          <div className={styles.spacing} />
          <Button
            // eslint-disable-next-line react/jsx-no-bind
            onClick={() => setOpenComment(true)}
            className={styles['text-base']}
            icon={{ children: <Comment />, className: styles['mr-5'] }}
          />
        </div>
      </div>
    </div>
  );
};

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
