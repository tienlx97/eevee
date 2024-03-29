import * as React from 'react';
import { usePortalMountNode } from './usePortalMountNode';
import { setVirtualParent } from '../../virtualParent/index';
import type { PortalProps, PortalState } from './Portal.types';

/**
 * Create the state required to render Portal.
 *
 * The returned state can be modified with hooks such as usePortalStyles, before being passed to renderPortal.
 *
 * @param props - props from this instance of Portal
 */
export const usePortal = (props: PortalProps): PortalState => {
  const { children, mountNode } = props;

  const virtualParentRootRef = React.useRef<HTMLSpanElement>(null);
  const fallbackMountNode = usePortalMountNode({ disabled: !!mountNode });

  const state: PortalState = {
    children,
    mountNode: mountNode ?? fallbackMountNode,
    virtualParentRootRef,
  };

  React.useEffect(() => {
    if (state.virtualParentRootRef.current && state.mountNode) {
      setVirtualParent(state.mountNode, state.virtualParentRootRef.current);
    }
  }, [state.virtualParentRootRef, state.mountNode]);

  return state;
};
