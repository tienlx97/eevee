import * as React from 'react';
import { ContentHeading } from './components/contentheading/index';
import type { ContentHeadingProps } from './components/contentheading/index';

export const CH1 = (props: ContentHeadingProps) => <ContentHeading {...props} heading={{ type: 'major-heading' }} />;
export const CH2 = (props: ContentHeadingProps) => <ContentHeading {...props} heading={{ type: 'normal-heading' }} />;
export const CH3 = (props: ContentHeadingProps) => <ContentHeading {...props} heading={{ type: 'minor-heading' }} />;

export * from './components/contentheading/index';
