/* eslint-disable no-console */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { bundleMDX } from 'mdx-bundler';
import path from 'path';

if (process.platform === 'win32') {
  process.env.ESBUILD_BINARY_PATH = path.join(process.cwd(), 'node_modules', 'esbuild', 'esbuild.exe');
} else {
  process.env.ESBUILD_BINARY_PATH = path.join(process.cwd(), 'node_modules', 'esbuild', 'bin', 'esbuild');
}

// https://stackoverflow.com/questions/62096269/cant-run-my-node-js-typescript-project-typeerror-err-unknown-file-extension

const result = await bundleMDX({
  file: process.cwd() + '/src/pages/Post.mdx',
  cwd: process.cwd(),
  // mdxOptions: options => {
  //   options.remarkPlugins = [...(options.remarkPlugins ?? []), remarkMdxImages]

  //   return options
  // },
  globals: {
    '@eevee/react-mdx-comp': {
      varName: 'MdxComponents',
      namedExports: ['Paragraph'],
      defaultExport: false,
    },
  },
});

const { code, frontmatter } = result;

console.log(code);
console.log(frontmatter);
