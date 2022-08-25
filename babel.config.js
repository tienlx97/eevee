module.exports = api => ({
  ...require('@eevee/scripts/babel')(api),
  babelrcRoots: ['./packages/*'],
});

