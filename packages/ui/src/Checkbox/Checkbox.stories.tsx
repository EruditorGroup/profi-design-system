import React, {useState} from 'react';
import Checkbox from '.';

// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import type {Story, Meta} from '@storybook/react/types-6-0';
import type {CheckboxProps} from '.'

export default {
  title: 'Checkbox',
  component: Checkbox,
} as Meta;

export const Default: Story<CheckboxProps> = (args) => {
  const [checked, setChecked] = useState(true);
  return (
    <div>
      {[
        <Checkbox {...args}>Простой checkbox</Checkbox>,
        <Checkbox disabled {...args}>
          Неактивный checkbox
        </Checkbox>,
        <Checkbox
          checked={checked}
          onChange={() => setChecked(!checked)}
          {...args}
        >
          Выбранный checkbox
        </Checkbox>,
        <Checkbox
          checked
          disabled
          onChange={() => setChecked(!checked)}
          {...args}
        >
          Выбранный неактивный checkbox
        </Checkbox>,
        <Checkbox {...args}>
          <div>Многострочный</div>
          <div>Многострочный</div>
          <div>Многострочный</div>
        </Checkbox>,
      ].map((i) => (
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
