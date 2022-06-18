import { FolkButtonState } from './FolkButton.types';

export const useFolkButtonState = (state: FolkButtonState): FolkButtonState => {
  state.root.title = 'Open in CodeSandbox';
  state.root.type = 'button';

  return state;
};
