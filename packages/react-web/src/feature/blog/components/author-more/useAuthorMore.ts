import * as React from 'react';
import { getNativeElementProps, resolveShorthand } from '@eevee/react-utilities';
import type { AuthorMoreProps, AuthorMoreState } from './AuthorMore.types';
import { Dot } from '@components/dot/index';

/**
 * Create the state required to render AuthorMore.
 *
 * The returned state can be modified with hooks such as useAuthorMoreStyles_unstable,
 * before being passed to renderAuthorMore_unstable.
 *
 * @param props - props from this instance of AuthorMore
 * @param ref - reference to root HTMLElement of AuthorMore
 */
export const useAuthorMore = (props: AuthorMoreProps, ref: React.Ref<HTMLElement>): AuthorMoreState => {
  const { authorName, authorNickName, date, readTime, dot, ...rest } = props;

  const state: AuthorMoreState = {
    // TODO add appropriate props/defaults
    components: {
      // TODO add each slot's element type or component
      root: 'div',
      dot: Dot,
    },
    authorName,
    authorNickName,
    date,
    readTime,
    // TODO add appropriate slots, for example:
    // mySlot: resolveShorthand(props.mySlot),
    root: getNativeElementProps('div', {
      ref,
      ...rest,
    }),
    dot: resolveShorthand(dot, {
      defaultProps: {},
      required: true,
    }),
  };

  return state;
};
