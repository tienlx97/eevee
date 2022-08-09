import * as React from 'react';
import { getSlots } from '@eevee/react-utilities';
import type { NewStoryState, NewStorySlots } from './NewStory.types';
import { MDXRemote } from '@components/Mdx/remote';
import { Editor } from '@feature/new-story/index';

/**
 * Render the final JSX of NewStory
 */
export const renderNewStory = (state: NewStoryState) => {
  const { editorAndTabListWrapperClassName, editorClassName, editorWrapperClassName, isOpenPreview, compiledSource } =
    state;
  const { slots, slotProps } = getSlots<NewStorySlots>(state);

  // TODO Add additional slots in the appropriate place
  return (
    <slots.root {...slotProps.root}>
      <slots.headerWrapper {...slotProps.headerWrapper}>
        <div style={{ flex: 1 }}>
          <slots.documentTitleLabel {...slotProps.documentTitleLabel}>Title Name</slots.documentTitleLabel>
          <slots.documentTitle {...slotProps.documentTitle} />
        </div>
        <slots.hiddenButton {...slotProps.hiddenButton} />
      </slots.headerWrapper>
      <div className={editorClassName}>
        <slots.editor style={{ display: !isOpenPreview ? 'block' : 'none' }} {...slotProps.editor} />
        {isOpenPreview && (
          <div
            style={{
              padding: '10px 16px',
            }}
          >
            <MDXRemote compiledSource={compiledSource!} />
          </div>
        )}
      </div>
    </slots.root>
  );
};
