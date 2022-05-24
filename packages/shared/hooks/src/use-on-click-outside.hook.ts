/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

export default function useOnClickOutside(
  ref: any,
  handler: (e: Event) => void
) {
  React.useEffect(() => {
    const listener = (event: Event) => {
      // Do nothing if clicking ref's element or descendant elements
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }

      handler(event);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
}
