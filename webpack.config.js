var path = require('path')
const merge = require('webpack-merge') 
var webpack = require('webpack')

const commonConfig = {
	output: {
    path: path.resolve(__dirname, './dist/'), 
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ],
      },      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
          }
          // other vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  externals: {
    moment: 'moment'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin( {
      minimize : true,
      sourceMap : false,
      mangle: true,
      compress: {
        warnings: false
      }
    })
  ]
}

module.exports = [

	// Config 1: For browser environment
  merge(commonConfig, {
  	entry: path.resolve(__dirname + '/src/plugin.js'),
    output: {
      filename: 'vue-clock.min.js',
    }
  }),

  // Config 2: For Node-based development environments
  merge(commonConfig, {
    entry: path.resolve(__dirname + '/src/Clock.vue'),
    output: {
      filename: 'vue-clock.js',
      libraryTarget: 'umd',

      // These options are useful if the user wants to load the module with AMD
      library: 'vue-clock',
      umdNamedDefine: true
    }
  })
]

 