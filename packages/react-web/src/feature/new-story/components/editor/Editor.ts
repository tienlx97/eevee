import * as React from 'react';
import { ForwardRefComponent } from '@eevee/react-utilities';
import type { EditorProps } from './Editor.types';
import { renderEditor } from './renderEditor';
import { useEditor } from './useEditor';
import { useEditorStyles } from './useEditorStyles';

/**
 * Editor give people a way to trigger an action.
 */
export const Editor: ForwardRefComponent<EditorProps> = React.forwardRef(
  (props: EditorProps, ref: React.Ref<HTMLDivElement>) => {
    const state = useEditor(props, ref);

    useEditorStyles(state);

    return renderEditor(state);
  },
  // Casting is required due to lack of distributive union to support unions on @types/react
) as ForwardRefComponent<EditorProps>;

Editor.displayName = 'Editor';
