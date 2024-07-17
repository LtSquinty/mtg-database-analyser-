import globals from "globals";
import pluginJs from "@eslint/js";
import pluginVue from "eslint-plugin-vue";

// Define additional globals
const additionalGlobals = {
  require: "readonly",
  process: "readonly"
};

export default [
  {files: ["**/*.{js,mjs,cjs,vue}"]},
  {languageOptions: { 
    globals: {
      ...globals.browser,
      ...additionalGlobals
    }
  }},
  pluginJs.configs.recommended,
  ...pluginVue.configs["flat/essential"],
];
