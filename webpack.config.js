var webpack = require('webpack');
var path = require('path');


module.exports = {
  entry: './src/app.js',
  output: {
	    path: path.resolve(__dirname, 'dist'),
	    filename: 'bundle.js',
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
}
