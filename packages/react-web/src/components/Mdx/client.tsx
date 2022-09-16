import * as React from 'react';
import * as _jsx_runtime from 'react/jsx-runtime';
import * as ReactDOM from 'react-dom';

export type MDXContentProps = {
  [props: string]: unknown;
  components?: import('mdx/types').MDXComponents | undefined;
};

type MDXExport<ExportObject extends {}, Frontmatter = { [key: string]: unknown }> = {
  default: React.FunctionComponent<MDXContentProps>;
  frontmatter: Frontmatter;
} & ExportObject;

/**
 * @template ExportedObject
 * @template Frontmatter
 * @param {string} code - The string of code you got from bundleMDX
 * @param {Record<string, unknown>} [globals] - Any variables your MDX needs to have accessible when it runs
 *
 */
export const getMDXExport = <ExportedObject extends {}, Frontmatter>(
  code: string,
  globals?: Record<string, unknown> | undefined,
): MDXExport<ExportedObject, Frontmatter> => {
  const scope = { React, ReactDOM, _jsx_runtime, ...globals };
  // eslint-disable-next-line
  const fn = new Function(...Object.keys(scope), code);
  return fn(...Object.values(scope));
};

export const getMDXComponent = (
  code: string,
  globals?: Record<string, unknown> | undefined,
): React.FunctionComponent<MDXContentProps> => {
  const mdxExport = getMDXExport(code, globals);
  return mdxExport.default;
};
