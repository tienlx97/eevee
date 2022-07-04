import { makeStyles, shorthands } from '@griffel/react';
import * as React from 'react';
import { LinkIcon } from '@eevee/react-link';
import { Face, Kid } from '../../../icons/index';

const useRootStyles = makeStyles({
  base: {
    ...shorthands.padding('20px', '0'),
    textAlign: 'center',
    justifyContent: 'center',
    display: 'flex',
  },
});

export const Top = () => {
  const styles = useRootStyles();
  return (
    <div className={styles.base}>
      <LinkIcon icon={<Kid width={40} height={40} />} href="/home" />
    </div>
  );
};
