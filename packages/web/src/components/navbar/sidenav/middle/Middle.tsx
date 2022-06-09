import * as React from 'react';
import { makeStyles } from '@griffel/react';
import { HomeRegular, NotificationRegular, SearchRegular, WriteFill } from '../../../icons/index';
import { LinkR } from '@eevee/react-link';

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
      <div className={styles.linkIconWrapper}>
        <LinkR icon={<HomeRegular />} href="/home" />
      </div>
      <div className={styles.linkIconWrapper}>
        <LinkR icon={<SearchRegular />} href="/search" />
      </div>
      <div className={styles.linkIconWrapper}>
        <LinkR icon={<NotificationRegular />} href="/notification" />
      </div>
      <div className={styles.linkIconWrapper}>
        <LinkR icon={<WriteFill />} href="/write" />
      </div>
    </div>
  );
};
