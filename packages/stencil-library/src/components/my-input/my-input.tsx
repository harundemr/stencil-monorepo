import { Component, Prop, Event, EventEmitter, h, Method } from '@stencil/core';

@Component({
  tag: 'my-input',
  shadow: true
})
export class MyInput {
  @Prop({ mutable: true }) value: string;
  @Prop() label: string;
  @Prop() type: string = "tezt";

  @Event() valueChange: EventEmitter<string>;

  @Method()
  async ExampleMethod(value: string) {
    console.log('stencil component example method worked! --> ', value);
  }

  handleInput(event: Event) {
    const target = event.target as HTMLInputElement;
    this.value = target.value;
    this.valueChange.emit(this.value);
  }

  render() {
    return (
      <div>
        <input type={this.type} value={this.value} placeholder={this.label}  onInput={event => this.handleInput(event)} />
      </div>
    );
  }
}
