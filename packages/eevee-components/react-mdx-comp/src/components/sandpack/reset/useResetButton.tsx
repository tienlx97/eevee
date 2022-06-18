import * as React from 'react';
import { Button } from '@eevee/react-button';
import type { ResetButtonProps, ResetButtonState } from './ResetButton.types';
import { useResetButtonState } from './useResetButtonState';

export const useResetButton = (props: ResetButtonProps, ref?: React.Ref<HTMLButtonElement>): ResetButtonState => {
  const { as, onReset, ...rest } = props;

  const state: ResetButtonState = {
    onReset,
    components: {
      root: Button,
    },
    root: {
      ref,
      as,
      ...rest,
    },
  };

  useResetButtonState(state);

  return state;
};
