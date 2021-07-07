import React from 'react';
import {Story, Meta} from '@storybook/react';

import TableGuides, {
  TableGuidesProps,
} from '../../../../.storybook/TableGuides';

import {Textarea} from './index';
import type {TextareaProps} from './index';

export default {
  title: 'Form/Textarea',
  component: Textarea,
} as Meta;

const TEXTAREA_SIZES: NonNullable<TextareaProps['size']>[] = [
  'l',
  'm',
  's',
  'xl',
];
const FLOATINGLABEL_TEXTAREA_SIZES: NonNullable<TextareaProps['size']>[] = [
  'l',
  'm',
];

type TextareaStoryMeta = Omit<TableGuidesProps<TextareaProps>, 'Component'> & {
  name: string;
};

const TextFieldStoryMeta: TextareaStoryMeta = {
  name: 'Text field',
  cols: TEXTAREA_SIZES.map((size) => ({key: size, props: {size}})),
  rows: [
    {
      key: 'Normal',
      props: {},
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
const FloatingLabelStoryMeta: TextareaStoryMeta = {
  name: 'Floating Label Text field',
  cols: FLOATINGLABEL_TEXTAREA_SIZES.map((size) => ({
    key: size,
    props: {size},
  })),
  rows: [
    {
      key: 'Normal',
      props: {withFloatLabel: true, defaultValue: 'Text Field'},
    },
    {
      key: 'Disabled',
      props: {withFloatLabel: true, disabled: true},
    },
    {
      key: 'Empty',
      props: {withFloatLabel: true, defaultValue: ''},
    },
    {
      key: 'Error',
      props: {withFloatLabel: true, defaultValue: 'Text Field', invalid: true},
    },
    {
      key: 'Error (empty)',
      props: {withFloatLabel: true, defaultValue: '', invalid: true},
    },
  ],
};

const templateFactory: (meta: TextareaStoryMeta) => Story<TextareaProps> = (
  meta,
) => ({defaultValue = 'Text', placeholder = 'Label', ...args}) => (
  <TableGuides
    cols={meta.cols}
    rows={meta.rows}
    Component={(props) => (
      <Textarea
        defaultValue={defaultValue}
        placeholder={placeholder}
        block
        {...args}
        {...props}
      />
    )}
  />
);

export const TextFieldStory = templateFactory(TextFieldStoryMeta).bind({});
TextFieldStory.storyName = TextFieldStoryMeta.name;

export const WithLabels = templateFactory(FloatingLabelStoryMeta).bind({});
WithLabels.storyName = FloatingLabelStoryMeta.name;
