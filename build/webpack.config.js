module.exports = {
  entry: {
    "index.ts": [
      "@babel/polyfill",
    ]
  },
  resolve: {
    modulesDirectories: ['node_modules'],
    extensions: ['', '.js', '.ts'],
  },
  module: {
    rules: [
      {
        test: /\.tsx$/,
        exclude: ["node_modules"],
        use: {
          loader: path.resolve("./msl.js")
        }
      },
      {
        test: /\.tsx?$/,
        exclude: ["node_modules"],
        use: {
          loader: 'ts-loader',
        }
      }
    ]
  }
};