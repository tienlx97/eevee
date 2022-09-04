import * as React from 'react';
import { Block, Item } from './Common';
import { Expanded, SideNote } from '@eevee/react-mdx-comp';

export const Side = () => {
  return (
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
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>{' '}
          <Expanded>
            Maecenas porttitor finibus tellus dapibus vehicula. Aenean pretium, libero at posuere scelerisque, arcu nisi
            consequat tortor, ac euismod sapien enim varius neque.
          </Expanded>
        </SideNote>
      </Item>
    </Block>
  );
};
