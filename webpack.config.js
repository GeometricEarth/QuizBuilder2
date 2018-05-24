
const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
	entry: './index.js',
	output: {
		path: path.resolve(__dirname, 'docs'),
		filename: 'bundle.js'
	},
	mode: 'development',
	module: {
		rules: [
      {
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			},
			{
				test: /\.css$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
					},
					{
						loader: 'css-loader',
					}
				]
			},
			{
				test: /\.pug$/,
				use: {
					loader: 'pug-loader',
				}
			},
			{
				test: /\.html$/,
				use: [{
					loader: 'html-loader',
				}]
			}
		]
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: "index.html",
			filename: "index.html",
			
		}),
		new MiniCssExtractPlugin({
			filename: "[name].css",
			chunkFilename: "[id].css"
		})
	]
};