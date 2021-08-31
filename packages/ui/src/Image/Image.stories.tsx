import React from 'react';
import {Story, Meta} from '@storybook/react';
import Image, {ImageProps} from './index';
import Title from '../Typography/Title';

import src from './image.jpg';

export default {
  title: 'Image',
  component: Image,
} as Meta;

const blockStyles = {marginBottom: '32px'};
const titlePrimaryStyles = {marginBottom: '24px'};
const titleSecondaryStyles = {marginBottom: '16px'};

const Template: Story<ImageProps> = (args) => {
  return (
    <div>
      <Title level={1} style={titlePrimaryStyles}>
        Изображение
      </Title>

      <div style={blockStyles}>
        <Title level={2} size="xl" style={titleSecondaryStyles}>
          Стандартное
        </Title>
        <Image {...args} src={src} />
      </div>

      <div style={blockStyles}>
        <Title level={2} size="xl" style={titleSecondaryStyles}>
          С закруглением
        </Title>
        <Image {...args} src={src} radius="m" />
      </div>

      <div style={blockStyles}>
        <Title level={2} size="xl" style={titleSecondaryStyles}>
          Lazy
        </Title>
        <Image {...args} src={src} radius="m" lazy />
      </div>

      <div style={blockStyles}>
        <Title level={2} size="xl" style={titleSecondaryStyles}>
          Fallback
        </Title>
        <Image {...args} src="error" radius="m" />
      </div>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  width: 300,
  height: 240,
};
