import React, {useLayoutEffect, useRef, useState} from 'react';
import {Story, Meta} from '@storybook/react';

import RateStars, {RateStarsProps, MARKS_ARRAY} from './';
import TableGuides, {
  TableGuidesProps,
} from '../../../../../.storybook/TableGuides';

const RATE_SIZES: number[] = [20, 30, 54];

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
    key: size.toString().toLocaleUpperCase(),
    props: {style: {fontSize: `${size}px`}},
  })),
  rows: [...MARKS_ARRAY, '5+'].map((mark) => ({
    key: mark,
    props: {value: mark},
  })),
};

const Template: Story<RateStarsProps & {hovered?: boolean}> = ({
  hovered,
  ...args
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  useLayoutEffect(() => {
    if (!hovered) return;
    const event = new MouseEvent('mouseover', {
      bubbles: true,
      cancelable: true,
    });

    ref.current.dispatchEvent(event);
  }, [hovered]);

  return (
    <div style={{display: 'flex', flexDirection: 'row'}}>
      {RATE_SIZES.map((size) => (
        <div style={{display: 'flex', flexDirection: 'column'}}>
          {[...MARKS_ARRAY, '5+'].map((mark) => (
            <RateStars
              ref={ref}
              value={mark}
              style={{fontSize: `${size}px`}}
              {...args}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export const Default = Template.bind({});
Default.storyName = 'Default';
Default.args = {
  onChange: undefined,
};

export const Hover = Template.bind({});
Hover.storyName = 'Hover';
Hover.args = {
  onChange: () => {},
  hovered: true,
};

export const Stroked = Template.bind({});
Stroked.storyName = 'Stroked';
Stroked.args = {
  onChange: undefined,
  design: 'stroked',
};

export const Light = Template.bind({});
Light.storyName = 'Light';
Light.args = {
  onChange: undefined,
  design: 'light',
};
