import * as React from 'react';
import { makeStyles, shorthands } from '@griffel/react';
import { breakPoints, tokens } from '@eevee/react-theme';

import { SideNav } from './sidenav/index';
import { TopNav } from './topnav/index';
import { BotNav } from './botnav/index';

import { useMediaQuery } from '@hooks/index';
import { NAV_WIDTH } from '@constants/index';

const useMediaQueryStyles = makeStyles({
  // wrapper all navbar
  query: {
    //  min-width: 1080
    [`@media ${breakPoints.lgAndLarger}`]: {
      width: `${NAV_WIDTH}px`,
      minHeight: '100vh',
      flexShrink: 1,
      ...shorthands.borderRight('1px', 'solid', tokens.b2),
    },

    [`@media ${breakPoints.lgAndSmaller}`]: {
      width: 'auto',
    },
  },
});

const useNavStyles = makeStyles({
  fullHeight: {
    height: '100%',
  },
});

export const NavBar = () => {
  const mediaQueryStyles = useMediaQueryStyles();
  const navStyles = useNavStyles();

  // very tricky
  const showSideNav = useMediaQuery(breakPoints.lgAndLarger);

  return (
    <div className={mediaQueryStyles.query}>
      <nav className={navStyles.fullHeight}>
        {!showSideNav && <TopNav />}
        {showSideNav && <SideNav />}
        {!showSideNav && <BotNav />}
      </nav>
    </div>
  );
};
