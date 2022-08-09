/* eslint-disable import/no-extraneous-dependencies */
import * as React from 'react';
import { EditorState } from '@codemirror/state';
import { EditorView, keymap, highlightActiveLine } from '@codemirror/view';
import { defaultKeymap } from '@codemirror/commands';
import { history, historyKeymap } from '@codemirror/history';
import { indentOnInput } from '@codemirror/language';
import { bracketMatching } from '@codemirror/matchbrackets';
import { lineNumbers, gutter } from '@codemirror/gutter';
import { defaultHighlightStyle } from '@codemirror/highlight';
import { markdown, markdownLanguage } from '@codemirror/lang-markdown';
import { languages } from '@codemirror/language-data';
import { syntaxHighlighting, transparentTheme } from '../utils/CustomCodemirror';
import { foldGutter, foldKeymap } from '@codemirror/fold';

// import { vim } from "@replit/codemirror-vim"
// import { CompletionContext, autocompletion } from "@codemirror/autocomplete"
// function myCompletions(context: CompletionContext) {
//   const word = context.matchBefore(/<*^((?! ).)*$/)
//   console.log(word);

//   if (!word || (word.from === word.to && !context.explicit)) { return null }

//   if (word.text[0] === '<') {
//     return {
//       from: word.from + 1,
//       options: [
//         { label: "img", apply: 'PostImage ' },
//         { label: "link", apply: 'TextLink ' },
//         { label: "note", apply: 'SideNote ' },
//         { label: "expanded", apply: 'Expanded ' },
//         { label: "p", apply: 'Paragraph ' },
//       ]
//     }
//   }

//   return null
// }

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
        // autocompletion({
        //   override: [myCompletions]
        // }),
        keymap.of([...defaultKeymap, ...historyKeymap, ...foldKeymap]),
        // add vim key
        // vim(),
        // showline
        lineNumbers(),
        // gutter({ class: "cm-mygutter" }),
        foldGutter(),
        // highlightActiveLineGutter(),
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
