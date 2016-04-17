module.exports = {
  entry: './src/ultimate-pagination.js',
  output: {
    path: './dist',
    filename: 'ultimate-pagination.js',
    library: 'ultimatePagination',
    libraryTarget: 'umd'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['es2015']
        }
      }
    ]
  }
};
