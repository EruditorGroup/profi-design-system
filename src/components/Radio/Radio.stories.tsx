import React, {useState} from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Story, Meta} from '@storybook/react/types-6-0';

import Radio from './index';

export default {
  title: 'Form.Radio',
  component: Radio,
} as Meta;

const Template: Story = (args) => {
  const [selected, setSelected] = useState('default');
  return (
    <div>
      <Radio
        name="storybook"
        onChange={() => setSelected('simple')}
        checked={selected === 'simple'}
        value="simple"
        {...args}
      >
        Простой Radio
      </Radio>
      <Radio
        name="storybook"
        value="disabled"
        disabled
        style={{marginTop: '10px'}}
        {...args}
      >
        Disabled Radio
      </Radio>
      <Radio
        name="storybook"
        value="default"
        onChange={() => setSelected('default')}
        checked={selected === 'default'}
        style={{marginTop: '10px'}}
        {...args}
      >
        Выбранный по дефолту Radio
      </Radio>
      <Radio
        name="storybook"
        value="multiline"
        onChange={() => setSelected('multiline')}
        checked={selected === 'multiline'}
        style={{marginTop: '10px'}}
        {...args}
      >
        <div>Многострочный</div>
        <div>Многострочный</div>
        <div>Многострочный</div>
      </Radio>
    </div>
  );
};

export const Default = Template.bind({});
