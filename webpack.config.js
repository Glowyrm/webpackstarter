var webpack = require('webpack'); // Some demos use this, but I'm not sure why
var path = require('path'); // this one is handy

const PATHS = {
  // __dirname is a Node method that returns a string with the directory name...
  //... that the currently executing script resides in
  client: path.resolve(__dirname, 'src/app.js'),
  build: path.resolve(__dirname, 'dist')
}

module.exports = {
    devtool: 'inline-source-map',
    entry: PATHS.client,
    output: {
      path: PATHS.build,
      filename: 'app.bundle.js',
    },
    module: {
      loaders: [
        {
          // babel loader that looks for .js files (excludes the node_modules...
          //... directory, and transforms es2016 to es5, and JSX to Javascript)
          test: /.js$/,
          loader: 'babel',
          exclude: /node_modules/,
          query: {
            presets: ['es2015', 'react']
          }
        }
      ]
    }
  }
