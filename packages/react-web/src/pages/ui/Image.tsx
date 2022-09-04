import * as React from 'react';
import { Block, Item } from './Common';
import { PostImage } from '@eevee/react-mdx-comp';

export const Image = () => {
  return (
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
        <div>
          <PostImage
            src="https://www.joshwcomeau.com/_next/image/?url=%2Fimages%2Fterminal-for-js-devs%2Ft-cd-up.png&w=1920&q=75"
            width={4096}
            height={2258}
            alt="This is image"
            title="This is image title"
          />
        </div>
      </Item>
    </Block>
  );
};
