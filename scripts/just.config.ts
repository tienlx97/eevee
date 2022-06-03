import { task, parallel, series } from 'just-scripts';

import { clean } from './tasks/clean';
import { eslint } from './tasks/eslint';
import { prettier } from './tasks/prettier';
import { jest as jestTask, jestWatch } from './tasks/jest';

/** Do only the bare minimum setup of options and resolve paths */
function basicPreset() {}

export function preset() {
  basicPreset();

  task('clean', clean);
  task('eslint', eslint);
  task('lint', parallel('eslint'));
  task('prettier', prettier);
  task('code-style', series('prettier', 'lint'));
  task('jest', jestTask);
  task('jest-watch', jestWatch);
}

preset.basic = basicPreset;

if (process.cwd() === __dirname) {
  // load the preset if this is being run within the scripts package
  preset();
}
