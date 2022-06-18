import { FileDropdownState } from './FileDropdown.types';
import { makeStyles, shorthands } from '@griffel/react';
import { tokens } from '@eevee/react-theme';

export const FileDropdownClassname = {
  root: 'eve-FileDropdown',
};

const useIconWrapStyles = makeStyles({
  root: {
    marginLeft: '.5rem',
  },
});

const useOptionWrapStyles = makeStyles({
  root: {
    position: 'absolute',
    marginTop: '.125rem',
    paddingLeft: '.5rem',
    paddingRight: '.5rem',
    left: '0',
    right: '0',
    marginLeft: '0',
    marginRight: '0',
    borderBottomRightRadius: '.5rem',
    borderBottomLeftRadius: '.5rem',
    ...shorthands.borderRadius('.125rem'),
    backgroundColor: tokens.background2,
    ...shorthands.borderColor(tokens.border1),
  },
});

const useFileWrapStyles = makeStyles({
  root: {
    height: '100%',
    paddingTop: '.5rem',
    paddingBottom: '.5rem',
    paddingLeft: '.25rem',
    paddingRight: '.25rem',
    marginTop: '1px',
    marginBottom: '-1px',
    display: 'flex',
    borderBottomWidth: '2px',
    color: tokens.foreground3,
    ...shorthands.borderColor(tokens.foreground3),
    alignItems: 'center',
    lineHeight: 1.25,
    fontSize: '15px',
    ...shorthands.overflow('hidden'),
    whiteSpace: 'nowrap',
  },
});

const useOptionItemStyles = makeStyles({
  root: {
    fontSize: '15px',
    marginLeft: '.25rem',
    marginRight: '.25rem',
    marginTop: '1rem',
    marginBottom: '1rem',
    cursor: 'pointer',
  },
  activePath: {
    color: tokens.foreground3,
  },
});

export const useFileDropdownStyles = (state: FileDropdownState): FileDropdownState => {
  const iconWrapStyles = useIconWrapStyles();
  const fileWrapStyles = useFileWrapStyles();
  const optionWrapStyles = useOptionWrapStyles();
  const optionItemStyles = useOptionItemStyles();

  state.fileWrapClasses = fileWrapStyles.root;
  state.iconWrapClasses = iconWrapStyles.root;
  state.optionWrapClasses = optionWrapStyles.root;
  state.optionItemClasses = optionItemStyles.root;

  return state;
};
