import { withEeveeProvider, withStrictMode } from '@eevee/react-storybook';
// import 'cypress-storybook/react';
import './docs-root.css';

// This patches globals set up by cypress-storybook to work around its usage of the deprecated
// forceReRender API that no longer works with storyStoreV7
// https://github.com/NicholasBoll/cypress-storybook/issues/46
// https://github.com/NicholasBoll/cypress-storybook/blob/aa9bc19d66c1cd6c6e25b93cddecb1d4a7241f2f/react.js
// @ts-ignore
const realSetCurrentStory = window.__setCurrentStory;
// @ts-ignore
window.__setCurrentStory = function (categorization, story) {
  try {
    realSetCurrentStory(categorization, story);
  } catch (e) {
    // Ignore API removed errors from cypress-storybook's call to forceReRender
    // https://github.com/storybookjs/storybook/blob/208d2f930b2b72a48355367d993e65e5b01be655/lib/core-client/src/preview/start.ts#L24
    // @ts-ignore
    if (!(typeof e.message === 'string' && e.message.includes('was removed in storyStoreV7'))) {
      throw e;
    }
  }
};

/** @type {NonNullable<import('@storybook/react').Story['decorators']>} */
export const decorators = [withEeveeProvider, withStrictMode];

/** @type {import('@storybook/addons').Parameters} */
export const parameters = {
  viewMode: 'docs',
  controls: {
    disable: true,
    expanded: true,
  },
  docs: {
    source: {
      excludeDecorators: true,
    },
  },
};
