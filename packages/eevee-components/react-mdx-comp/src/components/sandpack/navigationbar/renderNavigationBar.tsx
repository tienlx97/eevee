import * as React from 'react';
import { NavigationBarState, NavigationBarSlots } from './NavigationBar.types';
import { getSlots } from '@eevee/react-utilities';
import { FileTabs } from '@codesandbox/sandpack-react';
import { FolkButton } from '../folk/index';
import { ResetButton } from '../reset/index';
import { DownloadButton } from '../download/index';
import { FileDropdown } from '../filesdropdown/index';

export const renderNavigationBar = (state: NavigationBarState) => {
  const { dropdownActive, handleReset, showDownload } = state;
  const { slots, slotProps } = getSlots<NavigationBarSlots>(state);
  return (
    <slots.root {...slotProps.root}>
      <slots.dropdownWrap {...slotProps.dropdownWrap}>
        {dropdownActive ? <FileDropdown /> : <FileTabs />}
      </slots.dropdownWrap>
      <div className="px-3 flex items-center justify-end grow text-right" translate="yes">
        {showDownload && <DownloadButton />}
        <ResetButton onReset={handleReset} />
        <FolkButton />
      </div>
    </slots.root>
  );
};
