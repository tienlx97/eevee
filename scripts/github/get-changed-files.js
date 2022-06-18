// try to keep this dep-free so we don't have to install deps
const execSync = require('child_process').execSync;
const https = require('https');

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
async function getChangedFiles(currentCommitSha = 'HEAD^', compareCommitSha = 'HEAD') {
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
  const changedFiles = (await getChangedFiles()) ?? [];
  const contentPaths = changedFiles
    .filter(f => f.filename.startsWith('content'))
    .map(f => f.filename.replace(/^content\//, ''));
  if (contentPaths.length) {
    console.log(`⚡️ Content changed. Requesting the cache be refreshed.`, {
      contentPaths,
    });
    // console.log(`Content change request finished.`, { response });
  } else {
    console.log('🆗 Not refreshing changed content because no content changed.');
  }
}

go();
