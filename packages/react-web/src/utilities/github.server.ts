/* eslint-disable no-console */
// import nodePath from 'path'
import { Octokit as createOctokit } from '@octokit/rest';
import { throttling } from '@octokit/plugin-throttling';
import type { GitHubFile } from 'typings/my-mdx/index';
import { Buffer } from 'buffer';

type ThrottleOptions = {
  method: string;
  url: string;
  request: { retryCount: number };
};

const Octokit = createOctokit.plugin(throttling);
const octokit = new Octokit({
  auth: process.env.BOT_GITHUB_TOKEN,
  throttle: {
    onRateLimit: (retryAfter: number, options: ThrottleOptions) => {
      console.log(
        `Request quota exhausted for request ${options.method} ${options.url}. Retrying after ${retryAfter} seconds.`,
      );

      return true;
    },
    onAbuseLimit: (retryAfter: number, options: ThrottleOptions) => {
      // does not retry, only logs a warning
      octokit.log.warn(`Abuse detected for request ${options.method} ${options.url}`);
    },
  },
});

/**
 *
 * @param path the full path to list
 * @returns a promise that resolves to a file ListItem of the files/directories in the given directory (not recursive)
 */
async function downloadDirList(path: string) {
  const resp = await octokit.rest.repos.getContent({
    owner: 'yugi0h',
    repo: process.env.NODE_ENV === 'production' ? 'mimikyu-content' : 'mimikyu_content_dev',
    path,
  });
  const data = resp.data;

  if (!Array.isArray(data)) {
    throw new Error(
      `Tried to download content from ${path}. GitHub did not return an array of files. This should never happen...`,
    );
  }

  return data;
}

/**
 *
 * @param sha the hash for the file (retrieved via `downloadDirList`)
 * @returns a promise that resolves to a string of the contents of the file
 */
export async function downloadFileBySha(sha: string) {
  // const { data } = await octokit.request('GET /repos/{owner}/{repo}/git/blobs/{file_sha}', {
  //   owner: 'yugi0h',
  //   repo: process.env.NODE_ENV === 'production' ? 'mimikyu-content' : 'mimikyu_content_dev',
  //   file_sha: sha,
  // });

  const response = await fetch(
    `https://api.github.com/repos/yugi0h/${
      process.env.NODE_ENV === 'production' ? 'mimikyu-content' : 'mimikyu_content_dev'
    }/git/blobs/${sha}`,
  );
  const data = await response.json();

  //                                lol
  const encoding = data.encoding as Parameters<typeof Buffer.from>['1'];
  return Buffer.from(data.content, encoding).toString();
}

/**
 *
 * @param dir the directory to download.
 * This will recursively download all content at the given path.
 * @returns An array of file paths with their content
 */
export async function downloadDirectory(dir: string): Promise<Array<GitHubFile>> {
  const dirList = await downloadDirList(dir);

  const result = await Promise.all(
    dirList.map(async ({ path: fileDir, name, type, sha }) => {
      switch (type) {
        case 'file': {
          const content = await downloadFileBySha(sha);
          return { path: fileDir, content, name };
        }
        case 'dir': {
          return downloadDirectory(fileDir);
        }
        default: {
          throw new Error(`Unexpected repo file type: ${type}`);
        }
      }
    }),
  );

  return result.flat();
}

export async function downloadFile(path: string) {
  const { data } = (await octokit.request('GET /repos/{owner}/{repo}/contents/{path}', {
    owner: 'yugi0h',
    repo: process.env.NODE_ENV === 'production' ? 'mimikyu-content' : 'mimikyu_content_dev',
    path,
  })) as { data: { content?: string; encoding?: string } };

  if (!data.content || !data.encoding) {
    throw new Error(
      `Tried to get ${path} but got back something that was unexpected. It doesn't have a content or encoding property`,
    );
  }

  //                                lol
  const encoding = data.encoding as Parameters<typeof Buffer.from>['1'];
  return Buffer.from(data.content, encoding).toString();
}

export async function addOrUpdateFile(options: { path: string; message: string; content: any; sha?: string }) {
  const { content, message, path, sha } = options;

  const response = await octokit.rest.repos.createOrUpdateFileContents({
    content: Buffer.from(JSON.stringify(content)).toString('base64'),
    path,
    message,
    owner: 'yugi0h',
    repo: process.env.NODE_ENV === 'production' ? 'mimikyu-content' : 'mimikyu_content_dev',
    branch: 'main',
    sha,
  });

  return { status: response.status, sha: response.data.content?.sha };
}

export async function addOrUpdateFileWithFetch(options: { path: string; message: string; content: any; sha?: string }) {
  const { content, message, path, sha } = options;

  const url = `https://api.github.com/repos/yugi0h/${
    process.env.NODE_ENV === 'production' ? 'mimikyu-content' : 'mimikyu_content_dev'
  }/contents/${path}`;

  const body = {
    content: Buffer.from(JSON.stringify(content)).toString('base64'),
    path,
    message,
    owner: 'yugi0h',
    repo: process.env.NODE_ENV === 'production' ? 'mimikyu-content' : 'mimikyu_content_dev',
    branch: 'main',
    sha,
  };

  fetch(url, {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${process.env.BOT_GITHUB_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
}
