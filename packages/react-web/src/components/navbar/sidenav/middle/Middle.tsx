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
} from '@components/icons/index';
import { LinkIcon } from '@eevee/react-link';
import { useAuthContext } from '@context/AuthContext';

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
  const { state } = useAuthContext();
  return (
    <div className={styles.base}>
      <div className={styles.linkIconWrapper}>
        <LinkIcon aria-label="Home" title="Home" iconFill={HomeFill} iconRegular={HomeRegular} href="/home" />
      </div>
      <div className={styles.linkIconWrapper}>
        <LinkIcon aria-label="Search" title="Search" iconFill={SearchFill} iconRegular={SearchRegular} href="/search" />
      </div>
      {state.user && (
        <>
          <div className={styles.linkIconWrapper}>
            <LinkIcon
              aria-label="Notification"
              title="Notification"
              iconFill={NotificationFill}
              iconRegular={NotificationRegular}
              href="/notification"
            />
          </div>

          <div aria-label="Write" title="Write" className={styles.linkIconWrapper}>
            <LinkIcon iconRegular={WriteRegular} iconFill={WriteFill} href="/new-story" />
          </div>
        </>
      )}
    </div>
  );
};
