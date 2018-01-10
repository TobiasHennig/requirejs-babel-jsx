// This file configures the RequireJS paths for react, babel and the jsx plugin and starts
// the app.

require({
  paths: {
    'babel': '../node_modules/babel-standalone/babel.min',
    'jsx': '../jsx',
    'react-dom': '../node_modules/react-dom/umd/react-dom.development',
    'react': '../node_modules/react/umd/react.development',
  }
}, ['jsx!./app']);
