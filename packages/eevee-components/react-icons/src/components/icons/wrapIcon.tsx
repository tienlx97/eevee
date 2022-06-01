import * as React from 'react';
import { EeveeIconsProps } from './EeveeIcons.types';
import { useIconState } from './useIconState';

export const wrapIcon = (icon: JSX.Element, displayName?: string) => {
  const Component: React.FC<EeveeIconsProps> = props => {
    const state = useIconState(props);
    return React.cloneElement(icon, state);
  };
  Component.displayName = displayName;
  return Component;
};
