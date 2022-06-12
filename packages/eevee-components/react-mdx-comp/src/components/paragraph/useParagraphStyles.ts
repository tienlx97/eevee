import { ParagraphState } from './Paragraph.types';
import { makeStyles, mergeClasses } from '@griffel/react';
import { breakPoints } from '@eevee/react-theme';

export const paragraphClassname = {
  root: 'eve-Paragraph',
};

const useRootStyles = makeStyles({
  root: {
    fontSize: 'calc(19 / 16 * 1rem)',
    marginBottom: '24px',

    [`@media  ${breakPoints.xs}`]: {
      fontSize: 'calc(18 / 16 * 1rem)',
      marginBottom: '1.5rem',
    },
  },
});

export const useParagraphStyles = (state: ParagraphState): ParagraphState => {
  const { original } = state;

  const rootStyles = useRootStyles();

  state.root.className = mergeClasses(paragraphClassname.root, !original && rootStyles.root, state.root.className);

  return state;
};
