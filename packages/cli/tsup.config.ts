import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['./index.ts'],
  format: ['esm'],
  // dts: false,
  splitting: false,
  sourcemap: true,
  clean: true,
  // treeshake: true,
  // minify: true,
})
