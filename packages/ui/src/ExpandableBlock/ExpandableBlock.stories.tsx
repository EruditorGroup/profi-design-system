import React from 'react';
import {Story, Meta} from '@storybook/react';

import ExpandableBlock, {IProps} from './index';

export default {
  title: 'ExpandableBlock',
} as Meta;

const Template: Story<IProps> = ({...args}) => (
  <ExpandableBlock
    preview="Превью"
    content="Длинный текстттттттттттттттттттттт"
    {...args}
  />
);
export const BaseStory = Template.bind({});
BaseStory.storyName = 'Expandable';

export const PreviewClickable = Template.bind({});
PreviewClickable.storyName = 'Expandable through preview click';
PreviewClickable.args = {
  previewIsClickable: true,
};
