import * as React from 'react';
import { makeStyles, shorthands } from '@griffel/react';
import { Linkr } from '@eevee/react-link';
import { Button } from '@eevee/react-button';
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
      <LinkIcon href="/home" icon={<HomeRegular />} wrapper={''} />
      <LinkIcon href="/search" icon={<SearchRegular />} wrapper={''} />
      <LinkIcon href="/notification" icon={<NotificationRegular />} wrapper={''} />
      <LinkIcon href="/write" icon={<WriteFill />} wrapper={''} />
    </div>
  );
};
