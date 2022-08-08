import * as React from 'react';
import { EditorState } from '@codemirror/state';
// eslint-disable-next-line import/no-extraneous-dependencies
import { EditorView, keymap, highlightActiveLine, MatchDecorator } from '@codemirror/view';
import { defaultKeymap } from '@codemirror/commands';
import { history, historyKeymap } from '@codemirror/history';
import { indentOnInput } from '@codemirror/language';
import { bracketMatching } from '@codemirror/matchbrackets';
import { lineNumbers, highlightActiveLineGutter } from '@codemirror/gutter';
import { defaultHighlightStyle, HighlightStyle, tags } from '@codemirror/highlight';
import { markdown, markdownLanguage } from '@codemirror/lang-markdown';
import { languages } from '@codemirror/language-data';
import { tokens } from '@eevee/react-theme';

export const transparentTheme = EditorView.theme({
  '&': {
    backgroundColor: 'transparent !important',
    padding: '16px 0',
    height: '100%',
  },
  '.cm-scroller': {
    height: '100%',
  },
  '.cm-content': {
    caretColor: tokens.f1,
  },
  '.cm-activeLineGutter, .cm-activeLine': {
    backgroundColor: 'transparent !important',
  },

  '.cm-gutters ': {
    backgroundColor: 'transparent !important',
    border: 'none',
    paddingRight: '4px',
  },
});

const syntaxHighlighting = HighlightStyle.define([
  {
    tag: tags.heading1,
    color: tokens.f8,
  },
  {
    tag: tags.heading2,
    color: tokens.f5,
  },
  {
    tag: tags.heading3,
    color: tokens.f9,
  },
  {
    tag: tags.strong,
    color: 'inherit',
    fontWeight: 600,
  },
  {
    tag: tags.emphasis,
    fontFamily: tokens.fontFamilySpicy,
    letterSpacing: '-0.25px',
    color: 'inherit',
    fontStyle: 'italic',
    fontWeight: 400,
  },
  {
    tag: tags.link,
    color: tokens.f3,
  },
  {
    tag: tags.strikethrough,
    class: 'eve-md-strikethrough',
  },
  {
    tag: tags.quote,
    fontStyle: 'italic',
    fontSize: '1.25rem',
    fontFamily: tokens.fontFamily,
    fontWeight: tokens.fontWeightMedium,
    color: tokens.f10,
    marginTop: '1.5rem',
    marginBottom: '1.5rem',
    padding: '0px 1rem',
  },
]);

interface Props {
  initialDoc: string;
  onChange?: (state: EditorState) => void;
}

export const useCodeMirror = <T extends Element>(props: Props): [React.MutableRefObject<T | null>, EditorView?] => {
  const refContainer = React.useRef<T>(null);
  const [editorView, setEditorView] = React.useState<EditorView>();
  const { onChange } = props;

  React.useEffect(() => {
    if (!refContainer.current) {
      return;
    }

    const startState = EditorState.create({
      doc: props.initialDoc,
      extensions: [
        keymap.of([...defaultKeymap, ...historyKeymap]),
        lineNumbers(),
        highlightActiveLineGutter(),
        history(),
        indentOnInput(),
        bracketMatching(),
        defaultHighlightStyle.fallback,
        highlightActiveLine(),
        markdown({
          base: markdownLanguage,
          codeLanguages: languages,
          addKeymap: true,
        }),
        // oneDark,
        transparentTheme,
        syntaxHighlighting,
        EditorView.lineWrapping,
        EditorView.updateListener.of(update => {
          if (update.changes) {
            onChange && onChange(update.state);
          }
        }),
      ],
    });

    const view = new EditorView({
      state: startState,
      parent: refContainer.current,
    });
    setEditorView(view);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refContainer]);

  return [refContainer, editorView];
};
