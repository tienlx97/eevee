/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

import { Navlink } from '../navlink';
import NavUnderline from './NavUnderline';
import { makeStyles, shorthands } from '@griffel/react';

interface NavItemProps {
  href: string;
  label: string;
  size: 'short' | 'medium' | 'long';
  children?: React.ReactNode;
  id?: string;
  toggleDropdown?: (value: boolean) => void;
}

const noop = () => {};

const useStyles = makeStyles({
  wrapper: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
  },

  navItemLink: {
    position: 'relative',
    ...shorthands.padding('10px'),
    textDecorationLine: 'none',
    color: 'var(--color-text)',
    fontWeight: 'var(--font-weight-medium)',
    fontSize: '1rem',

    '&:focus': {
      ...shorthands.outline('2px', 'auto', 'var(--color-primary)'),
      outlineOffset: '2px',
    },
  },
});

const NavItem = ({
  href,
  label,
  size,
  id,
  toggleDropdown = noop,
}: NavItemProps) => {
  const styles = useStyles();

  const [isActive, setIsActive] = React.useState(false);

  // const timeoutRef = React.useRef<number | undefined>(null);

  // React.useEffect(() => {
  //   return () => {
  //     window.clearTimeout((timeoutRef as any).current);
  //   };
  // }, []);

  return (
    <div className={styles.wrapper}>
      <Navlink
        className={styles.navItemLink}
        id={id}
        getProps={(isCurrent) => {
          if (isCurrent && !isActive) {
            setIsActive(true);
          } else if (!isCurrent && isActive) {
            setIsActive(false);
          }
        }}
        href={href}
        onFocus={() => {
          toggleDropdown(false);
        }}
        style={{
          fontWeight: isActive ? 'var(--font-weight-bold)' : undefined,
        }}
      >
        {label}
        {isActive && <NavUnderline size={size} />}
      </Navlink>
    </div>
  );
};

export default React.memo(NavItem);
