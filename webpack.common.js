const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 自动生成index.html
const CleanWebpackPlugin = require('clean-webpack-plugin'); // 清理dist文件夹 然后重新生成，，感觉会变慢？
const webpack = require('webpack');

module.exports = {
  entry: {
    app: './src/index.js'
  },
  devtool: 'inline-source-map', // 追踪错误
  devServer: {  //自动部署到8080 并支持热更新
    contentBase: './dist',
    hot: true
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Output Management'
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    // publicPath: '/'
  },
  module: {
    rules: [
  //     {
  //       test: /\.js$/,
  //       loader: ['cache-loader', 'babel-loader'],
  //       include: [path.resolve(__dirname, 'src')],
  //       exclude: [path.resolve(__dirname, 'node_modules')]
  //     },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
  //     {
  //       test: /\.(png|svg|jpg|gif)$/,
  //       use: ['file-loader']
  //     },
  //     {
  //       test: /\.(woff|woff2|eot|ttf|otf)$/,
  //       use: ['file-loader']
  //     }
    ]
  }
};
