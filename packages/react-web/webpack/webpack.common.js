/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const { ROOT_DIR } = require('./envs');
const { tsPathsPlugin, htmlWebpackPlugin, miniCssExtactPlugin, definePlugin, forkTsPlugin } = require('./plugins');
const {
  javascriptRule,
  fontsRule,
  imagesRule,
  svgReactComponentRule,
  svgRule,
  cssRule,
  typescriptRule,
} = require('./rules');

const WorkboxPlugin = require('workbox-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const commonConfig = {
  context: ROOT_DIR,

  entry: [path.join(ROOT_DIR, '/src/_root.tsx')],

  output: {
    path: path.join(ROOT_DIR, '/dist'),
    publicPath: '/',
    // filename: "[name].bundle.js",
    // assetModuleFilename: "images/[hash][ext][query]",
    clean: true,
    // libraryTarget: "umd",
    // globalObject: "this",
    // umdNamedDefine: true,

    chunkFilename: '[name].[contenthash].js',
    filename: '[name].[contenthash].js',
    assetModuleFilename: '[name].[contenthash][ext][query]',
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.mdx'],
    // alias: {
    //   '@components': path.join(ROOT_DIR, '/src/components'),
    //   '@hooks': path.join(ROOT_DIR, '/src/hooks'),
    //   '@utilities': path.join(ROOT_DIR, '/src/utilities'),
    // },
    plugins: [tsPathsPlugin],
    // ... rest of the resolve config
    fallback: {
      path: require.resolve('path-browserify'),
    },
  },

  plugins: [
    htmlWebpackPlugin,
    miniCssExtactPlugin,
    definePlugin,
    forkTsPlugin,
    new CopyPlugin([{ from: 'src/asset/copy2public', to: '' }]),
    new WorkboxPlugin.InjectManifest({
      swSrc: './src/src-sw.js',
      swDest: 'sw.js',
      maximumFileSizeToCacheInBytes: 100 * 1024 * 1024,
    }),
  ],

  externals: {
    // react: "React",
    // "react-dom": {
    //   root: "ReactDOM",
    //   commonjs2: "react-dom",
    //   commonjs: "react-dom",
    //   amd: "react-dom",
    //   umd: "react-dom",
    // },
  },

  module: {
    // eslint-disable-next-line no-sparse-arrays
    rules: [
      {
        test: /\.mdx?$/,
        use: [
          {
            loader: '@mdx-js/loader',
            /** @type {import('@mdx-js/loader').Options} */
            options: {},
          },
        ],
      },
      typescriptRule,
      javascriptRule,
      // typescriptEsbuildRule,
      fontsRule,
      imagesRule,
      svgReactComponentRule,
      svgRule,
      cssRule,
    ],
  },
};

module.exports = commonConfig;
