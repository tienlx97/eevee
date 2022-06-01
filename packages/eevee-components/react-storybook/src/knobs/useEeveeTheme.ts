import { darkTheme } from '@eevee/react-theme';
import { select } from '@storybook/addon-knobs';
import type { Theme } from '@eevee/react-theme';

const themeSelectorLabel = 'Theme';

const themeOptions = [
  // { label: 'Light', theme: lightTheme },
  { label: 'Dark', theme: darkTheme },
];

export const useEeveeTheme = (): { label: string; theme: Theme } => {
  // Casting any here due to issue: https://github.com/storybookjs/storybook/issues/9751
  const themeLabels = themeOptions.map(option => ({ label: option.label }));
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { label } = select(themeSelectorLabel, themeLabels, themeLabels[0] as any);

  // Can't trust storybook not to HTML encode theme values
  const { theme } = themeOptions.find(pair => pair.label === label) || { theme: darkTheme };
  return { label, theme };
};
