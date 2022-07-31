import * as React from 'react';
import { makeStyles, shorthands } from '@griffel/react';
import { LinkIcon } from '@eevee/react-link';
import { Mimikyu } from '@components/icons/index';
import { Link } from 'react-router-dom';

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
      <Link to="/home">
        <Mimikyu width={35} height={35} />
      </Link>
    </div>
  );
};
