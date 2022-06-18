import * as React from 'react';
import { Button } from '@eevee/react-button';
import type { FolkButtonProps, FolkButtonState } from './FolkButton.types';
import { useFolkButtonState } from './useFolkButtonState';

export const useFolkButton = (props: FolkButtonProps, ref?: React.Ref<HTMLButtonElement>): FolkButtonState => {
  const { as, ...rest } = props;

  const state: FolkButtonState = {
    components: {
      root: Button,
    },
    root: {
      ref,
      as,
      ...rest,
    },
  };

  useFolkButtonState(state);

  return state;
};
