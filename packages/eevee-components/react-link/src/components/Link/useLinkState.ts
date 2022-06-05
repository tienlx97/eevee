import * as React from 'react';
import type { LinkState } from './Link.types';

/**
 * The useLinkState_unstable hook processes the Link state.
 * @param state - Link state to mutate.
 */
export const useLinkState = (state: LinkState): LinkState => {
  const { disabled, disabledFocusable } = state;
  const { onClick, onKeyDown, href = '/', rel, role, target } = state.root;

  // Add href and tabIndex=0 for anchor elements.
  // We will add dynamic tag future so check it is `a` tag
  if (state.root.as === 'a') {
    state.root.href = disabled ? undefined : state.root.href;
    state.root.tabIndex = disabled && !disabledFocusable ? undefined : 0;

    // Add role="link" for disabled and disabledFocusable links.
    if (disabled || disabledFocusable) {
      state.root.role = role || 'link';
    }

    // with diff link type we have another render
    if (href.match(/^#/)) {
      state.linkType = 'hash';
    } else if (href.match(/(^http|^mailto)/i) || target === '_blank') {
      state.linkType = 'external';
    } else {
      state.linkType = 'internal';
    }

    // By default, external links should open in a new tab.
    // This is overrideable though.
    if (typeof target === 'undefined') {
      state.root.target = state.linkType === 'external' ? '_blank' : undefined;
    }

    state.root.rel = state.root.target === '_blank' ? 'noopener noreferrer' : rel;
  }

  // Disallow click event when component is disabled and eat events when disabledFocusable is set to true.
  state.root.onClick = (ev: React.MouseEvent<HTMLAnchorElement>) => {
    if (disabled || disabledFocusable) {
      ev.preventDefault();
    } else {
      onClick?.(ev);
    }
  };

  // Disallow keydown event when component is disabled and eat events when disabledFocusable is set to true.
  state.root.onKeyDown = (ev: React.KeyboardEvent<HTMLAnchorElement & HTMLButtonElement>) => {
    if ((disabled || disabledFocusable) && (ev.key === 'Enter' || ev.key === 'Space')) {
      ev.preventDefault();
      ev.stopPropagation();
    } else {
      onKeyDown?.(ev);
    }
  };

  // Set the aria-disabled and disabled props correctly.
  state.disabled = disabled || disabledFocusable;
  state.root['aria-disabled'] = disabled || disabledFocusable || undefined;

  return state;
};
