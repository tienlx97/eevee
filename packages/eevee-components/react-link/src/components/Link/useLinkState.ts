import * as React from 'react';
import type { LinkState } from './Link.types';
import { useLocation } from 'react-router-dom';
/**
 * The useLinkState_unstable hook processes the Link state.
 * @param state - Link state to mutate.
 */
export const useLinkState = (state: LinkState): LinkState => {
  const loc = useLocation();
  const [isCurrentLoc, setCurrentLoc] = React.useState<boolean>(false);
  const { href = '/', onClick, rel, target } = state.root;

  React.useEffect(() => {
    setCurrentLoc(location.pathname.replace(/\/$/, '') === href.replace(/\/$/, ''));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loc]);

  // Add href and tabIndex=0 for anchor elements.
  // We will add dynamic tag future so check it is `a` tag
  // if (state.root.as === 'a') {
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

  state.root.onClick = ev => {
    setCurrentLoc(true);
    if (onClick) {
      onClick(ev);
    }
  };

  state.root.role = 'link';
  state.root['aria-label'] = state.root['aria-label'] || 'Link';

  state.isCurrentLoc = isCurrentLoc;

  return state;
};
