module.exports = {
  entry: './entry.js',
  output: {
    path: __dirname,
    filename: 'bundle.js',
  },
  devServer: {
    proxy: {
      '/graphql': 'http://localhost:8000/graphql',
    },
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: 'style!css' },
      {
        test: /.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react'],
        },
      },
    ],
  },
};
