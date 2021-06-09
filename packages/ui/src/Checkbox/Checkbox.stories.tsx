import React from 'react';
import type {Story, Meta} from '@storybook/react';

import TableGuides, {
  TableGuidesProps,
} from '../../../../.storybook/TableGuides';

import Checkbox from '.';
import type {CheckboxProps} from '.';

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
} as Meta;

type CheckboxStoryMeta = Omit<
  TableGuidesProps<Omit<CheckboxProps, ''>>,
  'Component'
> & {
  name: string;
};

const CHECKBOX_SIZES: CheckboxProps['size'][] = ['xxl', 'xl', 'l', 'm'];

const checkboxStoryMeta: CheckboxStoryMeta = {
  name: 'Checkbox',
  cols: CHECKBOX_SIZES.map((size) => ({
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

const Template: Story<CheckboxProps> = (args) => (
  <TableGuides
    cols={checkboxStoryMeta.cols}
    rows={checkboxStoryMeta.rows}
    Component={(props) => <Checkbox {...args} {...props} />}
  />
);

export const CheckboxStory = Template.bind({});
CheckboxStory.storyName = checkboxStoryMeta.name;
CheckboxStory.args = {
  children: 'Checkbox',
};
