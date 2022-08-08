import * as React from 'react';
import { useCodeMirror } from '@feature/new-story/index';
import type { EditorState } from './Editor.types';

export const useEditorState = (state: EditorState): EditorState => {
  const { onChange, initialDoc } = state;

  const handleChange = React.useCallback(s => onChange && onChange(s.doc.toString()), [onChange]);

  const [refContainer, editorView] = useCodeMirror<HTMLDivElement>({
    initialDoc: initialDoc ?? '',
    onChange: handleChange,
  });

  state.root.ref = refContainer;

  React.useEffect(() => {
    if (editorView) {
      // Do nothing for now
    }
  }, [editorView]);

  return state;
};
