/* eslint-disable @typescript-eslint/no-shadow */
import { useEffect, useRef } from 'react';

export function useInterval(callback: (...args: any[]) => void, delay?: number | null, ...args: any[]) {
  const savedCallback = useRef<(...args: any[]) => void>();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      if (savedCallback.current) {
        savedCallback.current(...args);
      }
    }
    if (delay !== null && delay !== undefined) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [delay]);
}
