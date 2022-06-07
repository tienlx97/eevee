import * as React from 'react';
import { makeStyles, shorthands } from '@griffel/react';
import { Linkr } from '@eevee/react-link';
import { Button } from '@eevee/react-button';
import { HomeRegular, NotificationRegular, SearchRegular, WriteFill } from '../../../icons/index';
import { tokens } from '@eevee/react-theme';

const useRootStyles = makeStyles({
  base: {
    display: 'block',
  },
});

const useIconStyles = makeStyles({
  root: {
    // ...shorthands.padding('5px'),
    // ...shorthands.borderRadius('4px'),
    // ':hover': {
    //   backgroundColor: tokens.colorBackground1,
    // },
  },
});

export const Middle = () => {
  const styles = useRootStyles();
  const iconStyles = useIconStyles();
  return (
    <div className={styles.base}>
      <div style={{ paddingBottom: '30px', display: 'flex', justifyContent: 'center' }}>
        <Linkr href="/123" className={iconStyles.root} icon={<HomeRegular />} />
      </div>
      <div style={{ paddingBottom: '30px', display: 'flex', justifyContent: 'center' }}>
        <Linkr href="/123" className={iconStyles.root} icon={<SearchRegular />} />
      </div>
      <div style={{ paddingBottom: '30px', display: 'flex', justifyContent: 'center' }}>
        <Linkr href="/123" className={iconStyles.root} icon={<NotificationRegular />} />
      </div>
      <div style={{ paddingBottom: '30px', display: 'flex', justifyContent: 'center' }}>
        <Linkr href="/123" className={iconStyles.root} icon={<WriteFill />} />
      </div>
    </div>
  );
};
