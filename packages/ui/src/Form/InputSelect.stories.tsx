import React from 'react';
import {Story, Meta} from '@storybook/react';

import TableGuides, {
  TableGuidesProps,
} from '../../../../.storybook/TableGuides';

import {Input} from './index';
import type {InputProps} from './index';
import Select from '../Select';
import Space from '../Space';

export default {
  title: 'Form/Input Select',
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
      <Space direction="row">
        <Input
          defaultValue={defaultValue}
          placeholder={placeholder}
          {...args}
          {...props}
        />
        <Select
          size={props.size as InputProps['size']}
          placeholder="расстояние"
          style={{marginLeft: '10px'}}
        >
          <Select.Option value="sm">см.</Select.Option>
          <Select.Option value="dm">дм.</Select.Option>
          <Select.Option value="m">м.</Select.Option>
          <Select.Option value="km">км.</Select.Option>
        </Select>
      </Space>
    )}
  />
);

export const TextFieldStory = templateFactory(textFieldStoryMeta).bind({});
TextFieldStory.storyName = textFieldStoryMeta.name;

export const WithLabels = templateFactory(floatingLabelStoryMeta).bind({});
WithLabels.storyName = floatingLabelStoryMeta.name;
WithLabels.args = {withFloatLabel: true};
