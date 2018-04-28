module.exports = {
    mode: 'development',
    entry: './src/script1.js',
    output: {
      path: __dirname + '/dist',
      filename: 'bundle.js'
    },

    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules)/,
          loader: 'babel-loader',
          query:{
            presets:['es2015']
          }
        },
        {
          test: /\.css$/,
          loader: 'style-loader!css-loader'
        },
        {
          test: /\.scss$/,
          loader: 'style-loader!css-loader!sass-loader'
        }
      ]
    }
  };