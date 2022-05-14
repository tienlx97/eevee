import React from 'react';

const useInterval = (callback: () => void, delay?: number) => {
  const intervalId = React.useRef<number | null | undefined>(null);
  const savedCallback = React.useRef(callback);

  React.useEffect(() => {
    savedCallback.current = callback;
  });

  React.useEffect(() => {
    const tick = () => savedCallback.current();

    if (typeof delay === 'number') {
      intervalId.current = window.setInterval(tick, delay);

      return () =>
        window.clearInterval(intervalId.current as number | undefined);
    }
  }, [delay]);

  return intervalId.current;
};

export default useInterval;
