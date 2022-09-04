import * as React from 'react';
import { Block, Item } from './Common';
import { CH1, CH2, CH3, Paragraph } from '@eevee/react-mdx-comp';
import { TextLink } from '@eevee/react-link';

// eslint-disable-next-line @eevee/max-len
const lorem = `This is paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vehicula pretium dolor vel gravida. Donec feugiat tristique ullamcorper. Maecenas porttitor finibus tellus dapibus vehicula. Aenean pretium, libero at posuere scelerisque, arcu nisi consequat tortor, ac euismod sapien enim varius neque.`;

export const Text = () => {
  return (
    <Block heading="Text">
      <Item from={lorem}>
        <Paragraph>{lorem}</Paragraph>
      </Item>
      <Item from="[This is text link](http://mimikyu.netlify.app/)">
        <TextLink href="http://mimikyu.netlify.app/">This is text link</TextLink>
      </Item>
    </Block>
  );
};
