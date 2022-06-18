// try to keep this dep-free so we don't have to install deps

import { execSync } from 'child_process';
import { compileMdx } from '../mdx/index';
import type { Frontmatter, MDXCollection } from '../../typings/my-mdx/index';

const changeTypes = {
  M: 'modified',
  A: 'added',
  D: 'deleted',
  R: 'moved',
};

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
    const changes = [];
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
  // const changedFiles = (await getChangedFiles()) ?? [];
  // const contentPaths = changedFiles
  //   .filter(f => f.filename.startsWith('content'))
  //   .map(f => f.filename.replace(/^content\//, ''));
  const contentPaths = ['blog/blog-for-test/index.mdx'];
  if (contentPaths.length) {
    console.log(`⚡️ Content changed. Requesting the cache be refreshed.`, {
      contentPaths,
    });

    contentPaths.forEach(element => {
      compileMdx<Frontmatter, MDXCollection>(element).then(value => {
        console.log(value);
      });
    });

    // console.log(`Content change request finished.`, { response });
  } else {
    console.log('🆗 Not refreshing changed content because no content changed.');
  }
}

// async function post2Firestore(contentPaths: string[]) {
//   contentPaths.forEach(async p => {
//     const result = await compileMdx<Frontmatter, MDXCollection>(p)
//   });
// }

go();

export async function go2() {
  const changedFiles = (await getChangedFiles()) ?? [];
  const contentPaths = changedFiles
    .filter(f => f.filename.startsWith('content'))
    .map(f => f.filename.replace(/^content\//, ''));
  if (contentPaths.length) {
    console.log(`⚡️ Content changed. Requesting the cache be refreshed.`, {
      contentPaths,
    });

    contentPaths.forEach(element => {
      compileMdx(element).then(value => {
        console.log(value);
      });
    });

    // console.log(`Content change request finished.`, { response });
  } else {
    console.log('🆗 Not refreshing changed content because no content changed.');
  }
}
