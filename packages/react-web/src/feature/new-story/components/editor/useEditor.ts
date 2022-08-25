import * as React from 'react';
import { getNativeElementProps } from '@eevee/react-utilities';
import type { EditorProps, EditorState } from './Editor.types';
import { useEditorState } from './useEditorState';

/**
 * Create the state required to render Editor.
 *
 * The returned state can be modified with hooks such as useEditorStyles,
 * before being passed to renderEditor.
 *
 * @param props - props from this instance of Editor
 * @param ref - reference to root HTMLElement of Editor
 */
export const useEditor = (props: EditorProps, ref: React.Ref<HTMLElement>): EditorState => {
  const { initialDoc, onChange, getEditorView } = props;
  const state: EditorState = {
    // TODO add appropriate props/defaults
    components: {
      // TODO add each slot's element type or component
      root: 'div',
    },
    initialDoc,
    onChange,
    getEditorView,
    // TODO add appropriate slots, for example:
    // mySlot: resolveShorthand(props.mySlot),
    root: getNativeElementProps('div', {
      ref,
      ...props,
    }),
  };

  useEditorState(state);

  return state;
};
