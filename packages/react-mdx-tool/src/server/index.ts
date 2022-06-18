// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { bundleMDX } from 'mdx-bundler';
import * as path from 'path';
import { getSourceOfFile } from './utils/index';
import { remarkMdxImages } from 'remark-mdx-images';

const namedExports = [
  'Paragraph',
  'TextLink',
  'Blockquote',
  'Ul',
  'Ol',
  'Li',
  'I',
  'Em',
  'PostImage',
  'Strike',
  'InlineCode',
  'H1',
  'H2',
  'H3',
  'CodeSnippet',
  'SandPack',
  'HorizontalRule',
];

if (process.platform === 'win32') {
  process.env.ESBUILD_BINARY_PATH = path.join(process.cwd(), 'node_modules', 'esbuild', 'esbuild.exe');
} else {
  process.env.ESBUILD_BINARY_PATH = path.join(process.cwd(), 'node_modules', 'esbuild', 'bin', 'esbuild');
}

export const POSTS_PATH = path.join(process.cwd(), '/src/pages');

const source = getSourceOfFile(POSTS_PATH + '/Post.mdx');

const result = await bundleMDX({
  source,
  cwd: POSTS_PATH,
  mdxOptions: options => {
    options.remarkPlugins = [...(options.remarkPlugins ?? []), remarkMdxImages];

    return options;
  },

  globals: {
    '@eevee/react-mdx-comp': {
      varName: 'reactMDXComponents',
      namedExports,
      defaultExport: false,
    },
  },
});

const { code: _z, frontmatter: _ } = result;
