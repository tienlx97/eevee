import * as React from 'react';
import { makeStyles, shorthands } from '@griffel/react';
import { HomeRegular, NotificationRegular, SearchRegular, WriteFill } from '../../../icons/index';
import { LinkIcon } from '../../../linkicon/index';

const useRootStyles = makeStyles({
  base: {
    display: 'block',
  },

  linkIconWrapper: {
    paddingBottom: '30px',
    display: 'flex',
    justifyContent: 'center',
  },
});

export const Middle = () => {
  const styles = useRootStyles();
  return (
    <div className={styles.base}>
      <LinkIcon className={styles.linkIconWrapper} link={{ href: '/home', icon: <HomeRegular /> }} />
      <LinkIcon className={styles.linkIconWrapper} link={{ href: '/search', icon: <SearchRegular /> }} />
      <LinkIcon className={styles.linkIconWrapper} link={{ href: '/notification', icon: <NotificationRegular /> }} />
      <LinkIcon className={styles.linkIconWrapper} link={{ href: '/write', icon: <WriteFill /> }} />
    </div>
  );
};
