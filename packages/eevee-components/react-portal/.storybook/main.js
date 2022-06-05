const rootMain = require('../../../../.storybook/main');

// @ts-ignore
module.exports = /** @type {Omit<import('../../../../.storybook/main'), 'typescript'|'babel'>} */ ({
  ...rootMain,
  stories: ['../src/components/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [...rootMain.addons],
  webpackFinal: (config, options) => {
    const localConfig = { ...rootMain.webpackFinal(config, options) };

    // add your own webpack tweaks if needed

    return localConfig;
  },
});
