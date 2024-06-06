import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'my-layout',
  styleUrl: 'my-layout.css',
  shadow: true
})
export class MyLayout {
  render() {
    return (
      <Host>
        <div class="container">
          <header class="header">
            <slot name="header"></slot>
          </header>
          <aside class="sidebar">
            <slot name="sidebar"></slot>
          </aside>
          <section class="content">
            <slot name="content"></slot>
          </section>
        </div>
      </Host>
    );
  }
}
