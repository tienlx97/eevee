import { tokens } from '@eevee/react-theme';

export const syntaxTheme = {
  plain: {
    color: tokens.syntaxTxt,
    backgroundColor: 'transparent',
    padding: 0,
    fontFamily: tokens.fontFamilyMono,
  },
  styles: [
    {
      types: ['prolog', 'comment', 'doctype', 'cdata'],
      style: {
        color: tokens.syntaxComment,
      },
    },
    {
      types: ['property', 'tag', 'deleted', 'constant', 'symbol'],
      style: { color: tokens.syntaxProp },
    },
    {
      types: ['boolean', 'number'],
      style: { color: tokens.syntaxBool },
    },
    {
      types: ['attr-name', 'tag'],
      style: { fontWeight: tokens.fontWeightMedium },
    },
    {
      types: ['string', 'attr-value'],
      style: {
        color: tokens.syntaxVal,
      },
    },
    {
      types: ['operator', 'entity', 'url', 'string', 'variable', 'language-css', 'keyword'],
      style: {
        color: tokens.syntaxStr,
      },
    },
    {
      types: ['selector', 'attr-name', 'char', 'builtin', 'insert', 'script-punctuation'],
      style: {
        color: tokens.syntaxName,
      },
    },
    {
      types: ['deleted'],
      style: {
        color: tokens.syntaxDel,
      },
    },
    {
      types: ['italic'],
      style: {
        fontStyle: 'italic',
      },
    },
    {
      types: ['important', 'bold'],
      style: {
        fontWeight: tokens.fontWeightSemibold,
      },
    },
    {
      types: ['regex', 'important'],
      style: {
        color: tokens.syntaxRegex,
      },
    },
    {
      types: ['atrule', 'function'],
      style: {
        color: tokens.syntaxFn,
      },
    },
    {
      types: ['symbol'],
      style: {
        opacity: '0.7',
      },
    },
    {
      types: ['string'],
      style: {
        fontWeight: tokens.fontWeightMedium,
      },
    },
  ],
};
