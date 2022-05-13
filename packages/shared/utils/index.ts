/* eslint-disable @typescript-eslint/no-explicit-any */
export const debounce =
  (callback: any, wait: any, timeoutId: any) =>
  (...args: any[]) => {
    window.clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      // eslint-disable-next-line prefer-spread
      callback.apply(null, args);
    }, wait);
  };

export const throttle = (func: any, limit: any) => {
  let lastFunc: any;
  let lastRan: any;
  return function (...args: any[]) {
    if (!lastRan) {
      // eslint-disable-next-line prefer-spread
      func.apply(null, args);
      lastRan = Date.now();
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(function () {
        if (Date.now() - lastRan >= limit) {
          // eslint-disable-next-line prefer-spread
          func.apply(null, args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  };
};

/**
 * Combines multiple className strings into one.
 */
export const joinClasses = (className: string, ...args: any[]): string => {
  let newClassName = className || '';
  const argLength = args.length;

  if (argLength) {
    for (let index = 0; index < argLength; index++) {
      const nextClass = args[index];
      if (nextClass) {
        newClassName = (newClassName ? newClassName + ' ' : '') + nextClass;
      }
    }
  }
  return newClassName;
};

export function moveCursorWithinInput(
  input: HTMLTextAreaElement,
  position: number
) {
  if (input.setSelectionRange) {
    input.focus();
    input.setSelectionRange(position, position);
  }
  // else if (input.createTextRange) {
  //   var range = input.createTextRange();
  //   range.collapse(true);
  //   range.moveEnd('character', position);
  //   range.moveStart('character', position);
  //   range.select();
  // }
}

export const normalize = (
  number: number,
  currentScaleMin: number,
  currentScaleMax: number,
  newScaleMin = 0,
  newScaleMax = 1
) => {
  // FIrst, normalize the value between 0 and 1.
  const standardNormalization =
    (number - currentScaleMin) / (currentScaleMax - currentScaleMin);

  // Next, transpose that value to our desired scale.
  return (newScaleMax - newScaleMin) * standardNormalization + newScaleMin;
};

export const roundToNearest = (number: number, step: number) =>
  Math.round(number / step) * step;

export const range = (start: number, end?: number, step = 1) => {
  const output = [];
  if (typeof end === 'undefined') {
    end = start;
    start = 0;
  }
  for (let i = start; i < end; i += step) {
    output.push(i);
  }
  return output;
};
