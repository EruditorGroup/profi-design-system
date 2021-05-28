import React, {CSSProperties} from 'react';
import {Story, Meta} from '@storybook/react';

import Notification, {NotificationProps} from './index';

const itemStyles: CSSProperties = {
  marginRight: '22px',
  marginBottom: '20px',
};

export default {
  title: 'Notification',
  component: Notification,
} as Meta;

const Template: Story<NotificationProps> = ({...args}) => (
  <div>
    <Notification style={itemStyles} />
    <Notification style={itemStyles} children="1" />
    <Notification style={itemStyles} children={25} />
    <Notification style={itemStyles} children="99+" />
    <Notification style={itemStyles}>
      Это может быть очень длинный лейбл, потому что мы не хотим ограничивать
      применение
    </Notification>
  </div>
);
export const Preview = Template.bind({});
