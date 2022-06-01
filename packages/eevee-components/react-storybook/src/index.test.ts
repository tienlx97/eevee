import { withEeveeProvider, withStrictMode } from './index';

describe(`public api`, () => {
  describe(`decorators`, () => {
    it(`should work`, () => {
      const decorators = [withEeveeProvider, withStrictMode];

      // @TODO - added proper tests
      expect(decorators).toBeDefined();
    });
  });
});
