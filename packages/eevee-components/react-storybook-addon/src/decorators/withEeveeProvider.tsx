import * as React from 'react';

import { themes, defaultTheme, EeveeProvider } from '../theme';
import { THEME_ID } from '../constants';
import { EeveeGlobals, EeveeStoryContext } from '../hooks';

import { Theme } from '@eevee/react-theme';

const getActiveEeveeTheme = (globals: EeveeGlobals) => {
  const selectedThemeId = globals[THEME_ID];
  const { theme } = themes.find(value => value.id === selectedThemeId) ?? defaultTheme;

  return { theme };
};

export const withEeveeProvider = (StoryFn: () => JSX.Element, context: EeveeStoryContext) => {
  const { theme } = getActiveEeveeTheme(context.globals);

  return (
    <EeveeProvider theme={theme}>
      <EeveeExampleContainer theme={theme}>{StoryFn()}</EeveeExampleContainer>
    </EeveeProvider>
  );
};

const EeveeExampleContainer: React.FC<{ theme: Theme }> = props => {
  const { theme } = props;

  const backgroundColor = theme.colorBackground1;
  return <div style={{ padding: '48px 24px', backgroundColor: backgroundColor }}>{props.children}</div>;
};
