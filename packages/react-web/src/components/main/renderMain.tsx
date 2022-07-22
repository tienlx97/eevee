import * as React from 'react';
import { getSlots } from '@eevee/react-utilities';
import { MainSlots, MainState } from './Main.types';
import { Link } from 'react-router-dom';

/**
 * Render the final JSX of Main
 */
export const renderMain = (state: MainState) => {
  const { flexCenterStyle } = state;
  const { slots, slotProps } = getSlots<MainSlots>(state);

  return (
    <slots.root {...slotProps.root}>
      <div className={flexCenterStyle}>
        <slots.content {...slotProps.content}>
          <div>
            <Link to="blog/hello-word">Another blog</Link>
          </div>
          <div>
            <Link to="/blog/how-to-use-async-functions-in-useeffect">Another blog 2</Link>
          </div>
          <div>
            <Link to="blog/hello">Fail</Link>
          </div>
          {/* This is navigation render */}
          {slotProps.root.children}
        </slots.content>
      </div>
    </slots.root>
  );
};
