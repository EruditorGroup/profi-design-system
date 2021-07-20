import React, {useState} from 'react';
import {Story, Meta} from '@storybook/react';

import Rate, {RateProps, MARKS_ARRAY} from './';
import TableGuides, {
  TableGuidesProps,
} from '../../../../.storybook/TableGuides';
import {Title} from '../Typography';

const RATE_SIZES: NonNullable<RateProps['size']>[] = ['s', 'm', 'l'];

export default {
  title: 'Rate',
  component: Rate,
} as Meta;

type RateStoryMeta = Omit<
  TableGuidesProps<Omit<RateProps, ''>>,
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

const Template: Story<RateProps> = (args) => (
  <TableGuides
    cols={rateStoryMeta.cols}
    rows={rateStoryMeta.rows}
    Component={(props) => <Rate {...args} {...props} />}
  />
);

export const Default = Template.bind({});
Default.args = {
  onChange: undefined,
};

const ControlledTemplate: Story<RateProps> = () => {
  const [controlledValue, setControlledValue] = useState('5+');
  return (
    <div>
      <Title level={1} size="xxl" style={{marginBottom: '16px'}}>
        Контроллируемый Rate
      </Title>
      <div style={{maxWidth: '350px'}}>
        <Rate value={controlledValue} onChange={setControlledValue} />
      </div>
    </div>
  );
};

export const Controlled = ControlledTemplate.bind({});
Controlled.storyName = 'Controlled';
Controlled.args = {};
