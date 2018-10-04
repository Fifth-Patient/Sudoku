module.exports = {
  mode: 'development',
  entry: {
    index: './src/js/index'
  },
  output: {
    filename: '[name].js'
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.ts']
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['es2015'],
            }
          },
          'ts-loader'
        ]
      }
    ]
  }
}
