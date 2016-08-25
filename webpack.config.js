'use strict';

// Modules
let webpack = require('webpack');
let autoprefixer = require('autoprefixer');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
const BUILD = Boolean((process.argv.indexOf('--production') > -1));

module.exports = buildConfig('./app.js', './public', '/');

/**
 * Builds a webpack config object
 * @param {string} entry Relative path to the javascript entry file
 * @param {string} outputPath The directory to output the build result to
 * @param {string} publicPath The public url path of the app
 * @param {object} [proxy] Proxy option for webpack dev server
 * @return {object} Built webpack config object
 */
function buildConfig(entry, outputPath, publicPath, proxy) {
  let config = {
    entry: {app: entry},
    output: {
      path: outputPath,
      publicPath,
      filename: BUILD ? '[name].[hash].js' : '[name].bundle.js',
      chunkFilename: BUILD ? '[name].[hash].js' : '[name].bundle.js'
    },
    devtool: BUILD ? 'source-map' : 'eval',
    module: {
      preLoaders: [{
        test: /\.js$/,
        loader: "eslint-loader",
        exclude: /node_modules/
      }],
      noParse: /node_modules\/video.js\/dist\/video.js/, // Removes "Pre-Built JS File" Warning. https://github.com/webpack/webpack/issues/1617

      // Loaders: http://webpack.github.io/docs/configuration.html#module-loaders
      loaders: [
        {
          test: /\.js$/,
          loaders: ['ng-annotate', 'babel?presets[]=es2015'],
          exclude: /(node_modules)/
        },
        {
          test: /\.(woff|woff2|ttf|eot)(\?]?.*)?$/,
          loader: 'file-loader?name=fonts/[name].[ext]'
        },
        {
          test: /\.(svg)(\?]?.*)?$/,
          loader: 'file-loader?name=icons/[name].[ext]'
        },
        {
          test: /\.template\.html$/,
          loader: 'ngtemplate',
          exclude: /(style|static)/
        },
        {
          test: /\.html$/,
          loader: 'html-loader',
          exclude: /(style|static)/
        },
        {
          test: /\.(png|jpg|gif)$/,
          loader: 'url-loader?limit=5000&name=img/img-[hash:6].[ext]'
        },
        {
          test: /\.css$/,
          loader: ExtractTextPlugin.extract('style', 'css?sourceMap!postcss')
        },
        {
          test: /\.scss$/,
          loader: ExtractTextPlugin.extract('style', 'css?sourceMap!postcss!sass')
        }
      ]
    },
    postcss: [autoprefixer({browsers: ['last 2 version']})],

    // Plugins: http://webpack.github.io/docs/configuration.html#plugins
    plugins: [
      new ExtractTextPlugin('[name].[hash].css', {disable: !BUILD}),
      new HtmlWebpackPlugin({
        template: './index.html',
        inject: 'body'
      })
    ],

    // Dev server configuration
    devServer: {
      contentBase: outputPath,
      stats: {
        modules: false,
        cached: false,
        colors: true,
        chunk: false
      },
      proxy
    }
  };

  // Add build specific plugins
  if (BUILD) {
    config.plugins.push(
      new webpack.NoErrorsPlugin(),
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.UglifyJsPlugin()
    );
  }

  return config;
}
