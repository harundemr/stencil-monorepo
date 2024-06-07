import { Config } from '@stencil/core';
import { ComponentModelConfig, vueOutputTarget } from '@stencil/vue-output-target';
import { reactOutputTarget } from '@stencil/react-output-target';
import { ValueAccessorConfig, angularOutputTarget } from '@stencil/angular-output-target';
import { sass } from '@stencil/sass';

const componentModels: ComponentModelConfig[] = [
  {
    elements: ['my-input'],
    event: 'valueChange',
    targetAttr: 'value',
  },
  {
    elements: ['my-text-field'],
    event: 'ifxInput',
    targetAttr: 'value',
  },
];

const angularValueAccessorBindings: ValueAccessorConfig[] = [
  {
    elementSelectors: ['my-input[type=text]'],
    event: 'myChange',
    targetAttr: 'value',
    type: 'text',
  },
];


export const config: Config = {
  namespace: 'wc-stencil-lib',
  outputTargets: [
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
    angularOutputTarget({
      componentCorePackage: 'wc-stencil-lib',
      outputType: 'component',
      directivesProxyFile: '../angular-workspace/projects/wc-angular-lib/src/lib/stencil-generated/components.ts',
      directivesArrayFile: '../angular-workspace/projects/wc-angular-lib/src/lib/stencil-generated/index.ts',
      valueAccessorConfigs: angularValueAccessorBindings
    }),
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
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
  plugins: [
    sass({
      injectGlobalPaths: ['src/global/variables.scss', 'src/global/main.scss']
    })
  ]
};
