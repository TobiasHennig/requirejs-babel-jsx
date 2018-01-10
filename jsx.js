define(() => {
  'use strict';

  const buildMap = {};

  return {
    version: '1.0.0',
    options: {plugins: [['transform-react-jsx', {useBuiltIns: true}]]}, // Babel transform options

    /**
     * RequireJS function to load the module and process it
     * @param {string}   name - Name of the module
     * @param {function} parentRequire - Local "require" function
     * @param {function} onload
     * @param {function} onload.fromText - Done loading callback with text
     * @param {function} onload.error - Done loading callback with error
     * @param {object}   config
     * @param {boolean}  config.isBuild - Build status
     */
    load: function(name, parentRequire, {fromText, error}, {isBuild}) {
      const url = parentRequire.toUrl(`${name}.js`);

      if (isBuild) {
        try {
          const text = require.nodeRequire('fs').readFileSync(url, 'utf8')
          const code = require.nodeRequire('babel-core').transform(text, this.options).code
          if (isBuild) buildMap[name] = code
          fromText(code)
        } catch (err) {
          error(err)
        }
      } else {
        parentRequire(['babel'], Babel => {
          fetch(url)
            .then(resp => resp.text())
            .then(text => Babel.transform(text, this.options).code)
            .then(code => fromText(code))
            .catch(err => error(err))
        });
      }
    },

    /**
     * RequireJS function to write module
     * @param {string} pluginName - Name of the plugin e.g. "jsx"
     * @param {string} moduleName - Name of the module
     * @param {function} write
     * @param {function} write.asModule - Write transformed module
     */
    write: function(pluginName, moduleName, {asModule}) {
      if (moduleName in buildMap) {
        asModule(`${pluginName}!${moduleName}`, buildMap[moduleName]);
      }
    }
  }
});
