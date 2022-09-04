import * as React from 'react';
import { Block, Item } from './Common';
import { Spotify as SF } from '@eevee/react-mdx-comp';

export const Spotify = () => {
  return (
    <Block heading="Spotify">
      <Item
        from={`
        <Spotify spotifyLink="album/2miKCUKYhXGekJDx4ZsxiI" height="80px" />
        `}
      >
        <SF spotifyLink="album/2miKCUKYhXGekJDx4ZsxiI" height="80px" />
      </Item>
    </Block>
  );
};
