import * as React from 'react';
import { makeStyles, shorthands } from '@griffel/react';
import { ErrorBoundary } from 'react-error-boundary';
import { getSlots } from '@eevee/react-utilities';

import { Toc } from '@components/toc/index';
import { Spinner } from '@components/spinner/Spinner';

import { RightBarSlots, RightBarState } from './RightBar.types';

const useRootStyles = makeStyles({
  root: {
    width: '100%',
    height: '100%',
    display: 'inline-block',
    position: 'relative',
  },

  div2: {
    top: 0,
    position: 'sticky',
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },

  div3: {
    display: 'block',
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: 'auto',
  },
});

/**
 * Render the final JSX of Right
 */
export const renderRightBar = (state: RightBarState) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const rootStyles = useRootStyles();
  const { slots, slotProps } = getSlots<RightBarSlots>(state);

  return (
    <slots.root {...slotProps.root}>
      <div className={rootStyles.root}>
        <div className={rootStyles.div2}>
          <div className={rootStyles.div3}>
            <ErrorBoundary fallback={<div>Soryy</div>}>
              <React.Suspense fallback={<Spinner />}>{<Toc />}</React.Suspense>
            </ErrorBoundary>
          </div>
        </div>
      </div>
    </slots.root>
  );
};
