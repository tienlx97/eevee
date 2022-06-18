import { renderFileDropdown } from './renderFileDropdown';
import { useFileDropdownState } from './useFileDropdownState';
import { useFileDropdownStyles } from './useFileDropdownStyles';

export const FileDropdown = () => {
  const state = useFileDropdownState();

  useFileDropdownStyles(state);

  return renderFileDropdown(state);
};

FileDropdown.displayName = 'FileDropdown';
