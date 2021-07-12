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
  const [value, setValue] = useState<{value: string; label?: string}>({
    value: '07:00',
  });
  return (
    <>
      <Select
        value={value}
        onChange={(val) => setValue(val)}
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
        value={value}
        onChange={(val) => setValue(val)}
        style={{margin: '10px'}}
        leading={<Text color="muted">До</Text>}
        startScrollFrom={3}
        {...args}
      >
        <Select.Option value="00:00">00:00</Select.Option>
        <Select.Option value="01:00" leading={<StarIcon />}>
          01:00
        </Select.Option>
        <Select.Option value="02:00" trailing={<LocationIcon />}>
          02:00
        </Select.Option>
        <Select.Option
          disabled
          value="03:00"
          trailing={<CloseIcon />}
          leading={<DotIcon />}
        >
          03:00
        </Select.Option>
        <Select.Option value="04:00">04:00</Select.Option>
        <Select.Option value="05:00" leading={<StarIcon />}>
          05:00
        </Select.Option>
        <Select.Option value="06:00" trailing={<LocationIcon />}>
          06:00
        </Select.Option>
        <Select.Option
          disabled
          value="07:00"
          trailing={<CloseIcon />}
          leading={<DotIcon />}
        >
          07:00
        </Select.Option>
      </Select>
    </>
  );
};

export const Default = Template.bind({});
Default.args = {};
