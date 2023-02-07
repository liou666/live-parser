import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['./index.ts'],
  format: ['esm'],
  dts: true,
  splitting: false,
  sourcemap: false,
  clean: true,
  treeshake: true,
  minify: true,
  external: ['esnext'],
  target: 'esnext',
  banner: {
    js: 'import { createRequire } from \'module\';const require = createRequire(import.meta.url);',
  },
  platform: 'node',
})
