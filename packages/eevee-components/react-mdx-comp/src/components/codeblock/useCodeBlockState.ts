import type { CodeBlockState, InlineHiglight } from './CodeBlock.types';
import { mergeClasses } from '@griffel/react';
import { useInlineHiglightStyles } from './useInlineHighlightStyles';
import { getHighlightLines, getInlineHighlights } from './utils';

export const useCodeBlockState = (state: CodeBlockState): CodeBlockState => {
  const { language, highlight, children } = state;
  const inlineHighlightStyles = useInlineHiglightStyles();

  const getDecoratedLineInfo = () => {
    if (!highlight) {
      return [];
    }

    const linesToHighlight = getHighlightLines(highlight);
    const highlightedLineConfig = linesToHighlight.map(line => {
      return {
        className: 'bg-github-highlight',
        line,
      };
    });

    const inlineHighlightLines = getInlineHighlights(children, highlight);
    const inlineHighlightConfig = inlineHighlightLines.map((line: InlineHiglight) => ({
      ...line,
      elementAttributes: { 'data-step': `${line.step}` },
      className: mergeClasses(
        inlineHighlightStyles.root,
        line.step === 1 && inlineHighlightStyles.bgBlue,
        line.step === 2 && inlineHighlightStyles.bgYellow,
        line.step === 3 && inlineHighlightStyles.bgGreen,
        line.step === 4 && inlineHighlightStyles.bgPurple,
      ),
    }));

    return highlightedLineConfig.concat(inlineHighlightConfig);
  };

  // e.g. "language-js"
  state.filename = '/index.' + language;
  state.decorators = getDecoratedLineInfo();

  return state;
};
