import * as React from 'react';
import { Button } from '@eevee/react-button';
import type { SideNoteProps, SideNoteState } from './SideNote.types';
import { resolveShorthand } from '@eevee/react-utilities';
import { useSideNoteState } from './useSideNoteState';

export const useSideNote = (props: SideNoteProps, ref?: React.Ref<HTMLElement>): SideNoteState => {
  const { as, content, type = 'Tip', title, showMore, ...rest } = props;

  const state: SideNoteState = {
    title,
    type,
    components: {
      root: 'aside',
      content: 'div',
      showMore: Button,
    },
    root: {
      ref,
      as: as || 'aside',
      ...rest,
    },
    content: resolveShorthand(content, {
      defaultProps: {
        as: 'div',
      },
      required: true,
    }),
    showMore: resolveShorthand(showMore, {
      required: true,
    }),
  };

  useSideNoteState(state);

  return state;
};
