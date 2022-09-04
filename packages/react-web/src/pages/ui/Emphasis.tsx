import * as React from 'react';
import { Block, Item } from './Common';
import { Blockquote, Em, Strike } from '@eevee/react-mdx-comp';

export const Emphasis = () => {
  return (
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
  );
};
