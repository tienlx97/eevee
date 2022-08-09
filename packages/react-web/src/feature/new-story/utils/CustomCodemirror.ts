import { tokens } from '@eevee/react-theme';
// eslint-disable-next-line import/no-extraneous-dependencies
import { EditorView } from '@codemirror/view';
import { HighlightStyle, tags } from '@codemirror/highlight';

export const syntaxHighlighting = HighlightStyle.define([
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

export const transparentTheme = EditorView.theme({
  '&': {
    // backgroundColor: 'transparent !important',
    backgroundColor: tokens.bg6,
    padding: '16px 0',
    height: '100%',
    overflow: 'hidden',
    width: '100%',
  },
  '.cm-scroller': {
    height: '100%',
    width: '100%',
    overflowY: 'scroll',
    paddingRight: '17px',
    boxSizing: 'content-box',
  },
  '.cm-content': {
    caretColor: tokens.f1,
  },
  '.cm-activeLineGutter, .cm-activeLine': {
    backgroundColor: `${tokens.syntaxHighlight} !important`,
    position: 'relative',
    borderRadius: '2px',
  },
  '.cm-activeLineGutter, .cm-activeLine:after': {
    content: '""',
    backgroundColor: tokens.syntaxBool,
    right: '1px',
    top: 0,
    position: 'absolute',
    height: '100%',
    width: '2px',
  },
  '.cm-gutters': {
    backgroundColor: 'transparent !important',
    color: tokens.f9,
    border: 'none',
  },
  '.cm-line': {
    paddingLeft: '4px !important',
  },
  '.cm-foldPlaceholder': {
    backgroundColor: tokens.f1,
    border: 'none',
    color: tokens.bg1,
  },
  '.cm-tooltip': {
    backgroundColor: 'transparent !important',
    borderColor: tokens.b2,
  },
});
