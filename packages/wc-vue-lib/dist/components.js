import { defineContainer } from './vue-component-lib/utils';
export const MyButton = defineContainer('my-button', undefined, [
    'variant',
    'type',
    'label'
]);
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