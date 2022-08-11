import * as React from 'react';
import { getSlots } from '@eevee/react-utilities';
import type { NewStoryState, NewStorySlots } from './NewStory.types';
import { MDXRemote } from '@components/Mdx/remote';
import { ErrorBoundary } from 'react-error-boundary';
import { H1, InlineCode, Paragraph } from '@eevee/react-mdx-comp';
import { TextLink } from '@eevee/react-link';
import { Action } from '@feature/new-story/index';
import { TocBeta } from '@feature/blog/index';
import { InputGroup } from '@components/input-group/index';
import { TagInput } from '@components/tag-input/index';

const OurFallbackComponent = ({ error, componentStack, resetErrorBoundary }: any) => {
  const matches = error.message.match(/\`(.*?)\`/);
  return (
    <div>
      <H1>w0w</H1>
      <Paragraph>
        You get error at: <InlineCode>{matches ? `<${matches[1]} />` : error.message}</InlineCode>
      </Paragraph>

      <Paragraph>
        <TextLink href="#">Back to the editor plz!</TextLink>
      </Paragraph>
    </div>
  );
};

/**
 * Render the final JSX of NewStory
 */
export const renderNewStory = (state: NewStoryState) => {
  const { styles, isOpenPreview, compiledSource, titleRef, setTags, publishAction } = state;
  const { slots, slotProps } = getSlots<NewStorySlots>(state);

  // TODO Add additional slots in the appropriate place
  return (
    <slots.root {...slotProps.root}>
      {/* <slots.blurSystem {...slotProps.blurSystem} /> */}
      <slots.middleLayout {...slotProps.middleLayout}>
        <InputGroup ref={titleRef} labelChildren={<>Title</>} className={styles[0]} placeholder="Title for story" />
        <InputGroup
          type="tag"
          labelChildren={
            <>
              Topics
              <span> (separate with spaces)</span>
            </>
          }
          className={styles[1]}
          placeholder="Enter some topic"
        >
          <TagInput
            // eslint-disable-next-line react/jsx-no-bind
            onChange={e => setTags && setTags(e)}
          />
        </InputGroup>
        <div className={styles[2]}>
          <slots.editor style={{ display: !isOpenPreview ? 'block' : 'none' }} {...slotProps.editor} />
          {isOpenPreview && (
            <div
              style={{
                padding: '10px 16px',
              }}
            >
              {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
              {/* @ts-ignore */}
              <ErrorBoundary FallbackComponent={OurFallbackComponent}>
                <MDXRemote compiledSource={compiledSource!} />
              </ErrorBoundary>
            </div>
          )}
        </div>
        <Action onPublichAction={publishAction} className={styles[3]}>
          <slots.hiddenButton {...slotProps.hiddenButton} />
        </Action>
      </slots.middleLayout>
    </slots.root>
  );
};
