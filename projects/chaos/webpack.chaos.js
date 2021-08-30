const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    "bundle": [
      "@babel/polyfill",
      "./src/index.ts"
    ]
  },
  output: {
    filename : "index.js", 
    path: path.resolve("./build")
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
    alias: {
      core: path.resolve("../../core")
    }
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: [path.resolve('../../node_modules')],
        use: {
          loader: 'ts-loader',
        }
      },
      {
        test: /\.tsx?$/,
        exclude: [path.resolve('../../node_modules')],
        use: {
          loader: path.resolve("../../build/msl.js"),
          options: {
            delimiter: ".",
            resolution: ["chaos", "human", "humanoid", "default"]
          }
        }
      },
    ]
  }
};