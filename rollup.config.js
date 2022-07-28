import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'

export default [{
  input: './out/index.js',
  output: {
    file: './bin/index.js',
    format: 'cjs',
    banner: '#!/usr/bin/env node',
  },
  plugins: [
    resolve(),
    commonjs()
  ]
}, {
  input: './out/monitor_cube_server.js',
  output: {
    file: './bin/monitor_cube_server.js',
    format: 'cjs',
  },
  plugins: [
    resolve(),
    commonjs()
  ]
}]