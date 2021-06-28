const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const production = process.env.NODE_ENV === 'production';

module.exports = {
	mode: process.env.NODE_ENV,
	devtool: production ? 'eval' : 'inline-cheap-module-source-map',
	resolve: {
		extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.html'],
		alias: {
			'@src': path.resolve(__dirname, './src'),
			'@assets': path.resolve(__dirname, './src/assets'),
			'@config': path.resolve(__dirname, './config.ts'),
			'@layouts': path.resolve(__dirname, './src/layouts'),
			'@libs': path.resolve(__dirname, './src/libs'),
			'@styles': path.resolve(__dirname, './src/styles'),
			'@redux': path.resolve(__dirname, './src/redux'),
			'@components': path.resolve(__dirname, './src/components'),
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
				test: /\.(jpg|jpeg|png)$/,
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
			template: path.resolve(__dirname, './public/index.html'),
		}),
		new CleanWebpackPlugin(),
	],
	devServer: {
		contentBase: './dist',
		writeToDisk: true,
		historyApiFallback: true,
		port: 3003,
	},
};
