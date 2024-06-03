import { defineContainer } from './vue-component-lib/utils';
export const MyComponent = defineContainer('my-component', undefined, [
    'first',
    'middle',
    'last'
]);
export const MyInput = defineContainer('my-input', undefined, [
    'value',
    'label',
    'type',
    'valueChange'
], 'value', 'valueChange');
//# sourceMappingURL=components.js.map