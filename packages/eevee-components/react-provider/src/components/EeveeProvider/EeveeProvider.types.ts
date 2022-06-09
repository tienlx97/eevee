import * as React from 'react';
import type { ProviderContextValue } from '@eevee/react-shared-contexts';
import type { PartialTheme } from '@eevee/react-theme';

export type EeveeProviderProps = {
  /** Sets the direction of text & generated styles. */
  dir?: 'ltr' | 'rtl';

  /** Provides the document, can be undefined during SSR render. */
  targetDocument?: Document;

  lightTheme: PartialTheme;
  darkTheme: PartialTheme;

  className?: string;
};

export type EeveeProviderState = Pick<EeveeProviderProps, 'targetDocument' | 'className'> &
  Required<Pick<EeveeProviderProps, 'dir' | 'lightTheme' | 'darkTheme'>> & {};

export type EeveeProviderContextValues = Pick<EeveeProviderState, 'lightTheme' | 'darkTheme' | 'className'> & {
  textDirection: 'ltr' | 'rtl';
  provider: ProviderContextValue;
  children?: React.ReactNode;
};
