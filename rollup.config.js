import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';

import builtins from 'builtin-modules';

export default {
  external: builtins,
  input: 'index.js',
  output: {
    dir: 'out',
    exports: 'named',
    format: 'cjs',
  },
  plugins: [
    commonjs(),
    resolve(),
  ],
}
