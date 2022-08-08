import type { CodeBlockProps, CodeBlockState } from './CodeBlock.types';
import { useCodeBlockState } from './useCodeBlockState';

/**
 * Create the state required to render CodeBlock.
 *
 * The returned state can be modified with hooks such as useCodeBlockStyles_unstable,
 * before being passed to renderCodeBlock_unstable.
 *
 * @param props - props from this instance of CodeBlock
 * @param ref - reference to root HTMLElement of CodeBlock
 */
export const useCodeBlock = (props: CodeBlockProps): CodeBlockState => {
  const { children, className = 'language-js', fileName, highlight, language, noMargin = false } = props;
  const state: CodeBlockState = {
    children,
    fileName,
    language,
    highlight,
    noMargin,
    className,
  };

  useCodeBlockState(state);

  return state;
};
