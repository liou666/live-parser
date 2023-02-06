import { defineConfig } from 'tsup'
export default defineConfig({
  entry: ['./index.ts'],
  format: ['esm'],
  // dts: false,
  splitting: false,
  // sourcemap: true,
  clean: true,
  treeshake: true,
  external: ['esnext'],
  minify: true,
  target: 'esnext',
  banner: {
    js: 'import { createRequire } from \'module\';const require = createRequire(import.meta.url);',
  },
  platform: 'node',
})
