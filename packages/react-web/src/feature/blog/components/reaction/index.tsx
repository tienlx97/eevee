import * as React from 'react';
import { makeStyles, mergeClasses, shorthands } from '@griffel/react';
import { tokens } from '@eevee/react-theme';
import { Button } from '@eevee/react-button';
import { Clap, Comment } from '@components/icons/index';
import { useBlogParam, useBlogAPISWR } from '@feature/blog/index';

const useRootStyles = makeStyles({
  wrapper: {
    height: '40px',
    ...shorthands.padding('0px', '14px', '0px', '16px'),
    ...shorthands.borderRadius('20px'),
    ...shorthands.border('none'),
    alignItems: 'center',
    display: 'flex',
    backgroundColor: tokens.bg1,
    boxShadow: `${tokens.b2} 0px 2px 10px 0px`,
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
    ...shorthands.margin('0', '16px'),
    ...shorthands.borderRight('1px', 'solid', tokens.b1),
  },
});

type ReactionProps = JSX.IntrinsicElements['div'] & {
  setOpenComment: (value: boolean) => void;
};

export const Reaction = ({ setOpenComment, ...props }: ReactionProps) => {
  const slug = useBlogParam();
  useBlogAPISWR(slug);
  const styles = useRootStyles();

  return (
    <div {...props}>
      <div className={styles.wrapper}>
        <div className={styles.flex}>
          <div className={styles['mr-5']}>
            <Button className={styles['text-base']} icon={{ children: <Clap />, className: styles['mr-5'] }}>
              250
            </Button>
          </div>
          <div className={styles.spacing} />
          <div className={styles['mr-5']}>
            <Button
              // eslint-disable-next-line react/jsx-no-bind
              onClick={() => setOpenComment(true)}
              className={styles['text-base']}
              icon={{ children: <Comment />, className: styles['mr-5'] }}
            />
          </div>
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
