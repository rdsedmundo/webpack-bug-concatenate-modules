const path = require('path');

module.exports = {
  target: 'node',
  mode: 'none',
  entry: './packages/app/index.js',
  output: {
    path: path.resolve(__dirname, './build'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  optimization: {
    concatenateModules: true,
  },
};
