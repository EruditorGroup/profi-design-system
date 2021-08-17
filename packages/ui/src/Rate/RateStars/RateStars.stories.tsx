import React from 'react';
import {Story, Meta} from '@storybook/react';

import RateStars, {RateStarsProps, MARKS_ARRAY} from './';
import TableGuides, {
  TableGuidesProps,
} from '../../../../../.storybook/TableGuides';

const RATE_SIZES: NonNullable<RateStarsProps['size']>[] = ['s', 'm', 'l'];

export default {
  title: 'RateStars',
} as Meta;

type RateStoryMeta = Omit<
  TableGuidesProps<Omit<RateStarsProps, ''>>,
  'Component'
> & {
  name: string;
};

const rateStoryMeta: RateStoryMeta = {
  name: 'Text field',
  cols: RATE_SIZES.map((size) => ({
    key: size.toLocaleUpperCase(),
    props: {size},
  })),
  rows: [...MARKS_ARRAY, '5+'].map((mark) => ({
    key: mark,
    props: {value: mark},
  })),
};

const Template: Story<RateStarsProps> = (args) => (
  <TableGuides
    cols={rateStoryMeta.cols}
    rows={rateStoryMeta.rows}
    Component={(props) => <RateStars {...args} {...props} />}
  />
);

export const Default = Template.bind({});
Default.storyName = 'Default';
Default.args = {
  onChange: undefined,
};
