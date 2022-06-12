import * as React from 'react';
import { ContentHeading } from './components/contentheading/index';
import type { ContentHeadingProps } from './components/contentheading/index';

export const H1 = (props: ContentHeadingProps) => <ContentHeading {...props} heading={{ type: 'major-heading' }} />;
export const H2 = (props: ContentHeadingProps) => <ContentHeading {...props} heading={{ type: 'normal-heading' }} />;
export const H3 = (props: ContentHeadingProps) => <ContentHeading {...props} heading={{ type: 'minor-heading' }} />;
