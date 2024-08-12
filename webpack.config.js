const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js', // Your entry point
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true, // Clean the output directory before emit
  },
  devtool: 'inline-source-map', // Source maps for easier debugging
  devServer: {
    static: './dist', // Serve files from the dist directory
    hot: true, // Enable hot module replacement
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'My Webpack Project',
      template: './src/index.html', // Use index.html as a template
      favicon: './src/favicon.ico',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/, // Transpile JavaScript files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // Optional: Use Babel for ES6 support
          options: {
            presets: ['@babel/preset-env'], // Preset for modern JavaScript
          },
        },
      },
      {
        test: /\.css$/, // Handle CSS files
        use: ['style-loader', 'css-loader'], // Loaders to use
      },
    ],
  },
};
