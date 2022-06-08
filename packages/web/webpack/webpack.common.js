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
  },

  plugins: [
    new CopyPlugin([{ from: 'src/pwa', to: '' }]),
    new WorkboxPlugin.InjectManifest({
      swSrc: './src/src-sw.js',
      swDest: 'sw.js',
      maximumFileSizeToCacheInBytes: 100 * 1024 * 1024,
    }),
    htmlWebpackPlugin,
    miniCssExtactPlugin,
    definePlugin,
    forkTsPlugin,
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
    rules: [
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
