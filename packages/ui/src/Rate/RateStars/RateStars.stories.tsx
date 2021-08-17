import React, {useEffect, useRef} from 'react';
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

const Template: Story<RateStarsProps & {hovered?: boolean}> = ({
  hovered,
  ...args
}) => (
  <TableGuides
    cols={rateStoryMeta.cols}
    rows={rateStoryMeta.rows}
    Component={(props) => {
      const ref = useRef<HTMLDivElement | null>(null);
      useEffect(() => {
        if (!hovered) return;
        const event = new MouseEvent('mouseover', {
          bubbles: true,
          cancelable: true,
        });

        ref.current.dispatchEvent(event);
      }, [hovered]);

      return <RateStars ref={ref} {...args} {...props} />;
    }}
  />
);

export const Default = Template.bind({});
Default.storyName = 'Default';
Default.args = {
  onChange: undefined,
};

export const Hover = Template.bind({});
Hover.storyName = 'Hover';
Hover.args = {
  onChange: undefined,
  hovered: true,
};
