import { CSSProperties } from 'react';
import { PostImageState } from './PostImage.types';

function getInt(x: unknown): number | undefined {
  if (typeof x === 'number') {
    return x;
  }
  if (typeof x === 'string') {
    return parseInt(x, 10);
  }
  return undefined;
}

export const usePostImageState = (state: PostImageState): PostImageState => {
  const { includeWhiteBackground, marginBottom, type } = state;
  const { width, height, src } = state.root;

  if (type === 'default') {
    if (!src) {
      throw new Error(
        `Image is missing required "src" property.
        Make sure you pass "src" in props to the \`next/image\` component. Received: ${JSON.stringify({
          width,
          height,
        })}`,
      );
    }

    state.asBaseImg = typeof width !== 'undefined' && typeof height !== 'undefined' ? false : true;

    if (!state.asBaseImg) {
      state.sizerSvgUrl = `data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27${getInt(
        width,
      )}%27%20height=%27${getInt(height)}%27/%3e`;
    }

    const cssVar = {
      '--margin-bottom': typeof marginBottom === 'number' ? `${marginBottom}px` : undefined,
    } as CSSProperties;

    state.wrap.style = {
      background: includeWhiteBackground ? '#fff' : undefined,
      padding: includeWhiteBackground ? '16px' : undefined,
      borderRadius: includeWhiteBackground ? '8px' : undefined,
      ...cssVar,
      ...state.wrap.style,
    };
  }

  return state;
};
