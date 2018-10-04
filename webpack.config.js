const webpack = require('webpack')

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
              presets: ['@babel/preset-env'],
            }
          },
          'ts-loader'
        ]
      }
    ]
  },
  // plugins: [
  //   // ProvidePlugin 允许代码中直接使用定义的属性，而不需要 require()
  //   // 比如下面的定义可以直接使用 $，而不再需要 const $ = require("jquery");
  //   new webpack.ProvidePlugin({
  //     $: "jquery"
  //   })
  // ]
}
