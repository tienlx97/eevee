import * as React from 'react';
import { getSlots } from '@eevee/react-utilities';
import { MainSlots, MainState } from './Main.types';

import { Paragraph, Blockquote, Em, H1, H2, InlineCode, Li, Ol, Strike, Ul, PostImage } from '@eevee/react-mdx-comp';
import { TextLink } from '@eevee/react-link';

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
            top of the viewport?{' '}
            <TextLink href="https://www.youtube.com/watch?v=Z2d9rw9RwyE">The Case for Whimsy</TextLink>{' '}
            <Em>really careful</Em> when setting fixed widths and heights. <Strike>This is strike through</Strike>
            <InlineCode>transition</InlineCode>
          </Paragraph>
          <Blockquote>"This is blockquote"</Blockquote>
          <Ol>
            <Li>
              We'll look at what the accessibility considerations are, and how each unit can affect these
              considerations.
            </Li>
            <Li>We'll build a mental model we can use to help us decide which unit to use in </Li>
            <Li>I'll share my favourite tips and tricks for converting between units.</Li>
          </Ol>
          <Ul>
            <Li>
              If we set the width to be, the button won't grow with font size, leading to line-wrapping and a taller
              button.
            </Li>
            <Li>If we set the width to be, the button will grow wider along with the font size.</Li>
          </Ul>
          <H1>Unit summaries</H1>
          <H2>Pixels</H2>
          <PostImage
            includeWhiteBackground={true}
            alt={`graph showing how the opacity goes from 1 to 0
            over the first second, and then stays at 0, forward in time`}
            src="https://www.joshwcomeau.com/_next/image/?url=%2Fimages%2Fkeyframe-animations%2Ffill-mode-forwards.svg&w=640&q=75"
            width={561}
            height={284}
          />
        </slots.content>
      </div>
    </slots.root>
  );
};
