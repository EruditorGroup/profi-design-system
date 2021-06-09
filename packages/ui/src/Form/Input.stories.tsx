import React from 'react';
import {Story, Meta} from '@storybook/react';

import TableGuides, {
  TableGuidesProps,
} from '../../../../.storybook/TableGuides';

import {Input} from './index';
import type {InputProps} from './index';

export default {
  title: 'Form/Input',
  component: Input,
} as Meta;

const INPUT_SIZES: NonNullable<InputProps['size']>[] = ['l', 'm', 's', 'xl'];
const FLOATINGLABEL_INPUT_SIZES: NonNullable<InputProps['size']>[] = ['l', 'm'];

type InputStoryMeta = Omit<TableGuidesProps<InputProps>, 'Component'> & {
  name: string;
};

const textFieldStoryMeta: InputStoryMeta = {
  name: 'Text field',
  cols: INPUT_SIZES.map((size) => ({key: size, props: {size}})),
  rows: [
    {
      key: 'Normal',
    },
    {
      key: 'Disabled',
      props: {disabled: true},
    },
    {
      key: 'Empty',
      props: {defaultValue: ''},
    },
    {
      key: 'Error',
      props: {invalid: true},
    },
    {
      key: 'Error (empty)',
      props: {invalid: true, defaultValue: ''},
    },
  ],
};

const floatingLabelStoryMeta: InputStoryMeta = {
  name: 'Floating Label Text field',
  cols: FLOATINGLABEL_INPUT_SIZES.map((size) => ({key: size, props: {size}})),
  rows: [
    {
      key: 'Normal',
      props: {defaultValue: 'Text Field'},
    },
    {
      key: 'Disabled',
      props: {disabled: true},
    },
    {
      key: 'Empty',
      props: {defaultValue: ''},
    },
    {
      key: 'Error',
      props: {defaultValue: 'Text Field', invalid: true},
    },
    {
      key: 'Error (empty)',
      props: {defaultValue: '', invalid: true},
    },
  ],
};

const templateFactory: (meta: InputStoryMeta) => Story<InputProps> = (
  meta,
) => ({defaultValue = 'Text', placeholder = 'Label', ...args}) => (
  <TableGuides
    cols={meta.cols}
    rows={meta.rows}
    forceCollWidth="200px"
    Component={(props) => (
      <Input
        defaultValue={defaultValue}
        placeholder={placeholder}
        {...args}
        {...props}
      />
    )}
  />
);

export const TextFieldStory = templateFactory(textFieldStoryMeta).bind({});
TextFieldStory.storyName = textFieldStoryMeta.name;

export const WithLabels = templateFactory(floatingLabelStoryMeta).bind({});
WithLabels.storyName = floatingLabelStoryMeta.name;
WithLabels.args = {withFloatLabel: true};
