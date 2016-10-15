var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
	template: './src/index.html',
	filename: 'index.html',
	inject: 'body'
});
module.exports = {
	devtool: 'eval-source-map',
	entry: ['./src/App.js'],
	output: {
		path: __dirname + '/dist',
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel',
				query: {
					presets: ['es2015', 'react']
				}
			}
		]
	},
	devServer: {
		port: 8080,
		colors: true,
		historyApiFallback: true,
	},
	plugins: [HtmlWebpackPluginConfig]
}