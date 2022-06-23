import * as React from 'react';
import { getSlots } from '@eevee/react-utilities';
import { MainSlots, MainState } from './Main.types';
import { MDX } from '../../Mdx/index';

/**
 * Render the final JSX of Main
 */
export const renderMain = (state: MainState) => {
  const { flexCenterStyle, postContent } = state;
  const { slots, slotProps } = getSlots<MainSlots>(state);

  return (
    <slots.root {...slotProps.root}>
      <div className={flexCenterStyle}>
        <slots.content {...slotProps.content}>
          {/* This is navigation render */}
          {slotProps.root.children}
          {postContent && <MDX source={postContent} />}
        </slots.content>
      </div>
    </slots.root>
  );
};

/*

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
            alt={`graph showing how the opacity goes from 1 to 0
            over the first second, and then stays at 0, forward in time`}
            includeWhiteBackground={true}
            height={284}
            source="https://www.lag.vn"
            src="https://www.joshwcomeau.com/_next/image/?url=%2Fimages%2Fkeyframe-animations%2Ffill-mode-forwards.svg&w=640&q=75"
            title="Fake title"
            width={561}
          />
          <SideNote type="info" title="It's like semantic versioning">
            <Ul>
              <Li>
                If we set the width to be, the button won't grow with font size, leading to line-wrapping and a taller
                button.
              </Li>
              <Li>If we set the width to be, the button will grow wider along with the font size.</Li>
            </Ul>
            <Paragraph>
              <TextLink href="https://www.youtube.com/watch?v=Z2d9rw9RwyE">The Case for Whimsy</TextLink> I recognize
              that not everyone has experience with software like Photoshop / Figma / Sketch. If the analogy above
              didn't resonate, I have another one that you're more likely to be familiar with: semantic versioning.
            </Paragraph>
            <Expanded>
              <Paragraph>
                I recognize that not everyone has experience with software like Photoshop / Figma / Sketch. If the
                analogy above didn't resonate, I have another one that you're more likely to be familiar with: semantic
                versioning.
              </Paragraph>
            </Expanded>
          </SideNote>
          <SideNote type="warning" title="It's like semantic versioning">
            <Paragraph>
              <TextLink href="https://www.youtube.com/watch?v=Z2d9rw9RwyE">The Case for Whimsy</TextLink>I recognize
              that not everyone has experience with software like Photoshop / Figma / Sketch. If the analogy above
              didn't resonate, I have another one that you're more likely to be familiar with: semantic versioning.
            </Paragraph>
            <Expanded>
              <Paragraph>
                I recognize that not everyone has experience with software like Photoshop / Figma / Sketch. If the
                analogy above didn't resonate, I have another one that you're more likely to be familiar with: semantic
                versioning.
              </Paragraph>
            </Expanded>
          </SideNote>
          <SideNote type="success" title="It's like semantic versioning">
            <Paragraph>
              <TextLink href="https://www.youtube.com/watch?v=Z2d9rw9RwyE">The Case for Whimsy</TextLink>
              <InlineCode>1234</InlineCode> I recognize that not everyone has experience with software like Photoshop /
              Figma / Sketch. If the analogy above didn't resonate, I have another one that you're more likely to be
              familiar with: semantic versioning.
              <InlineCode>1235</InlineCode>
            </Paragraph>
            <Expanded>
              <Paragraph>
                <InlineCode>1235</InlineCode>I recognize that not everyone has experience with software like Photoshop /
                Figma / Sketch. If the analogy above didn't resonate, I have another one that you're more likely to be
                familiar with: semantic versioning.
              </Paragraph>
            </Expanded>
          </SideNote>
          <HorizontalRule maxWidth={200} />
          */
