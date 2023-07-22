// rollup.config.js

/**
 * I preferably wanted to output this with best possible practices, so including the index.d.ts files,
 * but rollup does not really have a way to do that which I've found. It would work with tsc.
 */

const prefix = "dist";
import typescript from "@rollup/plugin-typescript";
import vue from 'rollup-plugin-vue'
import postcss from 'rollup-plugin-postcss';
// import terser from '@rollup/plugin-terser';

export default {
  input: "./src/index.ts",
  output: [
    {
      file: `${prefix}/esm/index.esm.js`,
      format: "esm",
    }
  ],
  plugins: [
    typescript(),
    vue({
      preprocessStyles: true
    }),
    postcss()
    // terser()
  ],
};
