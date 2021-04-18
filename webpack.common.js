const Webpack = require('webpack');

module.exports = {
  entry: {
    // vendor: './src/vendor.js',
    main: './src/index.js',
  },

  module: {
    rules: [
      {
        test: /\.html$/,
        use: ['html-loader'],
      },
      {
        test: /\.(jpg|jpeg|png|gif|svg|pdf)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'assets/fonts',
              esModule: false,
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new Webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
    }),
  ],
};
