/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

import { throttle } from '@vaporeon/utils';

const useOnScroll = (callback: any, throttleBy = 500) => {
  // prettier-ignore
  const handleScroll = React.useCallback(
    throttle(callback, throttleBy),
    [callback, throttleBy]
  );

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return null;
};

export default useOnScroll;
