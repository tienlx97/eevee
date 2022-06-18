import * as fs from 'fs';
import * as path from 'path';
import { bundleMDX } from 'mdx-bundler';
import type TPQueue from 'p-queue';
import calculateReadingTime from 'reading-time';
import { remarkMdxImages } from 'remark-mdx-images';

//reads the file
const getSourceOfFile = (path: string) => {
  return fs.readFileSync(path, 'utf-8');
};

//Path to the posts folder
export const POSTS_PATH = path.join(process.cwd(), '/content');

async function compileMdx<FrontmatterType extends Record<string, unknown>, ReturnType extends unknown>(
  filePath: string,
) {
  if (process.platform === 'win32') {
    process.env.ESBUILD_BINARY_PATH = path.join(process.cwd(), 'node_modules', 'esbuild', 'esbuild.exe');
  } else {
    process.env.ESBUILD_BINARY_PATH = path.join(process.cwd(), 'node_modules', 'esbuild', 'bin', 'esbuild');
  }

  const directory = path.join(POSTS_PATH, '/', filePath);
  const content = getSourceOfFile(directory);

  try {
    const { code, frontmatter } = await bundleMDX({
      source: content,
      cwd: POSTS_PATH,
      mdxOptions: options => {
        options.remarkPlugins = [...(options.remarkPlugins ?? []), remarkMdxImages];

        return options;
      },
    });

    const readTime = calculateReadingTime(content);

    return {
      code,
      readTime,
      frontmatter: frontmatter as FrontmatterType,
    } as ReturnType;
  } catch (error) {
    console.error('Compilation error ');
    throw error;
  }
}

let _queue: TPQueue | null = null;
async function getQueue() {
  const { default: PQueue } = await import('p-queue');
  if (_queue) return _queue;

  _queue = new PQueue({ concurrency: 1 });
  return _queue;
}

// We have to use a queue because we can't run more than one of these at a time
// or we'll hit an out of memory error because esbuild uses a lot of memory...
async function queuedCompileMdx<FrontmatterType extends Record<string, unknown>, ReturnType extends unknown>(
  ...args: Parameters<typeof compileMdx>
) {
  console.log(args);
  const queue = await getQueue();
  const result = await queue.add(() => compileMdx<FrontmatterType, ReturnType>(...args));
  return result;
}

export { queuedCompileMdx as compileMdx };
