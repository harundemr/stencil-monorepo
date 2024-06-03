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
  namespace: 'stencil-library',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    vueOutputTarget({
      componentCorePackage: 'stencil-library',
      proxiesFile: '../vue-library/lib/components.ts',
      componentModels: componentModels,
    }),
    reactOutputTarget({
      componentCorePackage: 'stencil-library',
      proxiesFile: '../react-library/lib/components/stencil-generated/index.ts',
      includePolyfills: true
    }),
    // angularOutputTarget({
    //   componentCorePackage: 'stencil-library',
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
