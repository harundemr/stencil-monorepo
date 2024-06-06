import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'my-card',
  styleUrl: 'my-card.css',
  shadow: true
})
export class MyCard {
  @Prop() header: string;
  @Prop() footer: string;

  render() {
    return (
      <div class="card">
        {this.header && <div class="card-header">{this.header}</div>}
        <div class="card-content">
          <slot></slot>
        </div>
        {this.footer && <div class="card-footer">{this.footer}</div>}
      </div>
    );
  }
}
