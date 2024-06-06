/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface MyButton {
        "label": string;
        "type": string;
        "variant": string;
    }
    interface MyCard {
        "footer": string;
        "header": string;
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
    interface MyDialog {
        "onCancel": () => void;
        "onOk": () => void;
        "open": (onOk: () => void, onCancel: () => void) => Promise<void>;
    }
    interface MyInput {
        "ExampleMethod": (value: string) => Promise<void>;
        "label": string;
        "type": string;
        "value": string;
    }
    interface MyLayout {
    }
    interface MyTextField {
        "caption": string;
        "disabled": boolean;
        "error": boolean;
        "icon": string;
        "label": string;
        "optional": boolean;
        "placeholder": string;
        "required": boolean;
        "reset": () => Promise<void>;
        "size": string;
        "success": boolean;
        "value": string;
    }
}
export interface MyInputCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLMyInputElement;
}
export interface MyTextFieldCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLMyTextFieldElement;
}
declare global {
    interface HTMLMyButtonElement extends Components.MyButton, HTMLStencilElement {
    }
    var HTMLMyButtonElement: {
        prototype: HTMLMyButtonElement;
        new (): HTMLMyButtonElement;
    };
    interface HTMLMyCardElement extends Components.MyCard, HTMLStencilElement {
    }
    var HTMLMyCardElement: {
        prototype: HTMLMyCardElement;
        new (): HTMLMyCardElement;
    };
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLMyDialogElement extends Components.MyDialog, HTMLStencilElement {
    }
    var HTMLMyDialogElement: {
        prototype: HTMLMyDialogElement;
        new (): HTMLMyDialogElement;
    };
    interface HTMLMyInputElementEventMap {
        "valueChange": string;
        "secretEvent": string;
    }
    interface HTMLMyInputElement extends Components.MyInput, HTMLStencilElement {
        addEventListener<K extends keyof HTMLMyInputElementEventMap>(type: K, listener: (this: HTMLMyInputElement, ev: MyInputCustomEvent<HTMLMyInputElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLMyInputElementEventMap>(type: K, listener: (this: HTMLMyInputElement, ev: MyInputCustomEvent<HTMLMyInputElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLMyInputElement: {
        prototype: HTMLMyInputElement;
        new (): HTMLMyInputElement;
    };
    interface HTMLMyLayoutElement extends Components.MyLayout, HTMLStencilElement {
    }
    var HTMLMyLayoutElement: {
        prototype: HTMLMyLayoutElement;
        new (): HTMLMyLayoutElement;
    };
    interface HTMLMyTextFieldElementEventMap {
        "ifxInput": string;
    }
    interface HTMLMyTextFieldElement extends Components.MyTextField, HTMLStencilElement {
        addEventListener<K extends keyof HTMLMyTextFieldElementEventMap>(type: K, listener: (this: HTMLMyTextFieldElement, ev: MyTextFieldCustomEvent<HTMLMyTextFieldElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLMyTextFieldElementEventMap>(type: K, listener: (this: HTMLMyTextFieldElement, ev: MyTextFieldCustomEvent<HTMLMyTextFieldElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLMyTextFieldElement: {
        prototype: HTMLMyTextFieldElement;
        new (): HTMLMyTextFieldElement;
    };
    interface HTMLElementTagNameMap {
        "my-button": HTMLMyButtonElement;
        "my-card": HTMLMyCardElement;
        "my-component": HTMLMyComponentElement;
        "my-dialog": HTMLMyDialogElement;
        "my-input": HTMLMyInputElement;
        "my-layout": HTMLMyLayoutElement;
        "my-text-field": HTMLMyTextFieldElement;
    }
}
declare namespace LocalJSX {
    interface MyButton {
        "label"?: string;
        "type"?: string;
        "variant"?: string;
    }
    interface MyCard {
        "footer"?: string;
        "header"?: string;
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface MyDialog {
        "onCancel"?: () => void;
        "onOk"?: () => void;
    }
    interface MyInput {
        "label"?: string;
        "onSecretEvent"?: (event: MyInputCustomEvent<string>) => void;
        "onValueChange"?: (event: MyInputCustomEvent<string>) => void;
        "type"?: string;
        "value"?: string;
    }
    interface MyLayout {
    }
    interface MyTextField {
        "caption"?: string;
        "disabled"?: boolean;
        "error"?: boolean;
        "icon"?: string;
        "label"?: string;
        "onIfxInput"?: (event: MyTextFieldCustomEvent<string>) => void;
        "optional"?: boolean;
        "placeholder"?: string;
        "required"?: boolean;
        "size"?: string;
        "success"?: boolean;
        "value"?: string;
    }
    interface IntrinsicElements {
        "my-button": MyButton;
        "my-card": MyCard;
        "my-component": MyComponent;
        "my-dialog": MyDialog;
        "my-input": MyInput;
        "my-layout": MyLayout;
        "my-text-field": MyTextField;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "my-button": LocalJSX.MyButton & JSXBase.HTMLAttributes<HTMLMyButtonElement>;
            "my-card": LocalJSX.MyCard & JSXBase.HTMLAttributes<HTMLMyCardElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
            "my-dialog": LocalJSX.MyDialog & JSXBase.HTMLAttributes<HTMLMyDialogElement>;
            "my-input": LocalJSX.MyInput & JSXBase.HTMLAttributes<HTMLMyInputElement>;
            "my-layout": LocalJSX.MyLayout & JSXBase.HTMLAttributes<HTMLMyLayoutElement>;
            "my-text-field": LocalJSX.MyTextField & JSXBase.HTMLAttributes<HTMLMyTextFieldElement>;
        }
    }
}
