import * as React from 'react';
import type { ProviderContextValue, ThemeClassNameContextValue, ThemeContextValue } from '@eevee/react-shared-contexts';
import type { PartialTheme } from '@eevee/react-theme';

export type EeveeProviderProps = {
  /** Sets the direction of text & generated styles. */
  dir?: 'ltr' | 'rtl';

  /** Provides the document, can be undefined during SSR render. */
  targetDocument?: Document;

  theme?: PartialTheme;

  className?: string;
};

export type EeveeProviderState = Pick<EeveeProviderProps, 'targetDocument' | 'className'> &
  Required<Pick<EeveeProviderProps, 'dir'>> & {
    theme: ThemeContextValue;
    themeClassName: string;
  };

export type EeveeProviderContextValues = Pick<EeveeProviderState, 'theme' | 'className'> & {
  textDirection: 'ltr' | 'rtl';
  provider: ProviderContextValue;
  themeClassName: ThemeClassNameContextValue;
  children?: React.ReactNode;
};
