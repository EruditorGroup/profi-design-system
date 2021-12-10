import React, {useLayoutEffect, useRef, useState} from 'react';
import {Story, Meta} from '@storybook/react';

import RateStars, {RateStarsProps, MARKS_ARRAY} from './';
import {Button} from '../..';

const RATE_SIZES: number[] = [51, 30, 20];

export default {
  title: 'RateStars',
  parameters: {
    controls: {include: ['design', 'value']},
  },
} as Meta<RateStarsProps>;

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
Default.args = {};

export const Hover = Template.bind({});
Hover.storyName = 'Hover';
Hover.args = {
  hovered: true,
};

export const Stroked = Template.bind({});
Stroked.storyName = 'Stroked';
Stroked.args = {
  design: 'stroked',
};

export const Light = Template.bind({});
Light.storyName = 'Light';
Light.args = {
  design: 'light',
};
