import type { CodeBlockProps } from './CodeBlock.types';
import { renderCodeBlock } from './renderCodeBlock';
import { useCodeBlock } from './useCodeBlock';
import { useCodeBlockStyles } from './useCodeBlockStyles';

/**
 * CodeBlock give people a way to trigger an action.
 */
export const CodeBlock = (props: CodeBlockProps) => {
  const state = useCodeBlock(props);

  useCodeBlockStyles(state);

  return renderCodeBlock(state);
};

CodeBlock.displayName = 'CodeBlock';
