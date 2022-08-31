import * as React from 'react';
import { getNativeElementProps, resolveShorthand } from '@eevee/react-utilities';
import type { AuthorMoreProps, AuthorMoreState } from './AuthorMore.types';
import { Dot } from '@components/dot/index';
import { Button } from '@eevee/react-button';
import { S } from '../../../../../../eevee-components/react-keyboard/src/keyCodes';

/**
 * Create the state required to render AuthorMore.
 *
 * The returned state can be modified with hooks such as useAuthorMoreStyles,
 * before being passed to renderAuthorMore.
 *
 * @param props - props from this instance of AuthorMore
 * @param ref - reference to root HTMLElement of AuthorMore
 */
export const useAuthorMore = (props: AuthorMoreProps, ref: React.Ref<HTMLElement>): AuthorMoreState => {
  const { authorName, authorNickName, date, readTime, hideFollow, follow, dot, ...rest } = props;

  const state: AuthorMoreState = {
    // TODO add appropriate props/defaults
    components: {
      // TODO add each slot's element type or component
      root: 'div',
      dot: Dot,
      follow: Button,
    },
    authorName,
    authorNickName,
    hideFollow,
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
    follow: resolveShorthand(follow, {
      defaultProps: {},
      required: true,
    }),
  };

  state.follow.appearance = 'unstyled';
  state.follow.shape = 'circular';
  state.follow.children = 'Follow';

  return state;
};
