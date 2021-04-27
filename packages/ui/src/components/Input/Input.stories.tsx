import React, {useRef, useState} from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Story, Meta} from '@storybook/react/types-6-0';

import Input, {InputProps} from './index';

export default {
  title: 'Form.Input',
  component: Input,
} as Meta;

const Template: Story<InputProps> = (args) => {
  const [value, setValue] = useState('');
  const ref = useRef();
  // args.value = value;
  // args.onChange = (ev) => setValue(ev.target.value);
  return (
    <div>
      <Input {...args} block placeholder="Статичный плейсхолдер" />
      <Input {...args} withFloatLabel placeholder="Плавающий плейсхолдер" />
      <Input {...args} placeholder="С маской" mask={'+9 999 999-99-99'} />
      <Input
        {...args}
        withFloatLabel
        placeholder="С маской и плавающим лейблом"
        mask={'+9 999 999-99-99'}
      />
      <Input
        {...args}
        withFloatLabel
        placeholder="Плавающий плейсхолдер с дефолтным значением"
        value={value || 'floated'}
      />
      <Input
        {...args}
        disabled
        withFloatLabel
        placeholder="Disabled"
        value={'Меня не отредактируешь'}
      />
      <h2>Focus state</h2>
      <Input
        ref={ref}
        {...args}
        placeholder="С маской"
        mask={'+9 999 999-99-99'}
      />
      Focused: {document.activeElement === ref.current ? 'true' : 'false'}
    </div>
  );
};

export const Default = Template.bind({});
