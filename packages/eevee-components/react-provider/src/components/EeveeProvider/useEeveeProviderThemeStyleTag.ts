import * as React from 'react';
import { useId, usePrevious } from '@eevee/react-utilities';
import type { EeveeProviderState } from './EeveeProvider.types';
import { eeveeProviderClassNames } from './useEeveeProviderStyles';
/**
 * Writes a theme as css variables in a style tag on the provided targetDocument as a rule applied to a CSS class
 *
 * @returns CSS class to apply the rule
 */
export const useFluentProviderThemeStyleTag = (options: Pick<EeveeProviderState, 'theme' | 'targetDocument'>) => {
  const { targetDocument, theme } = options;

  const styleTagId = useId(eeveeProviderClassNames.root);
  const styleTag = React.useMemo(() => {
    if (!targetDocument) {
      return null;
    }

    const tag = targetDocument.createElement('style');
    tag.setAttribute('id', styleTagId);
    targetDocument.head.appendChild(tag);
    return tag;
  }, [styleTagId, targetDocument]);

  const cssRule = React.useMemo(() => {
    // add -- before cssKey
    const cssVarsAsString = theme
      ? // very tricky
        (Object.keys(theme) as (keyof typeof theme)[]).reduce((cssVarRule, cssVar) => {
          cssVarRule += `--${cssVar}: ${theme[cssVar]}; `;
          return cssVarRule;
        }, '')
      : '';

    // result: .eevee-provider1 { --css-var: '#fff' }
    return `.${styleTagId} { ${cssVarsAsString} }`;
  }, [theme, styleTagId]);
  const previousCssRule = usePrevious(cssRule);

  if (styleTag && previousCssRule !== cssRule) {
    const sheet = styleTag.sheet;

    if (sheet) {
      if (sheet.cssRules.length > 0) {
        sheet.deleteRule(0);
      }
      sheet.insertRule(cssRule, 0);
    } else if (process.env.NODE_ENV !== 'production') {
      // eslint-disable-next-line no-console
      console.error('EeveeProvider: No sheet available on styleTag, styles will not be inserted into DOM.');
    }
  }

  // Removes the style tag from the targetDocument on unmount or change
  React.useEffect(() => {
    return () => {
      if (styleTag) {
        styleTag.remove();
      }
    };
  }, [styleTag]);

  return styleTagId;
};
