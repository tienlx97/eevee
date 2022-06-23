import { renderToggleTheme } from './renderToggleTheme';
import { useToggleTheme } from './useToggleTheme';

export const ToggleTheme = () => {
  const state = useToggleTheme();

  return renderToggleTheme(state);
};
