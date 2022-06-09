import type { LinkState2 } from './Link2.types';

/**
 * The useLinkState_unstable hook processes the Link state.
 * @param state - Link state to mutate.
 */
export const useLinkState2 = (state: LinkState2): LinkState2 => {
  const { href = '/', rel, target } = state.root;

  // Add href and tabIndex=0 for anchor elements.
  // We will add dynamic tag future so check it is `a` tag
  if (state.root.as === 'a') {
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

  return state;
};
