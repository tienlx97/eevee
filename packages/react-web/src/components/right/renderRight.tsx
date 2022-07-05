import * as React from 'react';
import { getSlots } from '@eevee/react-utilities';
import { RightSlots, RightState } from './Right.types';
import { makeStyles, shorthands } from '@griffel/react';
import { Toc } from '../toc/index';

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
export const renderRight = (state: RightState) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const rootStyles = useRootStyles();
  const { slots, slotProps } = getSlots<RightSlots>(state);

  return (
    <slots.root {...slotProps.root}>
      <div className={rootStyles.root}>
        <div className={rootStyles.div2}>
          <div className={rootStyles.div3}>
            <Toc />
          </div>
        </div>
      </div>
    </slots.root>
  );
};
