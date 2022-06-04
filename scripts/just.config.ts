import { task, parallel, series } from 'just-scripts';

import { checkForModifiedFiles } from './tasks/check-for-modified-files';
import { clean } from './tasks/clean';
import { eslint } from './tasks/eslint';
import { lintImports } from './tasks/lint-imports';
import { prettier } from './tasks/prettier';
import { jest as jestTask, jestWatch } from './tasks/jest';

/** Do only the bare minimum setup of options and resolve paths */
function basicPreset() {}

export function preset() {
  basicPreset();

  task('clean', clean);

  task('jest', jestTask);

  task('jest-watch', jestWatch);

  task('eslint', eslint);

  task('lint-imports', lintImports);

  task('lint', parallel('lint-imports', 'eslint'));

  task('prettier', prettier);

  task('code-style', series('prettier', 'lint'));

  task('check-for-modified-files', checkForModifiedFiles);
}

preset.basic = basicPreset;

if (process.cwd() === __dirname) {
  // load the preset if this is being run within the scripts package
  preset();
}
