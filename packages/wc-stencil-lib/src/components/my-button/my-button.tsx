import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'my-button',
  styleUrl: 'my-button.css',
  shadow: true,
})
export class MyButton {
  @Prop() variant: string = "primary";
  @Prop() type: string = "button";
  @Prop() label: string = "";

  render() {
    return (
      <button class={this.variant} type={this.type}>{this.label}</button>
    );
  }

}
