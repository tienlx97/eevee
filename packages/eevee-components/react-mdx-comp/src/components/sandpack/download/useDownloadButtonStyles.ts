import { DownloadButtonState } from './DownloadButton.types';
import { makeStyles } from '@griffel/react';

export const downloadButtonClassname = {
  root: 'eve-DownloadButton',
};

const useIconStyles = makeStyles({
  root: {
    marginRight: '.25rem',
    marginTop: '.25rem',
    marginBottom: '.125rem',
    display: 'inline',
  },
});

export const useDownloadButtonStyles = (state: DownloadButtonState): DownloadButtonState => {
  const iconStyles = useIconStyles();

  state.root.className = downloadButtonClassname.root;
  state.iconClasses = iconStyles.root;

  return state;
};
