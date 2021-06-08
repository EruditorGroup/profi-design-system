import React from 'react';
import type {Story, Meta} from '@storybook/react';

import TableGuides, {
  TableGuidesProps,
} from '../../../../.storybook/TableGuides';

import Radio from '.';
import type {RadioProps} from '.';

export default {
  title: 'Form/Radio',
  component: Radio,
} as Meta;

type RadioStoryMeta = Omit<
  TableGuidesProps<Omit<RadioProps, ''>>,
  'Component'
> & {
  name: string;
};

const RADIO_SIZES: RadioProps['size'][] = ['xxl', 'xl', 'l', 'm'];

const radioStoryMeta: RadioStoryMeta = {
  name: 'Radio',
  cols: RADIO_SIZES.map((size) => ({
    key: size.toLocaleUpperCase(),
    props: {size},
  })),
  rows: [
    {key: 'On', props: {defaultChecked: true}},
    {key: 'Disabled', props: {defaultChecked: true, disabled: true}},
    {key: 'Off', props: {defaultChecked: false}},
    {key: 'Disabled', props: {defaultChecked: false, disabled: true}},
  ],
};

const Template: Story<RadioProps> = (args) => (
  <TableGuides
    cols={radioStoryMeta.cols}
    rows={radioStoryMeta.rows}
    Component={(props) => <Radio {...args} {...props} />}
  />
);

export const RadioStory = Template.bind({});
RadioStory.storyName = radioStoryMeta.name;
RadioStory.args = {
  children: 'Radiobutton',
};
