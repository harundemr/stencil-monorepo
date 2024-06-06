import { Component, Prop, State, Method, h } from '@stencil/core';

@Component({
  tag: 'my-dialog',
  styleUrl: 'my-dialog.css',
  shadow: true
})
export class MyDialog {
  @State() isOpen: boolean = false;
  @Prop() onOk: () => void;
  @Prop() onCancel: () => void;

  @Method()
  async open(onOk: () => void, onCancel: () => void) {
    this.onOk = onOk;
    this.onCancel = onCancel;
    this.isOpen = true;
  }

  close() {
    this.isOpen = false;
  }

  handleOk() {
    if (this.onOk) {
      this.onOk();
    }
    this.close();
  }

  handleCancel() {
    if (this.onCancel) {
      this.onCancel();
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
