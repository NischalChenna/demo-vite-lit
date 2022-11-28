module.exports = [
  {
    module: {
      rules: [
        {
          test: /\.scss$/,
          exclude: /node_modules/,
          use: [
            {
              loader: "lit-css-loader",
            },
            {
              loader: "sass-loader",
              options: {
                sassOptions: {
                  outputStyle: "compressed",
                },
              },
            },
          ],
        },
      ],
    },
  },
];
