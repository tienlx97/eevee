import { makeStyles, shorthands } from '@griffel/react';
import * as React from 'react';
import { tokens } from '@eevee/react-theme';
import { toDate } from '@utilities/toDate';
import type { ReadTime } from 'typings/my-mdx/index';

const useRootStyles = makeStyles({
  root: {
    flexWrap: 'wrap',
    alignItems: 'center',
    display: 'flex',
  },
});

const useDotStyles = makeStyles({
  root: {
    display: 'inline-block',
    ...shorthands.padding('0', '8px'),
  },

  dot: {
    color: tokens.f1,
  },
});

const Dot = () => {
  const dotStyles = useDotStyles();
  return (
    <div className={dotStyles.root}>
      <span className={dotStyles.dot}>·</span>
    </div>
  );
};

type AuthorReadTimeProps = JSX.IntrinsicElements['div'] & {
  authorName: string;
  authorNickName: string;
  date: string;
  readTime: ReadTime;
};

export const AuthorReadTimeSkeleton = () => {
  const styles = useRootStyles();

  return (
    <div>
      <div className="skeleton-line heading" style={{ width: '100px' }} />
      <div className={styles.root}>
        <div className="skeleton-line heading" style={{ width: '70px' }} />
        <Dot />
        <div className="skeleton-line heading" style={{ width: '80px' }} />
        <Dot />
        <div className="skeleton-line heading" style={{ width: '70px' }} />
      </div>
    </div>
  );
};

export const AuthorReadTime = ({ authorName, authorNickName, date, readTime, ...props }: AuthorReadTimeProps) => {
  const styles = useRootStyles();
  return (
    <div {...props}>
      <div>{authorName}</div>
      <div className={styles.root}>
        <p>@{authorNickName}</p>
        <Dot />
        <p>{toDate(date)}</p>
        <Dot />
        <p>{readTime.text}</p>
      </div>
    </div>
  );
};
