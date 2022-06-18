import * as React from 'react';
import { UnstyledOpenInCodeSandboxButton } from '@codesandbox/sandpack-react';
import { FolkButtonState, FolkButtonSlots } from './FolkButton.types';
import { getSlots } from '@eevee/react-utilities';
import { IconNewPage } from '../icons/index';

export const renderFolkButton = (state: FolkButtonState) => {
  const { iconClasses, spanClasses } = state;
  const { slots, slotProps } = getSlots<FolkButtonSlots>(state);
  return (
    <UnstyledOpenInCodeSandboxButton>
      <slots.root {...slotProps.root}>
        <IconNewPage className={iconClasses} width=".8em" height=".8em" />
        <span className={spanClasses}>Fork</span>
      </slots.root>
    </UnstyledOpenInCodeSandboxButton>
  );
};
