import * as React from 'react';
import { Block, Item } from './Common';
import { HorizontalRule } from '@eevee/react-mdx-comp';

export const Divider = () => {
  return (
    <Block heading="Divider">
      <Item from="***">
        <HorizontalRule />
      </Item>
    </Block>
  );
};
