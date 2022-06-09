import * as React from 'react';
import { makeStyles, shorthands } from '@griffel/react';

import { breakPoints, tokens } from '@eevee/react-theme';

import { SideNav } from './sidenav/index';
import { TopNav } from './topnav/index';
import { BotNav } from './botnav/index';

import { useMediaQuery } from '../../hooks/index';
import { navWidth } from '../../constants/index';
const useMediaQueryStyles = makeStyles({
  // wrapper all navbar
  query: {
    // width: 'auto',

    //  min-width: 1080
    [`@media ${breakPoints.lgAndLarger}`]: {
      flexShrink: 1,
      width: `${navWidth}px`,
      minHeight: '100vh',
      ...shorthands.borderRight('1px', 'solid', tokens.border1),
    },

    [`@media ${breakPoints.lgAndSmaller}`]: {
      // height: `${navHeight}px`,
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
