import * as React from 'react';
import { Block, Item } from './Common';
import { CH1, CH2, CH3 } from '@eevee/react-mdx-comp';

export const Heading = () => {
  return (
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
  );
};
