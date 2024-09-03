import React, {useEffect} from 'react';
import {Story, Meta} from '@storybook/react';

import {ToastProps} from './index';
import {ToastController} from './controller';
import {showToast} from './api';

export default {
  title: 'Toast',
} as Meta;

const Template: Story<ToastProps> = (args) => {
  useEffect(() => {
    showToast('Код не подходит.', {permanent: true, withCloseIcon: true});
  }, []);

  return <ToastController />;
};

export const Default = Template.bind({});
Default.storyName = 'Default';
Default.args = {};
