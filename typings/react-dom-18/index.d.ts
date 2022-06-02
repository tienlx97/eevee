import React = require('react');

export interface RootOptions {
  /**
   * Prefix for `useId`.
   */
  identifierPrefix?: string;
  onRecoverableError?: (error: unknown) => void;
}

/**
 * Replaces `ReactDOM.render` when the `.render` method is called and enables Concurrent Mode.
 *
 * @see https://reactjs.org/docs/concurrent-mode-reference.html#createroot
 */
export function createRoot(container: Element | DocumentFragment, options?: RootOptions): Root;

export interface Root {
  render(children: React.ReactNode): void;
  unmount(): void;
}
