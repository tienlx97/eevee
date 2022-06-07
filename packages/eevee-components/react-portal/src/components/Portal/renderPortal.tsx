import * as ReactDOM from 'react-dom';
import * as React from 'react';
import type { PortalState } from './Portal.types';

/**
 * Render the final JSX of Portal
 */
export const renderPortal = (state: PortalState): React.ReactElement => {
  return (
    <span hidden ref={state.virtualParentRootRef}>
      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any  */}
      {state.shouldRender && state.mountNode && ReactDOM.createPortal(state.children as any, state.mountNode)}
    </span>
  );
};
