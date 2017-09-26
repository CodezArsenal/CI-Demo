var webpack = require('webpack');
var path = require('path');
var jasmineWebpackPlugin = require('jasmine-webpack-plugin');


module.exports = {
  entry: {
    bundle: './src/app.js',
    spec: './spec/spec.js'
  },
  output: {
	    path: path.resolve(__dirname, 'dist'),
	    filename: '[name].js',
  },

  module: {
  	rules: [ //loaders
  		{
  			test: /\.js$/,
  			exclude: /node_modules/,
  			loader: "babel-loader",
  			query: {
            	presets: ['es2015']
         	}
  		},

  	]
  },

  plugins: [
    new jasmineWebpackPlugin(),
  ]
}
