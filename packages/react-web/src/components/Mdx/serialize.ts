import { compile, CompileOptions } from '@mdx-js/mdx';
import { VFile } from 'vfile';
import { matter } from 'vfile-matter';

import remarkMdxCodeMeta from 'remark-mdx-code-meta';
import remarkGfm from 'remark-gfm';
import { removeImportsExportsPlugin } from './plugins/remove-imports-exports';
import { remarkTocHeadings } from './plugins/remark-toc-headings';
import { remarkReadingTime } from './plugins/remark-reading-time';
import { getReadingTime } from './plugins/getReadingTime';

import type { Toc } from 'typings/my-mdx/index';

// types
import { MDXRemoteSerializeResult, SerializeOptions } from './types';

/**
 * Parses and compiles the provided MDX string. Returns a result which can be passed into <MDXRemote /> to be rendered.
 */
export const serialize = async (
  /** Raw MDX contents as a string. */
  source: string,
  {
    scope = {},
    mdxOptions = {
      remarkPlugins: [],
    },
    parseFrontmatter = true,
  }: SerializeOptions = {},
): Promise<MDXRemoteSerializeResult> => {
  const vfile = new VFile({ value: source });

  const toc: Toc[] = [];
  const readingArr: any = [];

  // makes frontmatter available via vfile.data.matter
  if (parseFrontmatter) {
    matter(vfile, { strip: true });
  }
  // getCompileOptions(mdxOptions)

  const areImportsEnabled = mdxOptions?.useDynamicImport;

  const compiledMdx: VFile = await compile(vfile, {
    ...mdxOptions,
    remarkPlugins: [
      ...(areImportsEnabled ? [] : [removeImportsExportsPlugin]),
      [remarkGfm],
      [remarkMdxCodeMeta],
      [remarkTocHeadings, { exportRef: toc }],
      [remarkReadingTime, { exportRef: readingArr }],
    ],
    outputFormat: 'function-body',
    providerImportSource: '@mdx-js/react',
  });

  const compiledSource = String(compiledMdx);
  const readTime = getReadingTime(readingArr);

  return {
    compiledSource,
    frontmatter: (vfile.data.matter as Record<string, string> | undefined) ?? {},
    scope,
    readTime,
    toc,
  };
};
