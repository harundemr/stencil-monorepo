// packages/vue-library/lib/plugin.ts

import { Plugin } from 'vue';
import { applyPolyfills, defineCustomElements } from 'monorepo-stencil-stencil-library/loader';

export const ComponentLibrary: Plugin = {
  async install() {
    //applyPolyfills().then(() => {
      defineCustomElements();
    //});
  },
};