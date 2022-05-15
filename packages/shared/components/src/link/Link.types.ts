import React from 'react';

export type LinkType = 'internal' | 'external' | 'hash';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ILinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {}
