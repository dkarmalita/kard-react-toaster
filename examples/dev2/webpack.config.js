const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer')
const cssEasyImport = require('postcss-easy-import')
const CompressionPlugin = require("compression-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const pkg = require('./package.json');

// const config = {
//   CDN: true,
// }


/**
 * Helper to transfet peerDependencies to object of externals
 * @param  {Object} peers - pkg.peerDependencies section
 * @return {Object} - { react: 'react', ... }
 */
// function peersToExternals(peers){
//   return Object.keys( peers || {} ).map( pkgName => pkgName )
//   .reduce((obj, cur, i) => { return { ...obj, [cur]: cur }; }, {});
// }

module.exports = (env,argv) => {

const isBuild = () => argv.mode ? argv.mode === 'production' : process.env.npm_lifecycle_event === 'build'

const scssLoaders = (modules = false) => [
  {
    loader: 'style-loader',
    options: {
      sourceMap: !isBuild(),
    },
  },
  {
    loader: 'css-loader',
    options: {
      importLoaders: 1,
      // url: false,
      modules: modules,
      localIdentName: '[name]_[local]_[hash:base64:5]',
    },
  },
  {
    loader: 'postcss-loader',
    options: {
      sourceMap: !isBuild(),
      plugins: () => [
        autoprefixer,
        cssEasyImport,
      ],
    },
  },
  {
    loader: 'sass-loader',
    options: {
      sourceMap: !isBuild(),
    },
  },
]

const buildPlugins = () => [

  new CompressionPlugin({
    // asset: "[path].gz[query]",
    algorithm: "gzip",
    test: /\.js$/,
    threshold: 10240,
    minRatio: 0.8
  }),

  new CleanWebpackPlugin(['./dist'], {
    root: __dirname, //  Useful when relative references are used in array
    verbose: true,
    dry: false,
    //  exclude: ['shared.js']
  }),

  new CopyWebpackPlugin([
    // Copy glob results (with dot files) to /absolute/path/
    { from: './static', to: '' },
  ], {
    ignore: [
      '.*',
      '_*',
      '*.bak',
    ],
    // By default, we only copy modified files during
    // a watch or webpack-dev-server build. Setting this
    // to `true` copies all files.
    copyUnmodified: true,
  }),
]

const devPlugins = () => [

  new webpack.HotModuleReplacementPlugin(),
]

const config = {
  target: 'web',

  mode: isBuild() ? 'production' : 'development',

  entry: [
    './src/index.jsx'
  ],

  // externals: peersToExternals(pkg.peerDependencies),
  externals : !argv.cdn ? {} : {
    react : 'React',
    'react-dom': 'ReactDOM',
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: [/node_modules/],
        use: [{
          loader: 'babel-loader',
          options: {
            ...JSON.parse(fs.readFileSync(path.resolve(__dirname, './.babelrc'))),
          }

        }]
      },
      {
        test: /\.module\.(css|scss)$/,
        use: scssLoaders(true), // FIXME

      },
      {
        test: /\.(css|scss)$/,
        exclude: /\.module\.(css|scss)$/,
        use: scssLoaders(),
      },
      {
        test: /\.png$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 8192,
            mimetype: 'image/png'
          }
        }]
      },
      {
        test: /\.jpg$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 8192,
            mimetype: 'image/jpg',
            name: '[name].[hash:7].[ext]',
          }
        }]
      },
      {
        test: /\.gif$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 8192,
            mimetype: 'image/gif',
            name: '[name].[hash:7].[ext]',
          }
        }]
      },
      {
        test: /.(svg?)(\?[a-z0-9]+)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          mimetype: 'image/svg+xml',
          name: '[name].[hash:7].[ext]',
          outputPath: 'assets/',
        },
      },
    ]
  },

  resolve: {
    extensions: ['*', '.js', '.jsx', '.scss'],
    modules: [
      "node_modules",
      'packages',
      'src'
    ],
    mainFields: [
      'module',
      'main'
    ],
    alias: {
      'package.json': path.resolve(__dirname, './package.json'),
      // 'react': path.resolve(__dirname, 'node_modules/react'),
      // 'react-dom': path.resolve(__dirname, '../..'),

      'src': path.resolve(__dirname, './src/'),
      '@kard/react-toaster': path.resolve(__dirname, '../../src/index.js'),
      // 'styles': path.resolve(__dirname, 'packages/components/src/styles'), // relative to the location of the webpack config file!
    },
  },

  output: {
    path: path.resolve(__dirname,  './dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },

  plugins: [

    ...( isBuild() ? buildPlugins() : devPlugins() ),

    /* We have do nothing for process.env.NODE_ENV. It is set by webpack */
    // new webpack.DefinePlugin({
    //   'process.env': { WP_ENV: JSON.stringify(process.env.NODE_ENV) },
    // }),

    new HtmlWebpackPlugin({
      removeComments:true,
      filename: 'index.html', // target name
      favid: Date.now(), // it is reffered in template and forced favicon get updated
      template: './src/index.ejs',
      publicPath: '/',
      inject: 'body',
      argv: argv,

      // ref:
      // * https://github.com/kangax/html-minifier#options-quick-reference
      // * https://kangax.github.io/html-minifier/
      // * http://perfectionkills.com/experimenting-with-html-minifier/
      minify: isBuild() ? {
        minifyCSS: true,
        minifyJS: true ,
        removeComments: true,
        collapseWhitespace: true,
      } : false,
    }),
  ],

  stats: {
    children: false,
    maxModules: 0,
  },

  devServer: {
    contentBase: './static',
    historyApiFallback: true,
    hot: true,
    compress: true,
    port: 9102,
    stats: {
      children: false,
      maxModules: 0,
    },
  }
};

// console.log('process.env.NODE_ENV',process.env.NODE_ENV)

//   console.log('DEV',argv.mode)
  // if (argv.mode === 'development') {
    // config.devtool = 'source-map';
  // }
  console.log('Build mode', isBuild())
  console.log('Using CDN(--cdn)', argv.cdn)
  console.log('externals',config.externals)
  return config
}
