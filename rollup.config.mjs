import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';
import svg from 'rollup-plugin-svg';
import shadowRoot from './scripts/rollup-plugin-shadow-root.mjs';


export default {
  input: 'src/export/index.js',
  output: [
    {
      file: 'dist/bundle.cjs.js',
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: 'dist/bundle.esm.js',
      format: 'es',
      sourcemap: true,
    },
  ],
  external: ['react', 'react-dom'],
  plugins: [
    postcss({
      extensions: ['.css'],
      inject: false,  // Do not inject styles into JavaScript
      extract: true,  // Extract styles to a separate CSS file
    }),
    svg(),
    resolve({
      moduleDirectories: ['node_modules', 'src'],
      mainFields: ['module', 'main', 'browser'],
      customResolveOptions: {
        moduleDirectory: 'node_modules'
      }
    }),
    commonjs(),
    typescript({
      outDir: "./dist",
    }),
    //shadowRoot()
  ],
};
