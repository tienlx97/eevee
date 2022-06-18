import { FolkButtonState } from './FolkButton.types';
import { makeStyles, mergeClasses } from '@griffel/react';
import { breakPoints } from '@eevee/react-theme';

export const folkButtonClassname = {
  root: 'eve-FolkButton',
};

const useIconStyles = makeStyles({
  root: {
    position: 'relative',
    top: '0.1px',
    marginRight: '0.25rem',
    marginLeft: '0.25rem',
    marginBottom: '.125rem',
    display: 'inline',
  },
});

const useSpanStyles = makeStyles({
  root: {
    display: 'none',
    [`@media ${breakPoints.smAndLarger}`]: {
      display: 'block',
    },
  },
});

export const useFolkButtonStyles = (state: FolkButtonState): FolkButtonState => {
  const spanStyles = useSpanStyles();
  const iconStyles = useIconStyles();

  state.root.className = mergeClasses(folkButtonClassname.root, folkButtonClassname.root, state.root.className);
  state.iconClasses = iconStyles.root;
  state.spanClasses = spanStyles.root;

  return state;
};
