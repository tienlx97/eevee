import * as React from 'react';
import { Block, Item } from './Common';
import { YouTube as YT } from '@eevee/react-mdx-comp';

export const Youtube = () => {
  return (
    <Block heading="YouTube">
      <Item
        from={`
        <Youtube youTubeId="vBKwIDKNFAE" />
        `}
      >
        <YT youTubeId="vBKwIDKNFAE" />
      </Item>
    </Block>
  );
};
