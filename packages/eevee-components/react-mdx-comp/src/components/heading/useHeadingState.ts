import { HeadingState } from './Heading.types';

export const useHeadingState = (state: HeadingState): HeadingState => {
  const { type } = state;

  if (type === 'section-title') {
    state.root.as = 'h1';
  } else if (type === 'small-title') {
    state.root.as = 'h1';
  } else if (type === 'medium-title') {
    state.root.as = 'h1';
  } else if (type === 'large-title') {
    state.root.as = 'h1';
  } else if (type === 'major-heading') {
    state.root.as = 'h2';
  } else if (type === 'normal-heading') {
    state.root.as = 'h3';
  } else if (type === 'minor-heading') {
    state.root.as = 'h4';
  } else {
    throw new Error('Unrecognized Heading type: ' + type);
  }

  return state;
};
