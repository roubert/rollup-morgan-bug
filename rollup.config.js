import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';
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
    replace({
      include: 'node_modules/morgan/index.js',
      'morgan.format': 'format',
      'morgan.token': 'token',
    }),
    resolve(),
  ],
}
