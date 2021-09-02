const { pnpPlugin } = require('@yarnpkg/esbuild-plugin-pnp')

require('esbuild').build({
  entryPoints: ['src/index.ts'],
  bundle: true,
  outfile: 'bundle/check-node-version.js',
  platform: 'node',
  target: 'node14',
  plugins: [
    pnpPlugin(),
  ],
}).catch(() => process.exit(1))
