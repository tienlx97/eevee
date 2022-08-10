import * as React from 'react';
import { getNativeElementProps, resolveShorthand } from '@eevee/react-utilities';
import type { NewStoryProps, NewStoryState } from './NewStory.types';
import { useNewStoryState } from './useNewStoryState';
import { Button } from '@eevee/react-button';
import { Editor } from '@feature/new-story/index';
import { MiddleLayout, RightLayout } from '@layout/index';
import { BlurSystem } from '@components/blur-system/index';

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
  const {
    headerWrapper,
    documentTitle,
    documentTitleLabel,
    hiddenButton,
    editor,
    middleLayout,
    rightLayout,
    blurSystem,
    ...rest
  } = props;

  const state: NewStoryState = {
    // TODO add appropriate props/defaults
    components: {
      // TODO add each slot's element type or component
      root: 'article',
      headerWrapper: 'div',
      documentTitleLabel: 'h2',
      documentTitle: 'input',
      hiddenButton: Button,
      editor: Editor,
      middleLayout: MiddleLayout,
      rightLayout: RightLayout,
      blurSystem: BlurSystem,
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
    middleLayout: resolveShorthand(middleLayout, {
      defaultProps: {},
      required: true,
    }),
    rightLayout: resolveShorthand(rightLayout, {
      defaultProps: {},
      required: true,
    }),
    blurSystem: resolveShorthand(blurSystem, {
      defaultProps: {},
      required: true,
    }),
  };

  useNewStoryState(state);

  return state;
};
