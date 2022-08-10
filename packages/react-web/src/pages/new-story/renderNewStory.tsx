import * as React from 'react';
import { getSlots } from '@eevee/react-utilities';
import type { NewStoryState, NewStorySlots } from './NewStory.types';
import { MDXRemote } from '@components/Mdx/remote';
import { ErrorBoundary } from 'react-error-boundary';
import { H1, InlineCode, Paragraph } from '@eevee/react-mdx-comp';
import { TextLink } from '@eevee/react-link';
import { Action } from '@feature/new-story/index';
import { TocBeta } from '@feature/blog/index';

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
  const { editorClassName, isOpenPreview, compiledSource, actionClassName, toc } = state;
  const { slots, slotProps } = getSlots<NewStorySlots>(state);

  // TODO Add additional slots in the appropriate place
  return (
    <slots.root {...slotProps.root}>
      <slots.blurSystem {...slotProps.blurSystem} />
      <slots.middleLayout {...slotProps.middleLayout}>
        <slots.headerWrapper {...slotProps.headerWrapper}>
          <div style={{ flex: 1 }}>
            <slots.documentTitleLabel {...slotProps.documentTitleLabel}>Title Name</slots.documentTitleLabel>
            <slots.documentTitle {...slotProps.documentTitle} />
          </div>
        </slots.headerWrapper>
        <div className={editorClassName}>
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
        <Action className={actionClassName}>
          <slots.hiddenButton {...slotProps.hiddenButton} />
        </Action>
      </slots.middleLayout>
      <slots.rightLayout {...slotProps.rightLayout}>
        <div>
          <TocBeta toc={toc || []} />
        </div>
      </slots.rightLayout>
    </slots.root>
  );
};
