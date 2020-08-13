const path = require('path')

const WebpackObfuscator = require('webpack-obfuscator')

module.exports = (env, argv) => ({
  entry: path.resolve(process.cwd(), env.dir, 'solution.ts'),
  output: {
    path: path.resolve(process.cwd(), env.dir),
    filename: 'solution.js',
    library: env.library,
    libraryExport: 'default',
  },
  resolve: {
    extensions: ['.ts'],
  },
  module: {
    rules: [{ test: /\.ts$/, use: 'ts-loader' }],
  },
  plugins:
    argv.mode === 'production'
      ? [
          new WebpackObfuscator({
            deadCodeInjection: true,
            identifierNamesGenerator: 'mangled',
            rotateStringArray: true,
            selfDefending: true,
            splitStrings: true,
            splitStringsChunkLength: 2,
            target: 'node',
            transformObjectKeys: true,
            unicodeEscapeSequence: true,
          }),
        ]
      : [],
})
