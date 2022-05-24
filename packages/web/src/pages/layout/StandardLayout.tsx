import React, { CSSProperties } from 'react';
import { COLOR_SWAP_TRANSITION_DURATION } from '@vaporeon/constants';
import { MaxWidthWrapper } from './MaxWidthWrapper';
import { makeStyles, shorthands } from '@griffel/react';
import { Header, Spacer } from '@jolteon/components';

const useStyles = makeStyles({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },

  headerWrapper: {
    position: 'sticky',
    top: '-1px',
    zIndex: '3',
    backgroundColor: 'var(--background)',
    // transition: `background ${COLOR_SWAP_TRANSITION_DURATION}ms`,
    transitionProperty: 'background',
    transitionDuration: `${COLOR_SWAP_TRANSITION_DURATION}ms`,
  },

  childWrapper: {
    flexGrow: '1',
    flexShrink: '1',
    flexBasis: '0%',
    position: 'relative',
    zIndex: '1',
    maxWidth: '100vw',
    ...shorthands.overflow('hidden'),
    transitionProperty: 'background',
    transitionDuration: `${COLOR_SWAP_TRANSITION_DURATION}ms`,
  },
});

interface IStandardLayoutProps {
  children: React.ReactNode;
  background?: string;
}

export default function StandardLayout({
  children,
  background = 'var(--color-background)',
}: IStandardLayoutProps) {
  const styles = useStyles();
  return (
    <div
      className={styles.wrapper}
      style={{ '--background': background } as CSSProperties}
    >
      <div className={styles.headerWrapper}>
        <MaxWidthWrapper>
          <Header />
        </MaxWidthWrapper>
      </div>

      <div className={styles.childWrapper}>
        {children}
        <Spacer size={96} />
      </div>
    </div>
  );
}
