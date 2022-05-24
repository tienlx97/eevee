import React from 'react';

import { Link } from '../link';

import { makeStyles, shorthands } from '@griffel/react';

const useStyles = makeStyles({
  wrapper: {
    display: 'flex',
    fontSize: '24px',
    letterSpacing: '-1px',
    ...shorthands.padding('0'),
    textDecorationLine: 'none',
    color: 'var(--color-primary)',
  },

  missingLetter: {
    display: 'inline-block',
    position: 'relative',
    width: '5px',
  },

  first: {
    display: 'inline-block',
    fontWeight: 'var(--font-weight-medium)',
  },

  second: {
    display: 'inline-block',
    fontWeight: 'var(--font-weight-medium)',
  },
});

const Logo = ({
  ...delegated
}: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
  const styles = useStyles();
  return (
    <Link {...delegated} className={styles.wrapper} href="/">
      <span className={styles.first}>Tienlx</span>
      <span className={styles.missingLetter} />
      <span className={styles.second}>97</span>
    </Link>
  );
};

export default Logo;
