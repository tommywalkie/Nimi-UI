const images = require('@rollup/plugin-image')
const url = require('@rollup/plugin-url')
const svgr = require('@svgr/rollup').default

module.exports = {
  rollup(config, _options) {
    const external = config.external;
    config.external = id => (id.match(/.svg$/) ? false : external(id));
    config.plugins = [
      images({ include: ['**/*.png', '**/*.jpg'] }),
      url(),
      svgr({
        // configure however you like, this is just an example
        ref: true,
        memo: true,
        svgoConfig: {
          plugins: [
            { removeViewBox: false },
            { removeAttrs: { attrs: 'g:(stroke|fill):((?!^none$).)*' } }
          ],
        },
      }),
      ...config.plugins,
    ]
    if (config.output.format == 'cjs') {
        config.preserveModules = true
        config.output = { 
            ...config.output,
            dir: 'dist/',
            format: 'cjs',
            entryFileNames: '[name].js'
        }
        delete config.output.file
    }
    if (config.output.format == 'esm') {
        config.preserveModules = true
        config.output = { 
            ...config.output,
            dir: 'dist/',
            format: 'es',
            entryFileNames: '[name].esm.js'
        }
        delete config.output.file
    }

    return config
  },
}