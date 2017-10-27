module.exports = {
  module: {
    loaders: [
      {
        test: /\.s[a|c]ss$/,
        loader: 'vue-style-loader!css-loader!sass-loader'
      },
    ]
  }
};
