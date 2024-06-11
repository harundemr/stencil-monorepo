export default {
  title: 'Components/MyComponent',
};

const Template = args => `<my-component first="${args.first}"></my-component>`;

export const Example = Template.bind({});
Example.args = {
  first: 'test test',
};
