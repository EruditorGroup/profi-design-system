import React, {useState} from 'react';
import Radio from '.';

// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import type {Story, Meta} from '@storybook/react/types-6-0';
import type {RadioProps} from '.';

export default {
  title: 'Radio',
  component: Radio,
} as Meta;

export const Default: Story<RadioProps> = (args) => {
  const [selected, setSelected] = useState('default');
  return (
    <div>
      {[<Radio
        name="storybook"
        onChange={() => setSelected('simple')}
        checked={selected === 'simple'}
        value="simple"
        {...args}
      >
        Простой Radio
      </Radio>,
      <Radio
        name="storybook"
        value="disabled"
        disabled
        {...args}
      >
        Disabled Radio
      </Radio>,
      <Radio
        name="storybook"
        value="default"
        onChange={() => setSelected('default')}
        checked={selected === 'default'}
        {...args}
      >
        Выбранный по дефолту Radio
      </Radio>,
      <Radio
        name="storybook"
        value="multiline"
        onChange={() => setSelected('multiline')}
        checked={selected === 'multiline'}
        {...args}
      >
        <div>Многострочный</div>
        <div>Многострочный</div>
        <div>Многострочный</div>
      </Radio>].map((i) => (
        <div style={{marginBottom: '10px'}}>{i}</div>
      ))}
      
    </div>
  );
};

Default.args = {
  size: 'm'
}

Default.argTypes = {
  size: {
    options: ['m', 'l', 'xl', 'xxl'],
    control: { type: 'radio' }
  }
}
