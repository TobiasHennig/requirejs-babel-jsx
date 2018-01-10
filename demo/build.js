// This file provides RequireJS options for the build process.

({
  baseUrl: '.',
  paths: {
    'babel': '../node_modules/babel.min',
    'jsx': '../jsx',
    'react-dom': '../node_modules/react-dom/umd/react-dom.development',
    'react': '../node_modules/react/umd/react.development',
    'requireLib': '../node_modules/requirejs/require'
  },
  include: ['requireLib'],
  name: 'main',
  optimize: 'none',
  out: 'main-build.js',
  stubModules: ['jsx']
})
