import * as React from 'react';
import { getNativeElementProps } from '@eevee/react-utilities';
import type { BlogProps, BlogState } from './Blog.types';

/**
 * Create the state required to render Blog.
 *
 * The returned state can be modified with hooks such as useBlogStyles_unstable,
 * before being passed to renderBlog_unstable.
 *
 * @param props - props from this instance of Blog
 * @param ref - reference to root HTMLElement of Blog
 */
export const useBlog = (props: BlogProps, ref: React.Ref<HTMLElement>): BlogState => {
  return {
    // TODO add appropriate props/defaults
    components: {
      // TODO add each slot's element type or component
      root: 'div',
    },
    // TODO add appropriate slots, for example:
    // mySlot: resolveShorthand(props.mySlot),
    root: getNativeElementProps('div', {
      ref,
      ...props,
    }),
  };
};
