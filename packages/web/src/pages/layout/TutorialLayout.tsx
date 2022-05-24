import React from 'react';

import { COLOR_SWAP_TRANSITION_DURATION } from '@vaporeon/constants';
import { throttle } from '@vaporeon/utils';

import { Header, Spacer } from '@jolteon/components';

import { MaxWidthWrapper } from './MaxWidthWrapper';

// HACK: This should be derived.
// Could use a data attribute?
const HERO_HEIGHT = 250;

import { makeStyles, shorthands } from '@griffel/react';
const useStyles = makeStyles({
  wrapper: {
    backgroundColor: 'var(--color-background)',
    transitionProperty: ' background',
    transitionDuration: `${COLOR_SWAP_TRANSITION_DURATION}ms`,
  },

  headerWrapper: {
    position: 'sticky',
    zIndex: 5,
    top: '0',
  },

  children: {
    position: 'relative',
    zIndex: '1',

    '@media (max-width: 1024px)': {
      maxWidth: '100vw',
      ...shorthands.overflow('hidden'),
    },
  },

  darkHeaderBackground: {
    position: 'sticky',
    zIndex: '3',
    top: '0',
    width: '100%',
    height: 'calc(68px + 2px)',
    backgroundColor: 'var(--color-background)',
    transform: 'translateY(-2px)',
    willChange: 'transform',

    transitionProperty: 'background',
    transitionDuration: `${COLOR_SWAP_TRANSITION_DURATION}ms`,
  },

  heroWrapper: {
    position: 'relative',
    zIndex: 4,
  },

  lightHeaderBackground: {
    position: 'sticky',
    zIndex: '4',
    top: '0',
    width: '100%',
    height: '68px',
    backgroundColor: 'var(--color-muted)',
    transitionProperty: 'background',
    transitionDuration: `${COLOR_SWAP_TRANSITION_DURATION}ms`,
  },

  sneakyLightHeaderBackground: {
    position: 'absolute',
    zIndex: '3',
    top: '-68px',
    width: '100%',
    height: '68px',
    backgroundColor: 'var(--color-muted)',
  },
});

interface ITutorialLayout {
  children: React.ReactNode;
  hero: React.ReactNode;
}

const TutorialLayout = ({ children, hero }: ITutorialLayout) => {
  const [scrolledBelowHeader, setScrolledBelowHeader] = React.useState(false);
  const styles = useStyles();
  React.useEffect(() => {
    const handleScroll = throttle(() => {
      const shouldAppear = !scrolledBelowHeader && window.scrollY > HERO_HEIGHT;
      const shouldDisappear =
        scrolledBelowHeader && window.scrollY <= HERO_HEIGHT;

      if (shouldAppear || shouldDisappear) {
        setScrolledBelowHeader(!scrolledBelowHeader);
      }
    }, 250);

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolledBelowHeader, setScrolledBelowHeader]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.headerWrapper}>
        <MaxWidthWrapper>
          <Header />
        </MaxWidthWrapper>
      </div>

      <div className={styles.heroWrapper}>
        <div className={styles.lightHeaderBackground} />
        <div className={styles.sneakyLightHeaderBackground} />
        {hero}
      </div>

      <div className={styles.darkHeaderBackground} />

      <main className={styles.children}>{children}</main>

      <Spacer size={148} />
    </div>
  );
};

export default TutorialLayout;
