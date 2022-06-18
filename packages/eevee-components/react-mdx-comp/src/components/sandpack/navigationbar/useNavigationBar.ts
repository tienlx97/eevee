import type { NavigationBarProps, NavigationBarState } from './NavigationBar.types';
import { useNavigationBarState } from './useNavigationBarState';
import { resolveShorthand } from '@eevee/react-utilities';

export const useNavigationBar = (props: NavigationBarProps): NavigationBarState => {
  const { as, showDownload, actionButtonWrap, dropdownWrap, ...rest } = props;

  const state: NavigationBarState = {
    showDownload,
    components: {
      root: 'div',
      actionButtonWrap: 'div',
      dropdownWrap: 'div',
    },
    root: {
      as: as || 'div',
      ...rest,
    },
    actionButtonWrap: resolveShorthand(actionButtonWrap, {
      required: true,
    }),
    dropdownWrap: resolveShorthand(dropdownWrap, {
      required: true,
    }),
  };

  useNavigationBarState(state);

  return state;
};
