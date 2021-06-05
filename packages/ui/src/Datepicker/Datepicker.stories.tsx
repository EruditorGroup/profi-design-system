import React from 'react';
import {Story, Meta} from '@storybook/react';

import {shiftDate} from '@eruditorgroup/profi-toolkit';

import Datepicker, {DatepickerProps} from './index';

export default {
  title: 'Form/Datepicker',
} as Meta;

const Template: Story<DatepickerProps> = ({...args}) => (
  <div className="preview">
    <StoryStyles />
    <Datepicker {...args} />
  </div>
);
export const BaseStory = Template.bind({});
BaseStory.storyName = 'Datepicker';
BaseStory.args = {
  value: shiftDate(new Date(), 1),
  minDate: new Date(),
};

const StoryStyles = () => (
  <style>{`
  .preview {
    max-width: 320px;
  }
  .preview-item {
    margin-bottom: 30px;
  }
  .preview-item_short {
    width: 220px;
  }
`}</style>
);
