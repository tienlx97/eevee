import React from 'react';
import { makeStyles, mergeClasses, shorthands } from '@griffel/react';

import { PostLink } from '../link';

const useStyles = makeStyles({
  wrapperLink: {
    ...shorthands.padding('5px'),
    textDecorationLine: 'none',
    color: '#000',
    fontWeight: 'var(--font-weight-light)',
    fontSize: '1rem',

    '&.active': {
      fontWeight: 'var(--font-weight-bold)',
    },

    '&:hover': {
      color: 'var(--color-primary)',
    },
  },
});

const NavItemChild = ({
  href,
  children,
  ...delegated
}: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
  const styles = useStyles();
  return (
    <PostLink
      className={mergeClasses(styles.wrapperLink, 'active')}
      href={href}
      {...delegated}
    >
      {children}
    </PostLink>
  );
};

export default NavItemChild;
