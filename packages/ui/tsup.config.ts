import { defineConfig } from 'tsup'

export default defineConfig({
  format: ['esm'],
  splitting: false,
  // dts: true,
  sourcemap: false,
  clean: true,
  treeshake: true,
  minify: true,
})
