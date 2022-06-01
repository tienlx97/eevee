import { useGlobals as useStorybookGlobals, Args as StorybookArgs } from '@storybook/api';
import { StoryContext as StorybookContext } from '@storybook/addons';

import { THEME_ID } from './constants';
import { ThemeIds } from './theme';

export interface EeveeStoryContext extends StorybookContext {
  globals: EeveeGlobals;
}

/**
 * Extends the storybook globals object to include fluent specific propoerties
 */
export interface EeveeGlobals extends StorybookArgs {
  [THEME_ID]?: ThemeIds;
}

export function useGlobals(): [EeveeGlobals, (newGlobals: EeveeGlobals) => void] {
  return useStorybookGlobals();
}
