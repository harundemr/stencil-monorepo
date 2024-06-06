import { Component, Prop, Event, EventEmitter, h, Method, Element } from '@stencil/core';

@Component({
  tag: 'my-input',
  shadow: true,
})
export class MyInput {
  private inputElement: HTMLInputElement;
  @Element() el;
  @Prop({ mutable: true }) value: string;
  @Prop() label: string;
  @Prop() type: string = 'text';

  @Event() valueChange: EventEmitter<string>;
  @Event() secretEvent: EventEmitter<string>;

  @Method()
  async ExampleMethod(value: string) {
    console.log('stencil component example method worked! --> ', value);
  }

  handleInput(event: Event) {
    const target = event.target as HTMLInputElement;
    this.value = target.value;

    this.inputElement.value = this.value;
    this.valueChange.emit(this.value);
    if (this.value === 'key') {
      this.secretEvent.emit('kilit açıldı');
    }
  }

  render() {
    return (
      <div>
        <input ref={el => (this.inputElement = el)} type={this.type} value={this.value} placeholder={this.label} onInput={event => this.handleInput(event)} />
      </div>
    );
  }
}
