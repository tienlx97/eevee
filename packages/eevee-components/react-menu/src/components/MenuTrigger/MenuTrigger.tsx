import * as React from 'react';
import { useMenuTrigger_unstable } from './useMenuTrigger';
import { renderMenuTrigger_unstable } from './renderMenuTrigger';
import type { MenuTriggerProps } from './MenuTrigger.types';
import type { EeveeTriggerComponent } from '@eevee/react-utilities';

/**
 * Wraps a trigger element as an only child
 * and adds the necessary event handling to open a popup menu
 */
export const MenuTrigger: React.FC<MenuTriggerProps> & EeveeTriggerComponent = props => {
  const state = useMenuTrigger_unstable(props);

  return renderMenuTrigger_unstable(state);
};

MenuTrigger.displayName = 'MenuTrigger';
MenuTrigger.isEeveeTriggerComponent = true;
