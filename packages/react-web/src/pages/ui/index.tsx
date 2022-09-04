import * as React from 'react';
import { MiddleLayout } from '@layout/index';
import { Heading } from './Heading';
import { Text } from './Text';
import { Emphasis } from './Emphasis';
import { Lists } from './Lists';
import { Code } from './Code';
import { Divider } from './Divider';
import { Image } from './Image';
import { Side } from './Side';
import { Youtube } from './YouTube';
import { Spotify } from './Spotify';
import { SoundCloud } from './SoundCloud';

export const UI = () => {
  return (
    <MiddleLayout>
      <div style={{ marginTop: '40px' }} />
      <Heading />
      <Text />
      <Emphasis />
      <Lists />
      <Code />
      <Divider />
      <Image />
      <Side />
      <Youtube />
      <Spotify />
      <SoundCloud />
      <div style={{ marginTop: '40px' }} />
    </MiddleLayout>
  );
};
