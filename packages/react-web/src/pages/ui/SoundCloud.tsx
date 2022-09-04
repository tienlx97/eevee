import * as React from 'react';
import { Block, Item } from './Common';
import { SoundCloud as SC } from '@eevee/react-mdx-comp';

export const SoundCloud = () => {
  return (
    <Block heading="SoundCloud">
      <Item
        from={`
    <SoundCloud soundCloudLink="tracks/188189839" color="e23f88" />`}
      >
        <SC soundCloudLink="tracks/188189839" color="e23f88" />
      </Item>
    </Block>
  );
};
