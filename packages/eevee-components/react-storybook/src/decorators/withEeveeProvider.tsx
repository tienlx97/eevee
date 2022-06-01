import { makeDecorator } from '@storybook/addons';
import { EeveeProvider } from '@eevee/react-provider';
import * as React from 'react';

import { useEeveeTheme } from '../knobs/useEeveeTheme';

const ProviderWrapper: React.FunctionComponent = props => {
  const { theme } = useEeveeTheme();

  return <EeveeProvider theme={theme}>{props.children}</EeveeProvider>;
};

export const withEeveeProvider = makeDecorator({
  name: 'withEeveeProvider',
  parameterName: 'theme',
  skipIfNoParametersOrOptions: false,
  wrapper: (storyFn, context) => {
    return <ProviderWrapper> {storyFn(context)} </ProviderWrapper>;
  },
});
