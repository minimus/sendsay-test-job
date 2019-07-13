const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const autoprefixer = require('autoprefixer')

module.exports = {
  mode: 'production',
  entry: {
    app: './src/index.js',
  },
  output: {
    path: path.resolve(__dirname, ''),
    filename: 'js/bundle.js',
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['react-app'],
          plugins: ['react-html-attrs', 'transform-class-properties'],
        },
      },
      {
        test: [/\.css$/, /\.less$/],
        use: [
          'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },
          {
            loader: 'postcss-loader',
            options: {
              plugins: [
                autoprefixer(),
              ],
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
  /* resolve: {
    extensions: ['.js', '.json', '.less', '.sass', '.scss', '.css'],
  }, */
}
