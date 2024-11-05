const webpack = require('webpack');

/**@type {import('webpack').Configuration} */
module.exports = {
  entry: {
    'main': {
      import: './index.js',
      layer: 'main',
    },
    'second': {
      import: './index.js',
      layer: 'second',
    }
  },
  mode: 'development',
  experiments: {
    layers: true
  },
  plugins: [
    new webpack.DefinePlugin({
      __RUNTIME_TYPE__: '__webpack_layer__'
    })
  ]
}