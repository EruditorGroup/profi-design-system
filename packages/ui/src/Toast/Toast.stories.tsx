import React, {useEffect} from 'react';
import {Story, Meta} from '@storybook/react';

import {ToastProps, ToastController} from '.';
import {showToast} from './api';

export default {
  title: 'Toast',
} as Meta;

const Template: Story<ToastProps> = (args) => {
  useEffect(() => {
    showToast('Код не подходит.', {permanent: true});
  }, []);

  return <ToastController />;
};

export const Default = Template.bind({});
Default.storyName = 'Default';
Default.args = {};
