import React, {useState} from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Story, Meta} from '@storybook/react/types-6-0';

import Select from './index';

export default {
  title: 'Form.Select',
  component: Select,
} as Meta;

const Template: Story = (args) => {
  const [selected, setSelected] = useState<string>();

  const variants = ['Green', 'Blue', 'Orange', 'White', 'Black'];
  return (
    <div>
      <h3>Inline</h3>
      <Select
        selected={selected}
        onChange={(el) => setSelected(el.target.value)}
        {...args}
      >
        {variants.map((child) => (
          <Select.Option value={child}>{child}</Select.Option>
        ))}
      </Select>
      <Select
        selected={selected}
        onChange={(el) => setSelected(el.target.value)}
        {...args}
      >
        {variants.map((child) => (
          <Select.Option value={child}>{child}</Select.Option>
        ))}
      </Select>
      <Select
        selected={selected}
        onChange={(el) => setSelected(el.target.value)}
        {...args}
      >
        {variants.map((child) => (
          <Select.Option value={child}>{child}</Select.Option>
        ))}
      </Select>
      <hr />
      <h3>width 100% (block)</h3>
      <Select
        selected={selected}
        block
        placeholder="Label"
        onChange={(el) => setSelected(el.target.value)}
        {...args}
      >
        {variants.map((child) => (
          <Select.Option value={child}>{child}</Select.Option>
        ))}
      </Select>
      <h3>Float label</h3>
      <Select
        selected={selected}
        withFloatLabel
        block
        placeholder="Float label"
        onChange={(el) => setSelected(el.target.value)}
        {...args}
      >
        {variants.map((child) => (
          <Select.Option value={child}>{child}</Select.Option>
        ))}
      </Select>
      <h3>With default value</h3>
      <Select
        selected={selected || 'Green'}
        withFloatLabel
        block
        placeholder="Float label"
        onChange={(el) => setSelected(el.target.value)}
        {...args}
      >
        {variants.map((child) => (
          <Select.Option value={child}>{child}</Select.Option>
        ))}
      </Select>
    </div>
  );
};

export const Default = Template.bind({});
