import * as React from 'react';
import { Block, Item } from './Common';
import { Li, Ol, Ul } from '@eevee/react-mdx-comp';

export const Lists = () => {
  return (
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
  );
};
