import * as React from 'react';
import { getSlots } from '@eevee/react-utilities';
import { MainSlots, MainState } from './Main.types';

import { Paragraph } from '@eevee/react-mdx-comp';
import { LinkR } from '@eevee/react-link';
import { SearchFill } from '../icons/index';

/**
 * Render the final JSX of Main
 */
export const renderMain = (state: MainState) => {
  const { flexCenterStyle } = state;
  const { slots, slotProps } = getSlots<MainSlots>(state);

  return (
    <slots.root {...slotProps.root}>
      <div className={flexCenterStyle}>
        <slots.content {...slotProps.content}>
          {slotProps.root.children}
          <Paragraph>
            For example, did you notice that as you started scrolling on this page, the Bézier curves that border the
            green title hero thingy started flattening? Keep your eye on the swoopy curves just above the post text as
            you scroll through the top of the document. Notice how they become flat as they approach the header at the
            top of the viewport? <LinkR href="https://www.youtube.com/watch?v=Z2d9rw9RwyE">The Case for Whimsy</LinkR>
          </Paragraph>
        </slots.content>
      </div>
    </slots.root>
  );
};
