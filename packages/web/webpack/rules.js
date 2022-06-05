const path = require('path');
const { ROOT_DIR, isDevelopment } = require('./envs');
const { babelLoader, miniCssExtractLoader, cssLoader, styleLoader, postCssLoader } = require('./loaders');

const ReactRefreshTypeScript = require('react-refresh-typescript');

const javascriptRule = {
  test: /\.jsx?$/,
  exclude: /node_modules/,
  include: path.join(ROOT_DIR, '/src'),
  use: babelLoader,
};
const typescriptRule = {
  test: /\.tsx?$/,
  exclude: /node_modules/,
  use: [
    {
      loader: 'ts-loader',
      options: {
        // getCustomTransformers: () => ({
        //   before: [isDevelopment && ReactRefreshTypeScript()].filter(Boolean),
        // }),
        transpileOnly: isDevelopment,
        ...(isDevelopment && {
          getCustomTransformers: () => ({
            before: [ReactRefreshTypeScript()],
          }),
        }),
      },
    },
  ],
};

const fontsRule = {
  test: /\.(woff|woff2|eot|ttf|otf)$/i,
  type: 'asset/resource',
};

const imagesRule = {
  test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
  type: 'asset',
};

const svgReactComponentRule = {
  test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
  issuer: /\.[jt]sx$/,
  use: [
    {
      loader: '@svgr/webpack',
      options: {
        babel: false,
        icon: true,
      },
    },
  ],
};

const svgRule = {
  test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
  issuer: { not: [/\.[jt]sx$/] },
  type: 'asset/inline',
};

const cssRule = {
  test: /\.css$/,
  use: [
    // Do not use together style-loader and mini-css-extract-plugin.
    // devMode ? "style-loader" : MiniCssExtractPlugin.loader,
    // plugins: [].concat(devMode ? [] : [new MiniCssExtractPlugin()]),
    miniCssExtractLoader,
    // styleLoader,
    cssLoader,
    {
      loader: 'esbuild-loader',
      options: {
        loader: 'css',
        minify: true,
      },
    },
    postCssLoader(),
    // according to the docs, sass-loader should be at the bottom, which
    // loads it first to avoid prefixes in your sourcemaps and other issues.
  ],
  sideEffects: true,
};
const esbuild = require('esbuild');

const typescriptEsbuildRule = {
  test: /\.tsx?$/,
  exclude: /node_modules/,
  use: [
    {
      loader: 'esbuild-loader',
      options: {
        loader: 'tsx', // Or 'ts' if you don't need tsx
        target: 'es2015',
        implementation: esbuild,
      },
    },
  ],
};

const javascriptEsbuildRule = {
  test: /\.jsx?$/,
  exclude: /node_modules/,
  include: path.join(ROOT_DIR, '/src'),
  loader: 'esbuild-loader',
  options: {
    loader: 'jsx', // Remove this if you're not using JSX
    target: 'es2015', // Syntax to compile to (see options below for possible values)
    implementation: esbuild,
  },
};

module.exports = {
  javascriptRule,
  typescriptRule,
  fontsRule,
  imagesRule,
  svgReactComponentRule,
  svgRule,
  cssRule,
  typescriptEsbuildRule,
  javascriptEsbuildRule,
};
