const { networkInterfaces } = require('os');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const { WebpackOpenBrowser } = require('webpack-open-browser');
const { TsConfigPathsPlugin } = require('awesome-typescript-loader');
const minimizeProgressBar = require('./progressBar.config');
// const nets = networkInterfaces();

module.exports = (_, { mode, host, port }) => {
  //File regexp
  const CSS_MODULE_REG = /\.module\.css$/;
  const CSS_REG = /\.css$/;

  //Address
  const PORT = port || 3000;
  const HOST = host || '0.0.0.0';
  const LOCAL_HOST_ADDRESS = `http://localhost:${PORT}`;
  // const NETWORK_ADDRESS = `http://${nets['wlp4s0'][0]['address']}:${PORT}`;

  const ENTRY = path.resolve(__dirname, './src/index.tsx');
  const OUTPUT = path.resolve(__dirname, './build');

  const isDevelopment = mode === 'development';

  //Helpers

  const getStyles = (options = {}) => {
    return [
      isDevelopment ? { loader: 'style-loader' } : { loader: MiniCssExtractPlugin.loader },
      {
        loader: 'css-loader',
        options: {
          ...options,
        },
      },
      'postcss-loader',
    ];
  };

  return {
    entry: {
      main: [isDevelopment && 'react-hot-loader/patch', ENTRY].filter(Boolean),
    },
    output: {
      path: OUTPUT,
      filename: 'static/js/[name].[hash].bundle.js',
      publicPath: '',
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js', '.jsx'],
      plugins: [new TsConfigPathsPlugin()],
    },
    optimization: {
      minimize: !isDevelopment,
      minimizer: [!isDevelopment && new OptimizeCssAssetsPlugin()].filter(Boolean),
      splitChunks: {
        chunks: 'all',
        name: 'vendor',
      },
    },
    performance: {
      hints: false,
      maxEntrypointSize: 51200,
      maxAssetSize: 51200,
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: 'awesome-typescript-loader',
          options: {
            silent: true,
          },
        },
        {
          test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 8240,
                name: 'static/images/[name].[ext]',
              },
            },
          ],
        },
        {
          test: /\.svg$/,
          use: ['@svgr/webpack'],
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          use: [
            {
              loader: 'url-loader',
              options: {
                ...(!isDevelopment && { limit: 8240 }),
                name: '[name].[ext]',
                outputPath: 'static/fonts/',
                publicPath: '../fonts/',
              },
            },
          ],
        },
        {
          test: CSS_REG,
          exclude: CSS_MODULE_REG,
          use: getStyles(),
        },
        {
          test: CSS_MODULE_REG,
          use: getStyles({
            modules: {
              exportGlobals: true,
              ...(isDevelopment
                ? { localIdentName: '[folder]_[local]-[hash:base64:5]' }
                : { localIdentName: '[hash:base64:2]-[hash:base64:4]-[hash:base64:5]' }),
            },
          }),
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'CopiTrade',
        template: path.resolve(__dirname, './public/index.html'),
        favicon: path.resolve(__dirname, './public/favicon.ico'),
      }),
      new MiniCssExtractPlugin({
        filename: 'static/styles/[name].[hash].css',
      }),
      !isDevelopment && new CleanWebpackPlugin(),
      // minimizeProgressBar(isDevelopment, LOCAL_HOST_ADDRESS, NETWORK_ADDRESS),
      isDevelopment && new WebpackOpenBrowser({ url: LOCAL_HOST_ADDRESS }),
    ].filter(Boolean),
    ...(isDevelopment && { devtool: 'inline-source-map' }),
    devServer: {
      historyApiFallback: true,
      compress: true,
      inline: true,
      port: PORT,
      host: HOST,
      hot: true,
    },
  };
};
