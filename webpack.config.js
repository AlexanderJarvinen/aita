const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/app/app.tsx',
  plugins: [
    new CleanWebpackPlugin({
      cleanAfterEveryBuildPatterns: ['public/build']
    }),
    new HtmlWebpackPlugin({
      template: 'src/templates/index.html'
    }),
  ],
  output: {
    path: __dirname + '/public',
    filename: 'build/[name].[contenthash].js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [
        { test: /\.tsx?$/, loader: 'ts-loader' },
          {
              test: /\.(scss|css)$/,
              use: ['style-loader', 'css-loader', 'postcss-loader', {
                  loader: 'sass-loader',
                  options: {
                      implementation: require('sass'),
                  },
              },
             ],
          },
          {
              test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/,
              exclude: /node_modules/,
              loader: "file-loader"
          },
          {
              test: /\.(eot|ttf)$/,
              loader: "file-loader",
          },

    ]
  }
}
