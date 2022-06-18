import * as React from 'react';
import { DownloadButtonState, DownloadButtonSlots } from './DownloadButton.types';
import { getSlots } from '@eevee/react-utilities';
import { IconArrowSmall } from '../icons/index';

export const renderDownloadButton = (state: DownloadButtonState) => {
  const { iconClasses } = state;
  const { slots, slotProps } = getSlots<DownloadButtonSlots>(state);
  return (
    <slots.root {...slotProps.root}>
      <IconArrowSmall displayDirection="down" className={iconClasses} /> Download
    </slots.root>
  );
};
