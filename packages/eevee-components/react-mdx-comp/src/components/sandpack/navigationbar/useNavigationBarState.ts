import * as React from 'react';
import { NavigationBarState } from './NavigationBar.types';
import { useSandpack, useSandpackNavigation } from '@codesandbox/sandpack-react';

export const useNavigationBarState = (state: NavigationBarState): NavigationBarState => {
  const { sandpack } = useSandpack();
  const [dropdownActive, setDropdownActive] = React.useState(false);
  const { openPaths, clients } = sandpack;
  const clientId = Object.keys(clients)[0];
  const { refresh } = useSandpackNavigation(clientId);

  state.dropdownActive = dropdownActive;

  const resizeHandler = React.useCallback(() => {
    const width = window.innerWidth || document.documentElement.clientWidth;
    if (!dropdownActive && width < 640) {
      setDropdownActive(true);
    }
    if (dropdownActive && width >= 640) {
      setDropdownActive(false);
    }
  }, [dropdownActive]);

  React.useEffect(() => {
    if (openPaths.length > 1) {
      resizeHandler();
      window.addEventListener('resize', resizeHandler);
      return () => {
        window.removeEventListener('resize', resizeHandler);
      };
    }
    return;
  }, [openPaths.length, resizeHandler]);

  state.handleReset = () => {
    sandpack.resetAllFiles();
    refresh();
  };

  return state;
};
