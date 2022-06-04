import * as React from 'react';
import { useEevee } from '@eevee/react-shared-contexts';
import { EeveeProviderProps, EeveeProviderState } from './EeveeProvider.types';
import { useTheme } from './useTheme';
import { mergeThemes } from './mergeThemes';
import { useFluentProviderThemeStyleTag } from './useEeveeProviderThemeStyleTag';

export const useEeveeProvider = (props: EeveeProviderProps): EeveeProviderState => {
  const parentContext = useEevee();
  const parentTheme = useTheme();

  /**
   * TODO: add merge functions to "dir" merge,
   * nesting providers with the same "dir" should not add additional attributes to DOM
   * see https://github.com/microsoft/fluentui/blob/0dc74a19f3aa5a058224c20505016fbdb84db172/packages/fluentui/react-northstar/src/utils/mergeProviderContexts.ts#L89-L93
   */
  const { dir = parentContext.dir, targetDocument = parentContext.targetDocument, theme, className } = props;
  const mergedTheme = mergeThemes(parentTheme, theme);

  React.useEffect(() => {
    if (process.env.NODE_ENV !== 'production' && mergedTheme === undefined) {
      // eslint-disable-next-line no-console
      console.warn(`
      EeveeProvider: your "theme" is not defined !
      =============================================
      Make sure your root EeveeProvider has set a theme or you're setting the theme in your child EeveeProvider.
      `);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    dir,
    targetDocument,
    theme: mergedTheme,
    themeClassName: useFluentProviderThemeStyleTag({ theme: mergedTheme, targetDocument }),
    className,
  };
};
