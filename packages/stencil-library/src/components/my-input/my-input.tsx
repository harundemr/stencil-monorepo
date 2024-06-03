import { Component, Prop, Event, EventEmitter, h, Method } from '@stencil/core';

@Component({
  tag: 'my-input'
})
export class MyInput {
  @Prop({ mutable: true }) value: string;
  @Prop() label: string;
  @Prop() type: string;

  @Event() valueChange: EventEmitter<string>;

  @Method()
  async ExampleMethod() {
    alert('example method worked');
  }

  handleInput(event: Event) {
    const target = event.target as HTMLInputElement;
    this.value = target.value;
    this.valueChange.emit(this.value);
  }

  render() {
    return (
      <div>
        <label>input label</label>
        <input type={this.type} value={this.value} placeholder={this.label}  onInput={event => this.handleInput(event)} />
      </div>
    );
  }
}
