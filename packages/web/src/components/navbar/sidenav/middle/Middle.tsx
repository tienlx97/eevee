import * as React from 'react';
import { makeStyles, shorthands } from '@griffel/react';
import { HomeRegular, NotificationRegular, SearchRegular, WriteFill } from '../../../icons/index';
import { LinkIcon } from '../../../linkicon/index';

const useRootStyles = makeStyles({
  base: {
    display: 'block',
  },
});

export const Middle = () => {
  const styles = useRootStyles();
  return (
    <div className={styles.base}>
      <LinkIcon link={{ href: '/home', icon: <HomeRegular /> }} />
      <LinkIcon link={{ href: '/search', icon: <SearchRegular /> }} />
      <LinkIcon link={{ href: '/notification', icon: <NotificationRegular /> }} />
      <LinkIcon link={{ href: '/write', icon: <WriteFill /> }} />
    </div>
  );
};
