import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';
import dts from 'rollup-plugin-dts';

export default [
  {
    input: 'src/index.ts',
    external: ['katex', 'react'],
    plugins: [
      terser(),
      typescript({
        tsconfig: 'tsconfig.json',
        declaration: true,
        declarationDir: 'types',
        rootDir: 'src',
        sourceMap: false,
      }),
    ],
    output: [
      {
        file: 'lib/index.js',
        name: 'UseSptruzKaTeX',
        format: 'cjs',
        sourcemap: false,
      },
      {
        file: 'lib/index.mjs',
        name: 'UseSptruzKaTeX',
        format: 'es',
        sourcemap: false,
      },
    ],
  },
  {
    input: 'lib/types/index.d.ts',
    external: ['katex', 'react'],
    plugins: [dts()],
    output: [{ file: 'lib/index.d.ts', format: 'es' }],
  },
];
