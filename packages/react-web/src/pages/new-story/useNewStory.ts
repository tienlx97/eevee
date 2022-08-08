import * as React from 'react';
import { getNativeElementProps, resolveShorthand } from '@eevee/react-utilities';
import type { NewStoryProps, NewStoryState } from './NewStory.types';
import { useNewStoryState } from './useNewStoryState';
import { ButtonR } from '@eevee/react-button';
import { Editor } from '@feature/new-story/index';

/**
 * Create the state required to render NewStory.
 *
 * The returned state can be modified with hooks such as useNewStoryStyles_unstable,
 * before being passed to renderNewStory_unstable.
 *
 * @param props - props from this instance of NewStory
 * @param ref - reference to root HTMLElement of NewStory
 */
export const useNewStory = (props: NewStoryProps, ref: React.Ref<HTMLElement>): NewStoryState => {
  const { headerWrapper, documentTitle, documentTitleLabel, hiddenButton, editor, ...rest } = props;

  const state: NewStoryState = {
    // TODO add appropriate props/defaults
    components: {
      // TODO add each slot's element type or component
      root: 'article',
      headerWrapper: 'div',
      documentTitleLabel: 'h2',
      documentTitle: 'input',
      hiddenButton: ButtonR,
      editor: Editor,
    },
    // TODO add appropriate slots, for example:
    // mySlot: resolveShorthand(props.mySlot),
    root: getNativeElementProps('article', {
      ref,
      ...rest,
    }),
    headerWrapper: resolveShorthand(headerWrapper, {
      defaultProps: {
        as: 'div',
      },
      required: true,
    }),
    documentTitleLabel: resolveShorthand(documentTitleLabel, {
      defaultProps: {
        as: 'h2',
      },
      required: true,
    }),
    documentTitle: resolveShorthand(documentTitle, {
      defaultProps: {
        as: 'input',
      },
      required: true,
    }),
    hiddenButton: resolveShorthand(hiddenButton, {
      defaultProps: {},
      required: true,
    }),
    editor: resolveShorthand(editor, {
      defaultProps: {},
      required: true,
    }),
  };

  useNewStoryState(state);

  return state;
};
