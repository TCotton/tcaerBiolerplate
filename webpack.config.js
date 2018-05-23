const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = {
	resolve: {
		alias: {
			Main: path.resolve(path.dirname(''), 'app/components/Main.js'),
			Nav: path.resolve(path.dirname(''), 'app/components/Nav.js'),
			Weather: path.resolve(path.dirname(''), 'app/components/Weather.js'),
			WeatherForm: path.resolve(path.dirname(''), 'app/components/WeatherForm.js'),
			WeatherMessage: path.resolve(path.dirname(''), 'app/components/WeatherMessage.js'),
			About: path.resolve(path.dirname(''), 'app/components/About.js'),
			Examples: path.resolve(path.dirname(''), 'app/components/Examples.js'),
			openWeatherMap: path.resolve(path.dirname(''), 'app/api/openWeatherMap.js'),
			ErrorModal: path.resolve(path.dirname(''), 'app/components/errorModel.js'),
		}
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: (/node_modules|bower_components/),
				use: {
					loader: 'babel-loader'
				}
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: 'html-loader',
					}
				]
			},
			{
				test: /\.css$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader']
			},
			{
				test: /\.scss$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader
					},
					{
						loader: 'css-loader' // translates CSS into CommonJS
					},
					{
						loader: 'sass-loader' // compiles Sass to CSS
					}
				]
			},
			{
				test: /\.(png|jpg|gif|svg)$/,
				use: [
					{
						loader: 'file-loader',
						options: {}
					}
				]
			}
		]
	},
	devtool: 'inline-source-map',
	plugins: [
		new HtmlWebPackPlugin({
			template: './src/index.html',
		}),
		new MiniCssExtractPlugin({
			filename: '[name].css',
			chunkFilename: '[id].css'
		}),
		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery'
		})
	]
};
