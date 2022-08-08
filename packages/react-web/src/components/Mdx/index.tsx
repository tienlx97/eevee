import * as React from 'react';
import { useMemo } from 'react';
import { getMDXComponent } from './client';
import { MDXComponents } from '@eevee/react-mdx-comp';

export const MDX = ({ source }: { source: string }) => {
  const Component = useMemo(
    () =>
      getMDXComponent(source, {
        reactMdxComp: { ...MDXComponents },
      }),
    [source],
  );

  return <Component components={MDXComponents} />;
};
