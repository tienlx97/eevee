const path = require('path');
const { ROOT_DIR } = require('./envs');
const {
  tsPathsPlugin,
  htmlWebpackPlugin,
  miniCssExtactPlugin,
  definePlugin,
  esLintPlugin,
  forkTsPlugin,
} = require('./plugins');
const {
  javascriptRule,
  fontsRule,
  imagesRule,
  svgReactComponentRule,
  svgRule,
  cssRule,
  typescriptRule,
} = require('./rules');

const commonConfig = {
  context: ROOT_DIR,

  entry: [path.join(ROOT_DIR, '/src/_app.tsx')],

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
    plugins: [tsPathsPlugin],
  },

  plugins: [htmlWebpackPlugin, miniCssExtactPlugin, definePlugin, forkTsPlugin],

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
