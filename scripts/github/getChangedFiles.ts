// try to keep this dep-free so we don't have to install deps

import { execSync } from 'child_process';
import { compileMdx } from '../mdx/index';
import { changeTypes, ChangedFile } from './getChangedFiles.types';

/**
 * @param {*} currentCommitSha default `HEAD^`
 * @param {*} compareCommitSha default `HEAD`
 * @returns
 */
async function getChangedFiles(currentCommitSha: string = 'HEAD^', compareCommitSha: string = 'HEAD') {
  try {
    const lineParser = /^(?<change>\w).*?\s+(?<filename>.+$)/;
    const gitOutput = execSync(`git diff --name-status ${currentCommitSha} ${compareCommitSha}`).toString();
    const changedFiles = gitOutput
      .split('\n')
      .map(line => line.match(lineParser)?.groups)
      .filter(Boolean);
    const changes: ChangedFile[] = [];
    for (const { change, filename } of changedFiles) {
      const changeType = changeTypes[change];
      if (changeType) {
        changes.push({ changeType: changeTypes[change], filename });
      } else {
        console.error(`Unknown change type: ${change} ${filename}`);
      }
    }
    return changes;
  } catch (error) {
    console.error(`Something went wrong trying to get changed files.`, error);
    return null;
  }
}

async function go() {
  const changedFiles = (await getChangedFiles()) ?? [];
  const contentPaths = changedFiles
    .filter(f => f.filename.startsWith('content'))
    .map(f => {
      f.filename = f.filename.replace(/^content\//, '');
      return f;
    });
  if (contentPaths.length) {
    console.log(`⚡️ Content changed. Requesting the cache be refreshed.`, {
      contentPaths,
    });

    contentPaths.forEach(element => {
      postMdxPost(element);
    });

    // console.log(`Content change request finished.`, { response });
  } else {
    console.log('🆗 Not refreshing changed content because no content changed.');
  }
}

async function postMdxPost(content: ChangedFile) {
  const result = await compileMdx(content.filename);

  const { categories, description, meta, title, id } = result.frontmatter;

  // generate id for new mdx post

  console.log(result);

  if (content.changeType !== 'added') {
    if (!id) {
      throw Error('id is require, please undo id');
    } else if (categories.length === 0) {
      throw Error('category must define');
    } else if (!description) {
      throw Error('description must define');
    } else if (!meta.keywords) {
      throw Error('meta.keywords must define');
    } else if (!title) {
      throw Error('title must define');
    }
  } else {
    // generate id for new post
  }
}

go();
