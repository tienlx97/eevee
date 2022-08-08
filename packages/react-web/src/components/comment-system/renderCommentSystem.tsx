import * as React from 'react';
import { getSlots } from '@eevee/react-utilities';
import type { CommentSystemState, CommentSystemSlots } from './CommentSystem.types';
import { ButtonR } from '@eevee/react-button';
import { Community } from '../icons/Community';
import Giscus from '@giscus/react';
import { REPO, REPO_ID, CATEGORY, CATEGORY_ID } from '@constants/index';
/**
 * Render the final JSX of CommentSystem
 */
export const renderCommentSystem = (state: CommentSystemState) => {
  const { slots, slotProps } = getSlots<CommentSystemSlots>(state);

  // TODO Add additional slots in the appropriate place
  return (
    <slots.root {...slotProps.root}>
      <slots.blur {...slotProps.blur} />
      <slots.commentWrapper {...slotProps.commentWrapper}>
        <div className={state.buttonWrapperClassName}>
          <ButtonR icon={<Community />} />
          <h2 className={state.responseTitleClassName}>Response</h2>
          <slots.closeButton {...slotProps.closeButton} />
        </div>
        <Giscus
          repo={REPO}
          repoId={REPO_ID}
          category={CATEGORY}
          categoryId={CATEGORY_ID}
          theme={state.theme}
          mapping="pathname"
          strict="0"
          emitMetadata="1"
          inputPosition="top"
          lang="en"
          loading="lazy"
          reactionsEnabled="0"
        />
      </slots.commentWrapper>
    </slots.root>
  );
};
