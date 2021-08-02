import React from 'react';
import {Story, Meta} from '@storybook/react';

import {Input, Textarea} from './index';
import {CloseIcon, DotIcon, LocationIcon} from '@eruditorgroup/profi-icons';
import PhoneInput from './BarePhoneInput';
import GeoTag from '../GeoTag';

export default {
  title: 'Form/Preview',
} as Meta;

const Template: Story = ({placeholder = 'Label', ...args}) => {
  const onLocationClick: React.MouseEventHandler = (evt) => {
    // evt.stopPropagation();
    alert('Сейчас мы определим где ты находишься!');
  };

  return (
    <div className="preview">
      <style>{`.preview-item {margin: 20px 5px;}`}</style>
      <Input
        {...args}
        className="preview-item"
        placeholder="Ваш адрес"
        withFloatLabel
        autoFocus
        trailing={<LocationIcon onClick={onLocationClick} />}
      />
      <PhoneInput {...args} className="preview-item preview-item_short" />
      <Textarea
        {...args}
        minRows={3}
        className="preview-item"
        placeholder="Оставьте отзыв..."
        leading={<LocationIcon />}
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
      <Input
        {...args}
        upper={
          <>
            <GeoTag icon={<DotIcon color="#f68230" />} trailing={<CloseIcon />}>
              Профсоюзная
            </GeoTag>
            <GeoTag icon={<DotIcon color="#f68230" />} trailing={<CloseIcon />}>
              ВДНХ
            </GeoTag>
          </>
        }
        className="preview-item"
        placeholder="Введите метро"
      />
      <Input
        {...args}
        className="preview-item"
        placeholder="Эл. почта"
        invalid
      />
    </div>
  );
};
export const Preview = Template.bind({});
