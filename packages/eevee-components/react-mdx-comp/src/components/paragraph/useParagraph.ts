import * as React from 'react';
import { ParagraphProps, ParagraphState } from './Paragraph.types';

export const useParagraph = (props: ParagraphProps, ref?: React.Ref<HTMLParagraphElement>): ParagraphState => {
  const { original, ...rest } = props;

  const state: ParagraphState = {
    original,
    components: {
      root: 'p',
    },
    root: {
      ref,
      ...rest,
    },
  };

  return state;
};
