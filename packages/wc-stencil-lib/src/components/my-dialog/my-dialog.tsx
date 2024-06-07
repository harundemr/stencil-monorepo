import { Component, State, Method, h, Event } from '@stencil/core';

@Component({
  tag: 'my-dialog',
  styleUrl: 'my-dialog.css',
  shadow: true
})
export class MyDialog {
  @State() isOpen: boolean = false;
  @Event() ok: () => void;
  @Event() cancel: () => void;

  @Method()
  async open(onOk: () => void, onCancel: () => void) {
    this.ok = onOk;
    this.cancel = onCancel;
    this.isOpen = true;
  }

  close() {
    this.isOpen = false;
  }

  handleOk() {
    if (this.ok) {
      this.ok();
    }
    this.close();
  }

  handleCancel() {
    if (this.cancel) {
      this.cancel();
    }
    this.close();
  }

  render() {
    return (
      <div class={{ 'dialog': true, 'open': this.isOpen }}>
        <div class="dialog-content">
          <slot></slot>
          <div class="dialog-actions">
            <button onClick={() => this.handleCancel()}>Cancel</button>
            <button onClick={() => this.handleOk()}>OK</button>
          </div>
        </div>
      </div>
    );
  }
}
