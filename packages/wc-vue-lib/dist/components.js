import { defineContainer } from './vue-component-lib/utils';
export const MyButton = defineContainer('my-button', undefined, [
    'variant',
    'type',
    'label'
]);
export const MyCard = defineContainer('my-card', undefined, [
    'header',
    'footer'
]);
export const MyComponent = defineContainer('my-component', undefined, [
    'first',
    'middle',
    'last'
]);
export const MyDialog = defineContainer('my-dialog', undefined, [
    'ok',
    'cancel'
]);
export const MyInput = defineContainer('my-input', undefined, [
    'color',
    'accept',
    'autocapitalize',
    'autocomplete',
    'autocorrect',
    'autofocus',
    'clearInput',
    'clearOnEdit',
    'disabled',
    'enterkeyhint',
    'inputmode',
    'max',
    'maxlength',
    'min',
    'minlength',
    'multiple',
    'name',
    'pattern',
    'placeholder',
    'readonly',
    'required',
    'spellcheck',
    'step',
    'size',
    'type',
    'value',
    'myInput',
    'myChange',
    'myBlur',
    'myFocus'
], 'value', 'valueChange');
export const MyLayout = defineContainer('my-layout', undefined);
export const MyTable = defineContainer('my-table', undefined, [
    'columns',
    'data',
    'test'
]);
export const MyTextField = defineContainer('my-text-field', undefined, [
    'placeholder',
    'value',
    'error',
    'label',
    'icon',
    'caption',
    'size',
    'required',
    'optional',
    'success',
    'disabled',
    'ifxInput'
], 'value', 'ifxInput');
//# sourceMappingURL=components.js.map