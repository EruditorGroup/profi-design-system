import React from 'react';
import {Story, Meta} from '@storybook/react';

import TableGuides, {TableGuidesProps} from '../../../.storybook/TableGuides';

import * as icons from './index';
import {IconPropsType} from './_types';
import {IColor} from '@eruditorgroup/profi-toolkit';

export default {
  title: 'Icons',
} as Meta;

type IconStoryMeta = Omit<
  TableGuidesProps<
    Omit<IconPropsType, ''> & {colKey?: string; rowKey?: string}
  >,
  'Component'
> & {
  name: string;
};

type Icons = {
  [key: string]: React.ForwardRefExoticComponent<IconPropsType>;
};

const AVAILABLE_ICON_KEYS = Object.keys(icons).filter(
  (key) => (icons as Icons)[key].displayName,
);

const ICON_SIZES = [
  {size: 28, label: '28 XXL'},
  {size: 22, label: '22 XL'},
  {size: 17, label: '17 L'},
  {size: 15, label: '15 M'},
  {size: 13, label: '13 S'},
];

const iconStoryMeta: IconStoryMeta = {
  name: 'Icons',
  cols: AVAILABLE_ICON_KEYS.map((key) => ({
    key: (icons as Icons)[key].displayName!,
  })),
  rows: ICON_SIZES.map(({size, label}) => ({
    key: size,
    label,
    props: {
      style: {fontSize: `${size}px`},
    },
  })),
};

// To add icon to this story you should add export your icon inside './index.tsx'
export const IconsStory: Story<{color: IColor}> = (args) => (
  <TableGuides
    withCellKeyProps
    cols={iconStoryMeta.cols}
    rows={iconStoryMeta.rows}
    Component={({colKey, rowKey, ...props}) => {
      const Component = (icons as Icons)[colKey ?? ''];
      if (!Component) {
        throw new Error(`Fail to render ${colKey}: got ${Component}`);
      }
      return (
        <div style={{textAlign: 'center'}}>
          <Component {...args} {...props} />
        </div>
      );
    }}
  />
);

IconsStory.args = {color: 'primary'};
IconsStory.storyName = 'Icons';
