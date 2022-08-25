import * as React from 'react';
import { getNativeElementProps, resolveShorthand } from '@eevee/react-utilities';
import type { BlogPageProps, BlogPageState } from './BlogPage.types';
import { useBlogPageState } from './useBlogPageState';
import { MiddleLayout, RightLayout } from '@layout/index';

/**
 * Create the state required to render Blog.
 *
 * The returned state can be modified with hooks such as useBlogStyles,
 * before being passed to renderBlog.
 *
 * @param props - props from this instance of Blog
 * @param ref - reference to root HTMLElement of Blog
 */
export const useBlogPage = (props: BlogPageProps, ref: React.Ref<HTMLElement>): BlogPageState => {
  const { middleLayout, rightLayout, ...rest } = props;
  const state: BlogPageState = {
    // TODO add appropriate props/defaults
    components: {
      // TODO add each slot's element type or component
      root: 'div',
      middleLayout: MiddleLayout,
      rightLayout: RightLayout,
    },
    // TODO add appropriate slots, for example:
    // mySlot: resolveShorthand(props.mySlot),
    root: getNativeElementProps('div', {
      ref,
      ...rest,
    }),
    middleLayout: resolveShorthand(middleLayout, {
      defaultProps: {},
      required: true,
    }),
    rightLayout: resolveShorthand(rightLayout, {
      defaultProps: {},
      required: true,
    }),
  };

  useBlogPageState(state);

  return state;
};
