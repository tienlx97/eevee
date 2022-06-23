import * as React from 'react';
import { Heading } from './components/heading/index';
import type { HeadingProps } from './components/heading/index';

export const H1 = (props: HeadingProps) => <Heading {...props} type="section-title" />;
export const H2 = (props: HeadingProps) => <Heading {...props} type="major-heading" />;
export const H3 = (props: HeadingProps) => <Heading {...props} type="normal-heading" />;

export * from './components/heading/index';
