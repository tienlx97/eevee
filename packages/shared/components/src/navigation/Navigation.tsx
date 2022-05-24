import React from 'react';

import NavItem from './NavItem';
import { makeStyles, mergeClasses, shorthands } from '@griffel/react';

const useStyles = makeStyles({
  wrapper: {
    display: 'flex',
  },

  list: {
    display: 'flex',
    listStyleType: 'none',
  },

  listItem: {
    ...shorthands.margin('10px'),
  },
});

const Navigation = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) => {
  const styles = useStyles();

  return (
    <nav
      className={mergeClasses(styles.wrapper, className)}
      {...props}
      aria-label="desktop navigation"
    >
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <NavItem label="Latest" href="/latest/" size="short"></NavItem>
        </li>

        <li className={styles.listItem}>
          <NavItem
            label="Snippets"
            href="/snippets/"
            size="medium"
            id="after-child-nav"
          />
        </li>
        <li className={styles.listItem}>
          <NavItem label="Goodies" href="/goodies/" size="long" />
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
