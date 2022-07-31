import { tokens } from '@eevee/react-theme';

export const getStylesForDepth = (depth: number, isActiveHeading: boolean) => {
  const base = {
    color: isActiveHeading ? tokens.f3 : undefined,
    opacity: isActiveHeading ? 1 : undefined,
  };

  switch (depth) {
    case 1:
      return {
        ...base,
        // marginTop: 10,
        '--font-size-px': 15,
        paddingLeft: 5,
      };

    case 2:
      return {
        ...base,
        marginTop: 3,
        '--font-size-px': 14,
        paddingLeft: 20,
      };

    case 3:
      return {
        ...base,
        marginTop: 3,
        '--font-size-px': 12,
        paddingLeft: 35,
      };

    default:
      throw new Error('Unsupported heading size: ' + depth);
  }
};

export const throttle = (func: (...args: any) => void, limit: number) => {
  let lastFunc: any;
  let lastRan: number | undefined;
  return function (...args: any[]) {
    if (!lastRan) {
      func(args);
      lastRan = Date.now();
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(() => {
        if (lastRan && Date.now() - lastRan >= limit) {
          func(args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  };
};
