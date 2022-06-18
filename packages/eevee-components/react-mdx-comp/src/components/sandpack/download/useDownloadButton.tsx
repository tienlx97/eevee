import * as React from 'react';
import { Button } from '@eevee/react-button';
import type { DownloadButtonProps, DownloadButtonState } from './DownloadButton.types';
import { useDownloadButtonState } from './useDownloadButtonState';

export const useDownloadButton = (
  props: DownloadButtonProps,
  ref?: React.Ref<HTMLButtonElement>,
): DownloadButtonState => {
  const { as, ...rest } = props;

  const state: DownloadButtonState = {
    components: {
      root: Button,
    },
    root: {
      ref,
      as,
      ...rest,
    },
  };

  useDownloadButtonState(state);

  return state;
};
