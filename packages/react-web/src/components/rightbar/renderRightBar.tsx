import * as React from 'react';
import { makeStyles, shorthands } from '@griffel/react';
import { ErrorBoundary } from 'react-error-boundary';
import { getSlots } from '@eevee/react-utilities';

import { Toc } from '@components/toc/index';
import { Spinner } from '@components/spinner/Spinner';

import { RightBarSlots, RightBarState } from './RightBar.types';
import { Porfolio } from '../porfolio/index';
import { PorfolioSkeleton } from '../skeleton/PorfolioSkeleton';
import { TocSkeleton } from '../skeleton/TocSkeleton';
import { Link } from 'react-router-dom';
import { BlogRightBar } from '@feature/blog/index';

const useRootStyles = makeStyles({
  root: {
    width: '100%',
    height: '100%',
    display: 'inline-block',
    position: 'relative',
  },

  // div2: {
  //   top: 0,
  //   position: 'sticky',
  //   display: 'flex',
  //   flexDirection: 'column',
  //   minHeight: '100vh',
  // },

  div3: {
    display: 'block',
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: 'auto',
    position: 'relative',
  },
});

/**
 * Render the final JSX of Right
 */
export const renderRightBar = (state: RightBarState) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const rootStyles = useRootStyles();
  const { slug } = state;
  const { slots, slotProps } = getSlots<RightBarSlots>(state);

  return (
    <slots.root {...slotProps.root}>
      <div className={rootStyles.root}>
        <div style={{ opacity: 0 }}>Love Gnart</div>
        <BlogRightBar />
      </div>
      <div
        style={{
          position: 'fixed',
          bottom: 0,
          paddingTop: '5px',
          paddingBottom: '5px',
          display: 'flex',
          flexWrap: 'wrap',
          flexDirection: 'row',
          backgroundColor: 'var(--bg1)',
          width: '100%',
        }}
      >
        <div style={{ marginRight: '6px' }}>
          <Link style={{ color: 'inherit', fontSize: '11px' }} to="help">
            Help
          </Link>
        </div>
        <div style={{ marginRight: '6px' }}>
          <Link style={{ color: 'inherit', fontSize: '11px' }} to="privacy">
            Privacy
          </Link>
        </div>
        <div style={{ marginRight: '6px' }}>
          <Link style={{ color: 'inherit', fontSize: '11px' }} to="/term">
            Term
          </Link>
        </div>
        <div style={{ marginRight: '6px' }}>
          <Link style={{ color: 'inherit', fontSize: '11px' }} to="/about">
            About
          </Link>
        </div>
        <div style={{ marginRight: '6px' }}>
          <Link style={{ color: 'inherit', fontSize: '11px' }} to="/carrers">
            Carrers
          </Link>
        </div>
      </div>
    </slots.root>
  );
};
