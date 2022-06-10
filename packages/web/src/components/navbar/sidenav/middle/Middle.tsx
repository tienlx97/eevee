import * as React from 'react';
import { makeStyles } from '@griffel/react';
import {
  HomeFill,
  HomeRegular,
  NotificationRegular,
  SearchRegular,
  WriteFill,
  SearchFill,
  NotificationFill,
  WriteRegular,
} from '../../../icons/index';
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
        <LinkR aria-label="Home" title="Home" iconFill={HomeFill} iconRegular={HomeRegular} href="/home" />
      </div>
      <div className={styles.linkIconWrapper}>
        <LinkR aria-label="Search" title="Search" iconFill={SearchFill} iconRegular={SearchRegular} href="/search" />
      </div>
      <div className={styles.linkIconWrapper}>
        <LinkR
          aria-label="Notification"
          title="Notification"
          iconFill={NotificationFill}
          iconRegular={NotificationRegular}
          href="/notification"
        />
      </div>
      <div aria-label="Write" title="Write" className={styles.linkIconWrapper}>
        <LinkR iconRegular={WriteRegular} iconFill={WriteFill} href="/write" />
      </div>
    </div>
  );
};
