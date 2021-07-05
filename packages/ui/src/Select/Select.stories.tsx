import React, {useCallback, useState} from 'react';
import {Story, Meta} from '@storybook/react';

import Select, {SelectProps} from './index';
import {
  CloseIcon,
  DotIcon,
  LocationIcon,
  StarIcon,
} from '@eruditorgroup/profi-icons';
import Text from '../Typography/Text';

export default {
  title: 'Select',
  component: Select,
} as Meta;

const Template: Story<SelectProps> = (args) => {
  return (
    <>
      <Select
        style={{margin: '10px'}}
        leading={<Text color="muted">От</Text>}
        {...args}
      >
        <Select.Option value="00:00">00:00</Select.Option>
        <Select.Option value="01:00" leading={<StarIcon />}>
          01:00
        </Select.Option>
        <Select.Option value="03:00" trailing={<LocationIcon />}>
          03:00
        </Select.Option>
        <Select.Option
          disabled
          value="04:00"
          trailing={<CloseIcon />}
          leading={<DotIcon />}
        >
          disabled
        </Select.Option>
      </Select>
      <Select
        style={{margin: '10px'}}
        leading={<Text color="muted">До</Text>}
        {...args}
      >
        <Select.Option value="00:00">00:00</Select.Option>
        <Select.Option value="01:00" leading={<StarIcon />}>
          01:00
        </Select.Option>
        <Select.Option value="02:00" trailing={<LocationIcon />}>
          03:00
        </Select.Option>
        <Select.Option
          disabled
          value="04:00"
          trailing={<CloseIcon />}
          leading={<DotIcon />}
        >
          disabled
        </Select.Option>
        <Select.Option value="00:00">00:00</Select.Option>
        <Select.Option value="01:00" leading={<StarIcon />}>
          01:00
        </Select.Option>
        <Select.Option value="02:00" trailing={<LocationIcon />}>
          03:00
        </Select.Option>
        <Select.Option
          disabled
          value="04:00"
          trailing={<CloseIcon />}
          leading={<DotIcon />}
        >
          disabled
        </Select.Option>
      </Select>
    </>
  );
};

export const Default = Template.bind({});
Default.args = {};
