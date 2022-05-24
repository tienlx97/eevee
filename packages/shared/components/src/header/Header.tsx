import React from 'react';
import { makeStyles, shorthands } from '@griffel/react';
import { HEADER_HEIGHT } from '@vaporeon/constants';
import { Logo } from '../logo';
import { Navigation } from '../navigation';
import { DarkModeToggle } from '../darkmodetoggle';

const useStyles = makeStyles({
  wrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    ...shorthands.padding('0'),
    height: `${HEADER_HEIGHT}px`,
  },

  left: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: '0%',
    display: 'flex',
    alignItems: 'baseline',
  },

  mainLogo: {
    marginRight: '32px',
  },

  desktopNavigation: {
    '@media (max-width: 768px)': {
      display: 'none',
    },
  },

  rightDesktop: {
    '@media (max-width: 768px)': {
      display: 'none',
    },
  },

  iconWrapper: {
    display: 'flex',
    transitionProperty: 'opacity',
    transitionDuration: '250ms',
  },

  rightMobile: {
    '@media (min-width: 769px)': {
      display: 'none',
    },
  },
});

const Header = () => {
  const styles = useStyles();
  return (
    <div className={styles.wrapper}>
      <div className={styles.left}>
        <Logo className={styles.mainLogo} />
        <Navigation className={styles.desktopNavigation} />
      </div>

      <div className={styles.rightDesktop}>
        <div className={styles.iconWrapper}>
          <DarkModeToggle />
        </div>
      </div>

      <div className={styles.rightMobile}>
        {/* <MobileNav triggerY={12} /> */}
      </div>
    </div>
  );
};

export default React.memo(Header);
