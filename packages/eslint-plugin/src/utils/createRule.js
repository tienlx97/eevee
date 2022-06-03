const { ESLintUtils } = require('@typescript-eslint/experimental-utils');

module.exports = ESLintUtils.RuleCreator(
  name => `https://github.com/lexuantien/eevee/blob/feat%2Frebuild/packages/eslint-plugin/README.md#${name}`,
);
