import { Plugin } from 'vue';
import { applyPolyfills, defineCustomElements } from 'wc-stencil-lib/loader';

export const ComponentLibrary: Plugin = {
  async install() {
    //applyPolyfills().then(() => {
      defineCustomElements();
    //});
  },
};