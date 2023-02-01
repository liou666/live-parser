import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['./app.ts'],
  format: ['esm'],
  // dts: false,
  splitting: false,
  sourcemap: false,
  clean: true,
  treeshake: true,
  minify: true,
})
