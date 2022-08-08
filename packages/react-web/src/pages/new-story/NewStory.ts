import * as React from 'react';
import { ForwardRefComponent } from '@eevee/react-utilities';
import type { NewStoryProps } from './NewStory.types';
import { renderNewStory } from './renderNewStory';
import { useNewStory } from './useNewStory';
import { useNewStoryStyles } from './useNewStoryStyles';

/**
 * NewStory give people a way to trigger an action.
 */
export const NewStory: ForwardRefComponent<NewStoryProps> = React.forwardRef(
  (props: NewStoryProps, ref: React.Ref<HTMLDivElement>) => {
    const state = useNewStory(props, ref);

    useNewStoryStyles(state);

    return renderNewStory(state);
  },
  // Casting is required due to lack of distributive union to support unions on @types/react
) as ForwardRefComponent<NewStoryProps>;

NewStory.displayName = 'NewStory';
