import * as React from 'react';
import { FileDropdownState } from './FileDropdown.types';
import { Listbox } from '@headlessui/react';
import { IconChevron } from '../icons/index';
import { tokens } from '@eevee/react-theme';

export const renderFileDropdown = (state: FileDropdownState) => {
  const {
    activePath,
    getFileName,
    openPaths,
    setActiveFile,
    fileWrapClasses,
    iconWrapClasses,
    optionItemClasses,
    optionWrapClasses,
  } = state;

  return (
    <Listbox value={activePath} onChange={setActiveFile}>
      <Listbox.Button>
        {({ open }) => (
          <span className={fileWrapClasses} style={{ maxWidth: '160px' }}>
            {getFileName(activePath)}
            <span className={iconWrapClasses}>
              <IconChevron displayDirection={open ? 'up' : 'down'} />
            </span>
          </span>
        )}
      </Listbox.Button>
      <Listbox.Options className={optionWrapClasses}>
        {openPaths.map((filePath: string) => (
          <Listbox.Option
            key={filePath}
            value={filePath}
            className={optionItemClasses}
            style={{
              color: filePath === activePath ? tokens.foreground3 : undefined,
            }}
          >
            {getFileName(filePath)}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  );
};
