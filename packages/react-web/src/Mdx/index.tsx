import * as React from 'react';
import { useMemo } from 'react';
import { getMDXComponent } from 'mdx-bundler/client';
//import globals
import { MDXComponents } from '@eevee/react-mdx-comp';

export const MDX: React.FC<{ source: string }> = ({ source }) => {
  const Component = useMemo(
    () =>
      getMDXComponent(source, {
        reactMdxComp: { ...MDXComponents },
      }),
    [source],
  );
  return <Component components={{ ...MDXComponents }} />;
};
