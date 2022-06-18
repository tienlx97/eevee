import { ResetButtonState } from './ResetButton.types';

export const useResetButtonState = (state: ResetButtonState): ResetButtonState => {
  const { onReset } = state;

  state.root.title = 'Reset Sandbox';
  state.root.type = 'button';
  state.root.onClick = onReset;

  return state;
};
