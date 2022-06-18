import { useSandpack } from '@codesandbox/sandpack-react';
import { FileDropdownState } from './FileDropdown.types';

const getFileName = (filePath: string): string => {
  const lastIndexOfSlash = filePath.lastIndexOf('/');
  return filePath.slice(lastIndexOfSlash + 1);
};

export const useFileDropdownState = (): FileDropdownState => {
  const { sandpack } = useSandpack();
  const { openPaths, setActiveFile, activePath } = sandpack;

  const state: FileDropdownState = {
    activePath,
    getFileName,
    openPaths,
    setActiveFile,
  };

  return state;
};
