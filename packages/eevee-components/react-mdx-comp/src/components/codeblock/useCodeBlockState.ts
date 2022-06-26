import type { CodeBlockState, InlineHiglight } from './CodeBlock.types';
import { mergeClasses } from '@griffel/react';
import { useInlineHiglightStyles } from './useInlineHighlightStyles';

export const useCodeBlockState = (state: CodeBlockState): CodeBlockState => {
  const { metastring, children } = state;
  const inlineHighlightStyles = useInlineHiglightStyles();

  const getDecoratedLineInfo = () => {
    if (!metastring) {
      return [];
    }

    const linesToHighlight = getHighlightLines(metastring.highlight);
    const highlightedLineConfig = linesToHighlight.map(line => {
      return {
        className: 'bg-github-highlight',
        line,
      };
    });

    const inlineHighlightLines = getInlineHighlights(children, metastring.highlight);
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
  const language = metastring?.language;
  state.filename = '/index.' + language;
  state.decorators = getDecoratedLineInfo();

  return state;
};

/**
 *
 * @param highlight string provided after the language in a markdown block
 * @returns array of lines to highlight
 * @example
 * ```js {1-3,7} [[1, 1, 20, 33], [2, 4, 4, 8]] App.js active
 * ...
 * ```
 *
 * -> The metastring is `{1-3,7} [[1, 1, 20, 33], [2, 4, 4, 8]] App.js active`
 */
function getHighlightLines(highlight?: string): number[] {
  if (!highlight) {
    return [];
  }
  const HIGHLIGHT_REGEX = /{([\d,-]+)}/;
  const parsedMetastring = HIGHLIGHT_REGEX.exec(highlight);
  if (!parsedMetastring) {
    return [];
  }
  return parsePart(parsedMetastring[1]);
}

/**
 *
 * @param highlight string provided after the language in a markdown block
 * @returns InlineHighlight[]
 * @example
 * ```js {1-3,7} [[1, 1, 'count'], [2, 4, 'setCount']] App.js active
 * ...
 * ```
 *
 * -> The metastring is `{1-3,7} [[1, 1, 'count', [2, 4, 'setCount']] App.js active`
 */
function getInlineHighlights(code: string, highlight?: string) {
  if (!highlight) {
    return [];
  }

  const INLINE_HIGHT_REGEX = /(\[\[.*\]\])/;
  const parsedMetastring = INLINE_HIGHT_REGEX.exec(highlight);
  if (!parsedMetastring) {
    return [];
  }

  const lines = code.split('\n');
  const encodedHiglights = JSON.parse(parsedMetastring[1].replace(/'/g, '"'));
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
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

/**
 * @param {string} string2Parse    The string to parse
 * @returns {Array<number>}  Returns an energetic array.
 */
function parsePart(string2Parse: string): number[] {
  const result: number[] = [];
  let matches: RegExpMatchArray | null;

  for (const str of string2Parse.split(',').map(ele => ele.trim())) {
    // just a number
    if (/^-?\d+$/.test(str)) {
      result.push(parseInt(str, 10));
    } else if ((matches = str.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/))) {
      // 1-5 or 1..5 (equivalent) or 1...5 (doesn't include 5)
      // eslint-disable-next-line prefer-const
      let [_, lhs, sep, rhs] = matches;

      if (lhs && rhs) {
        const _lhs = parseInt(lhs, 10);
        let _rhs = parseInt(rhs, 10);
        const incr = _lhs < _rhs ? 1 : -1;

        // Make it inclusive by moving the right 'stop-point' away by one.
        if (sep === '-' || sep === '..' || sep === '\u2025') {
          _rhs += incr;
        }

        for (let i = _lhs; i !== _rhs; i += incr) {
          result.push(i);
        }
      }
    }
  }

  return result;
}
