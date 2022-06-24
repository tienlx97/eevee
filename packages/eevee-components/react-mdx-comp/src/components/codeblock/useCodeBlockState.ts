/* eslint-disable @typescript-eslint/no-explicit-any */
import type { CodeBlockState, InlineHiglight } from './CodeBlock.types';
import rangeParser from 'parse-numeric-range';
import { mergeClasses } from '@griffel/react';

export const useCodeBlockState = (state: CodeBlockState): CodeBlockState => {
  const { className, metastring, children } = state;

  const getDecoratedLineInfo = () => {
    if (!metastring) {
      return [];
    }

    const linesToHighlight = getHighlightLines(metastring);
    const highlightedLineConfig = linesToHighlight.map(line => {
      return {
        className: 'bg-github-highlight dark:bg-opacity-10',
        line,
      };
    });

    const inlineHighlightLines = getInlineHighlights(metastring, children);
    const inlineHighlightConfig = inlineHighlightLines.map((line: InlineHiglight) => ({
      ...line,
      elementAttributes: { 'data-step': `${line.step}` },
      className: mergeClasses(
        state.inlineHiglightClasses,
        line.step === 1 && state.bgBlue,
        line.step === 2 && state.bgYellow,
        line.step === 3 && state.bgGreen,
        line.step === 4 && state.bgPurple,
      ),
    }));

    return highlightedLineConfig.concat(inlineHighlightConfig);
  };

  // e.g. "language-js"
  const language = className?.substring(9);
  state.filename = '/index.' + language;
  state.decorators = getDecoratedLineInfo();

  return state;
};

/**
 *
 * @param metastring string provided after the language in a markdown block
 * @returns array of lines to highlight
 * @example
 * ```js {1-3,7} [[1, 1, 20, 33], [2, 4, 4, 8]] App.js active
 * ...
 * ```
 *
 * -> The metastring is `{1-3,7} [[1, 1, 20, 33], [2, 4, 4, 8]] App.js active`
 */
function getHighlightLines(metastring: string): number[] {
  const HIGHLIGHT_REGEX = /{([\d,-]+)}/;
  const parsedMetastring = HIGHLIGHT_REGEX.exec(metastring);
  if (!parsedMetastring) {
    return [];
  }
  return rangeParser(parsedMetastring[1]);
}

/**
 *
 * @param metastring string provided after the language in a markdown block
 * @returns InlineHighlight[]
 * @example
 * ```js {1-3,7} [[1, 1, 'count'], [2, 4, 'setCount']] App.js active
 * ...
 * ```
 *
 * -> The metastring is `{1-3,7} [[1, 1, 'count', [2, 4, 'setCount']] App.js active`
 */
function getInlineHighlights(metastring: string, code: string) {
  const INLINE_HIGHT_REGEX = /(\[\[.*\]\])/;
  const parsedMetastring = INLINE_HIGHT_REGEX.exec(metastring);
  if (!parsedMetastring) {
    return [];
  }

  const lines = code.split('\n');
  const encodedHiglights = JSON.parse(parsedMetastring[1]);
  return encodedHiglights.map(([step, lineNo, substr, fromIndex]: any[]) => {
    const line = lines[lineNo - 1];
    let index = line.indexOf(substr);
    const lastIndex = line.lastIndexOf(substr);
    if (index !== lastIndex) {
      if (fromIndex === undefined) {
        throw Error("Found '" + substr + "' twice. Specify fromIndex as the fourth value in the tuple.");
      }
      index = line.indexOf(substr, fromIndex);
    }
    if (index === -1) {
      throw Error("Could not find: '" + substr + "'");
    }
    return {
      step,
      line: lineNo,
      startColumn: index,
      endColumn: index + substr.length,
    };
  });
}
