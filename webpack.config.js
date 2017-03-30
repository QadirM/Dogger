const ASSET_PATH = 'https://qadirm.github.io/Dogger/';

module.exports = {
  entry: "./lib/dogger.js",
  output: {
  	filename: "./lib/bundle.js",
    publicPath: ASSET_PATH
  },
  module: {
    loaders: [
      {
        test: [/\.jsx?$/, /\.js?$/],
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: ["*", ".js", ".jsx"]
  }
};
