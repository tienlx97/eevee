import * as React from 'react';
import { SideNav } from './sidenav';
import { TopNav } from './topnav';

import { makeStyles, shorthands } from '@griffel/react';
import { breakPoints, tokens } from '@eevee/react-theme';
import { sideNavWidth, topNavHeight } from '../../constants';
import { BotNav } from './botnav/BotNav';

const useMediaQueryStyles = makeStyles({
  // wrapper all navbar
  query: {
    width: 'auto',

    //  min-width: 1080
    [`${breakPoints.lgAndLarger}`]: {
      flexShrink: 1,
      width: `${sideNavWidth}px`,
      minHeight: '100vh',
      ...shorthands.borderRight('1px', 'solid', tokens.colorStroke1),
    },

    [`${breakPoints.lgAndSmaller}`]: {
      height: `${topNavHeight}px`,
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

  return (
    <div className={mediaQueryStyles.query}>
      <nav className={navStyles.fullHeight}>
        <TopNav />
        <SideNav />
        <BotNav />
      </nav>
    </div>
  );
};
