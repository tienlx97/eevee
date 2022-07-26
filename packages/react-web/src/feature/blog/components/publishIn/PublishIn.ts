import * as React from 'react';
import { ForwardRefComponent } from '@eevee/react-utilities';
import type { PublishInProps } from './PublishIn.types';
import { renderPublishIn } from './renderPublishIn';
import { usePublishIn } from './usePublishIn';
import { usePublishInStyles } from './usePublishInStyles';

/**
 * PublishIn give people a way to trigger an action.
 */
export const PublishIn: ForwardRefComponent<PublishInProps> = React.forwardRef(
  (props: PublishInProps, ref: React.Ref<HTMLDivElement>) => {
    const state = usePublishIn(props, ref);

    usePublishInStyles(state);

    return renderPublishIn(state);
  },
  // Casting is required due to lack of distributive union to support unions on @types/react
) as ForwardRefComponent<PublishInProps>;

PublishIn.displayName = 'PublishIn';
