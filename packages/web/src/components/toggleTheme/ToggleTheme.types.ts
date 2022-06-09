import type { EMode } from '@eevee/react-shared-contexts';

export type ToggleThemeState = {
  colorMode?: EMode;
  setColorMode?: (value: EMode) => void;
};
