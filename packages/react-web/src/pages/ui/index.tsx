import * as React from 'react';
import { MiddleLayout } from '@layout/index';
import {
  Blockquote,
  CH1,
  CH2,
  CH3,
  CodeBlock,
  Em,
  Expanded,
  HorizontalRule,
  InlineCode,
  Li,
  Ol,
  Paragraph,
  PostImage,
  SideNote,
  SoundCloud,
  Spotify,
  Strike,
  Ul,
  YouTube,
} from '@eevee/react-mdx-comp';
import { makeStyles, shorthands } from '@griffel/react';
import { breakPoints, tokens } from '@eevee/react-theme';
import { TextLink } from '@eevee/react-link';
import { Heading } from '@components/medium/index';

const useStyles = makeStyles({
  verticalDivider: {
    ...shorthands.borderLeft('1px', 'solid', tokens.b2),
    display: 'flex',
    paddingLeft: '8px',

    [`@media ${breakPoints.lgAndLarger}`]: {
      marginLeft: '15px',
    },

    [`@media ${breakPoints.lg}`]: {
      marginLeft: '15px',
    },

    [`@media ${breakPoints.md}`]: {
      marginLeft: '15px',
    },

    [`@media ${breakPoints.sm}`]: {
      marginLeft: '5px',
    },

    [`@media ${breakPoints.xs}`]: {
      marginLeft: '5px',
    },
  },

  'mt-30': {
    marginTop: '30px',
  },
});

type ItemProps = {
  from: React.ReactNode;
};

const Item: React.FC<ItemProps> = ({ from, children }) => {
  const styles = useStyles();

  return (
    <div className={styles['mt-30']}>
      <div>{from}</div>
      <div className={styles.verticalDivider}>{children}</div>
    </div>
  );
};

// eslint-disable-next-line @eevee/max-len
const lorem = `This is paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vehicula pretium dolor vel gravida. Donec feugiat tristique ullamcorper. Maecenas porttitor finibus tellus dapibus vehicula. Aenean pretium, libero at posuere scelerisque, arcu nisi consequat tortor, ac euismod sapien enim varius neque.`;

type BlockProps = {
  heading: string;
};
const Block: React.FC<BlockProps> = ({ heading, children }) => {
  return (
    <div>
      <div style={{ height: '40px' }} />
      <Heading>{heading}</Heading>
      {children}
    </div>
  );
};

export const UI = () => {
  return (
    <MiddleLayout>
      <Block heading="Heading">
        <Item from="# This is h1">
          <CH1>This is h1</CH1>
        </Item>
        <Item from="## This is h2">
          <CH2>This is h2</CH2>
        </Item>
        <Item from="### This is h3">
          <CH3>This is h3</CH3>
        </Item>
      </Block>
      <div style={{ marginTop: '40px' }} />
      <Block heading="Text">
        <Item from={lorem}>
          <Paragraph>{lorem}</Paragraph>
        </Item>
        <Item from="[This is text link](http://mimikyu.netlify.app/)">
          <TextLink href="http://mimikyu.netlify.app/">This is text link</TextLink>
        </Item>
      </Block>
      <Block heading="Emphasis">
        <Item from="*This is italic*">
          <Em>This is italic</Em>
        </Item>
        <Item from="**This is bold**">
          <strong>This is bold</strong>
        </Item>
        <Item from="***This is italic bold***">
          <Em>
            <strong>This is italic bold</strong>
          </Em>
        </Item>
        <Item from="~~This is strike through~~">
          <Strike>This is strike through</Strike>
        </Item>
        <Item from="> This is quote">
          <Blockquote>This is quote</Blockquote>
        </Item>
      </Block>
      <Block heading="Lists">
        <Item
          from={
            <>
              <div>1. This is ol 1</div>
              <div>2. This is ol 2</div>
            </>
          }
        >
          <Ol>
            <Li>This is ol 1</Li>
            <Li>This is ol 2</Li>
          </Ol>
        </Item>
        <Item
          from={
            <>
              <div>1. This is ul 1</div>
              <div>2. This is ul 2</div>
            </>
          }
        >
          <Ul>
            <Li>This is ul 1</Li>
            <Li>This is ul 2</Li>
          </Ul>
        </Item>
      </Block>
      <Block heading="Code block">
        <div style={{ marginTop: '40px' }} />
        <Heading>Block</Heading>
        <Item from="`This is inline code`">
          <InlineCode>This is inline code</InlineCode>
        </Item>
        <Item
          from={
            <>
              <div>```js</div>
              <div>const r = 'This is code block';</div>
              <div>//...</div>
              <div>console.log(r);</div>
              <div>```</div>
            </>
          }
        >
          <CodeBlock>{`const r = 'This is code block';
//...
console.log(r);`}</CodeBlock>
        </Item>
      </Block>
      <Block heading="Divider">
        <Item from="***">
          <HorizontalRule />
        </Item>
      </Block>
      <Block heading="Image">
        <Item
          from={`
        <PostImage
        src="url link"
        width={4096}
        height={2258}
        alt="This is image"
        title="This is image"
        />
        `}
        >
          <PostImage
            src="https://www.joshwcomeau.com/_next/image/?url=%2Fimages%2Fterminal-for-js-devs%2Ft-cd-up.png&w=1920&q=75"
            width={4096}
            height={2258}
            alt="This is image"
            title="This is image title"
          />
        </Item>
      </Block>

      <Block heading="Side Note">
        <Item
          from={
            <>
              <div>{`<SideNote title="Lorem ipsum dolor sit amet" type="Note">`}</div>
              <div>&emsp;{`<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>`}</div>
              <div>&emsp;{`<Expanded>`}</div>
              <div>&emsp;&emsp; Maecenas porttitor finibus tellus dapibus vehicula.</div>
              <div>&emsp;{`</Expanded>`}</div>
              <div>{`</SideNote>`}</div>
            </>
          }
        >
          <SideNote title="Lorem ipsum dolor sit amet" type="Note">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <Expanded>
              Maecenas porttitor finibus tellus dapibus vehicula. Aenean pretium, libero at posuere scelerisque, arcu
              nisi consequat tortor, ac euismod sapien enim varius neque.
            </Expanded>
          </SideNote>
        </Item>
      </Block>

      <Block heading="YouTube">
        <Item
          from={`
        <Youtube youTubeId="vBKwIDKNFAE" />
        `}
        >
          <YouTube youTubeId="vBKwIDKNFAE" />
        </Item>
      </Block>
      <Block heading="Spotify">
        <Item
          from={`
        <Spotify spotifyLink="album/2miKCUKYhXGekJDx4ZsxiI" height="80px" />
        `}
        >
          <Spotify spotifyLink="album/2miKCUKYhXGekJDx4ZsxiI" height="80px" />
        </Item>
      </Block>
      <Block heading="SoundCloud">
        <Item
          from={`
        <SoundCloud soundCloudLink="tracks/188189839" color="e23f88" />`}
        >
          <SoundCloud soundCloudLink="tracks/188189839" color="e23f88" />
        </Item>
      </Block>
      <div style={{ marginTop: '40px' }} />
    </MiddleLayout>
  );
};
