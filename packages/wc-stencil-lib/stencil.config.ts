import { Config } from '@stencil/core';
import { ComponentModelConfig, vueOutputTarget } from '@stencil/vue-output-target';
import { reactOutputTarget } from '@stencil/react-output-target';
import { angularOutputTarget } from '@stencil/angular-output-target';

const componentModels: ComponentModelConfig[] = [
  {
    elements: ['my-input'],
    event: 'valueChange',
    targetAttr: 'value',
  },
];


export const config: Config = {
  namespace: 'wc-stencil-lib',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    vueOutputTarget({
      componentCorePackage: 'wc-stencil-lib',
      proxiesFile: '../wc-vue-lib/lib/components.ts',
      componentModels: componentModels,
    }),
    reactOutputTarget({
      componentCorePackage: 'wc-stencil-lib',
      proxiesFile: '../wc-react-lib/lib/components/stencil-generated/index.ts',
      includePolyfills: true
    }),
    // angularOutputTarget({
    //   componentCorePackage: 'wc-stencil-lib',
    //   outputType: 'component',
    //   directivesProxyFile: '../angular-workspace/projects/component-library/src/lib/stencil-generated/components.ts',
    //   directivesArrayFile: '../angular-workspace/projects/component-library/src/lib/stencil-generated/index.ts',
    // }),
    {
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'auto-define-custom-elements',
      externalRuntime: false,
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  testing: {
    browserHeadless: 'new',
  },
};
