const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const Dotenv = require('dotenv-webpack');

const production = process.env.NODE_ENV === 'production';

module.exports = () => {
  require('dotenv').config({
    path: path.resolve(__dirname, '.env'),
  });

  return {
    mode: process.env.NODE_ENV,
    devtool: production ? 'eval' : 'inline-cheap-module-source-map',
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.html'],
      alias: {
        '@assets': path.resolve(__dirname, 'src/assets'),
        '@components': path.resolve(__dirname, 'src/components'),
        '@hooks': path.resolve(__dirname, 'src/hooks'),
        '@layouts': path.resolve(__dirname, 'src/layouts'),
        '@routes': path.resolve(__dirname, 'src/routes'),
        '@styles': path.resolve(__dirname, 'src/styles'),
      },
    },
    entry: {
      main: ['./src/index.tsx'],
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          exclude: '/node_modules/',
          use: ['ts-loader'],
        },
        {
          enforce: 'pre',
          test: /\.js$/,
          loader: 'source-map-loader',
        },
        {
          test: /\.svg$/,
          use: ['@svgr/webpack'],
        },
        {
          test: /\.(jpg|jpeg|png|gif)$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                name: '[name].[ext]?[hash]',
              },
            },
          ],
        },
      ],
    },
    output: {
      path: production
        ? path.resolve(__dirname, 'build')
        : path.resolve(__dirname, 'dist'),
      filename: '[name].bundle.js',
      publicPath: '/',
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'public/index.html'),
        favicon: path.resolve(__dirname, 'public/favicon.ico'),
      }),
      new CleanWebpackPlugin(),
      new Dotenv(),
      new webpack.DefinePlugin({
        'process.env.API_URI': JSON.stringify(process.env.API_URI),
        'process.env.GA_TRACKING_ID': JSON.stringify(
          process.env.GA_TRACKING_ID,
        ),
      }),
    ],
    devServer: {
      contentBase: './dist',
      writeToDisk: true,
      historyApiFallback: true,
      port: 3003,
    },
  };
};
