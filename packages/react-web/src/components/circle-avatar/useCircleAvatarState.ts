import * as React from 'react';
import type { CircleAvatarState } from './CircleAvatar.types';

export const useCircleAvatarState = (state: CircleAvatarState): CircleAvatarState => {
  const { width, height, url } = state;

  state.img.width = width;
  state.img.height = height;
  state.img.src = url;

  return state;
};
