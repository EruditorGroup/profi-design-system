import React from 'react';
import {Story, Meta} from '@storybook/react';

import {Input, Textarea} from './index';
import {LocationIcon} from '@eruditorgroup/profi-icons';

export default {
  title: 'Form/Preview',
} as Meta;

const Template: Story = ({placeholder = 'Label', ...args}) => (
  <div className="preview">
    <StoryStyles />
    <Input
      {...args}
      className="preview-item"
      placeholder="Ваш адрес"
      trailing={<LocationIcon />}
    />
    <Input
      {...args}
      className="preview-item preview-item_short"
      mask="+7 999 999-99-99"
      placeholder="+7 961 903-00-59"
      leading={
        // Russian flag
        <div
          style={{
            height: '14px',
            width: '17px',
            borderRadius: '2px',
            background:
              'linear-gradient(-180deg, #fff 33.3%, #1653EF 33.3%, #1653EF 66.6%, #EE1B39 66.6%)',
            transform: 'translateY(-1.5px)',
          }}
        />
      }
    />
    <Textarea
      {...args}
      minRows={3}
      className="preview-item"
      placeholder="Оставьте отзыв..."
      leading={
        // Russian flag
        <div
          style={{
            height: '14px',
            width: '17px',
            borderRadius: '2px',
            background:
              'linear-gradient(-180deg, #fff 33.3%, #1653EF 33.3%, #1653EF 66.6%, #EE1B39 66.6%)',
            transform: 'translateY(-1.5px)',
          }}
        />
      }
    />
    <Input
      {...args}
      className="preview-item"
      placeholder="Ваше имя и фамилия"
    />
    <Input
      {...args}
      className="preview-item"
      placeholder="Поле заблокировано"
      disabled
    />
    <Input {...args} className="preview-item" placeholder="Эл. почта" invalid />
  </div>
);
export const Preview = Template.bind({});

const StoryStyles = () => (
  <style>{`
  .preview {
    width: 320px;
  }
  .preview-item {
    margin-bottom: 30px;
  }
  .preview-item_short {
    width: 220px;
  }
`}</style>
);
