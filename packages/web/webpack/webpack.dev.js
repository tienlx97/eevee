const { ROOT_DIR } = require('./envs');
const path = require('path');
const { caseSensitivePathsPlugin, reactRefreshPlugin } = require('./plugins');

const devConfig = {
  devtool: 'inline-source-map',
  // watch: true,

  stats: {
    errorDetails: true,
    children: true,
  },

  devServer: {
    client: {
      overlay: false,
    },
    port: 3000,
    static: path.join(ROOT_DIR, '/dist'),
    host: 'localhost',
    // hot: true,
    historyApiFallback: true,
  },

  plugins: [reactRefreshPlugin, caseSensitivePathsPlugin],
};

module.exports = devConfig;
