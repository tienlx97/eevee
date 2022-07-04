import * as React from 'react';
import { getSlots } from '@eevee/react-utilities';
import type { BlogState, BlogSlots } from './Blog.types';
import { MDX } from '../../Mdx/index';
import { PageOrPageNotFound } from '../common/index';

import { Ol, Li } from '@eevee/react-mdx-comp';

/**
 * Render the final JSX of Blog
 */
export const renderBlog = (state: BlogState) => {
  const { post, postNotFound } = state;
  const { slots, slotProps } = getSlots<BlogSlots>(state);

  // TODO Add additional slots in the appropriate place

  return (
    <PageOrPageNotFound pageNotFound={postNotFound}>
      <slots.root {...slotProps.root}>{post && <MDX source={post.code} />}</slots.root>
      <Ol>
        <Li>First, it transforms these React elements into a big MJML string. For example".</Li>
        <Li>Next, it takes that MJML document and produces the email-safe HTML</Li>
      </Ol>
    </PageOrPageNotFound>
  );
};
