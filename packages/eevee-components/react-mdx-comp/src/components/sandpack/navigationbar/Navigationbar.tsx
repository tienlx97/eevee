import { NavigationBarProps } from './NavigationBar.types';
import { renderNavigationBar } from './renderNavigationBar';
import { useNavigationBar } from './useNavigationBar';
import { useNavigationBarStyles } from './useNavigationBarStyles';

export const NavigationBar = (props: NavigationBarProps) => {
  const state = useNavigationBar(props);

  useNavigationBarStyles(state);

  return renderNavigationBar(state);
};

NavigationBar.displayName = 'NavigationBar';
