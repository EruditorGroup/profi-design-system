import React from 'react';
import {Story, Meta} from '@storybook/react';

import TableGuides, {
  TableGuidesProps,
} from '../../../../.storybook/TableGuides';

import Avatar, {AvatarProps} from './index';
import src from './avatar.png';

export default {
  title: 'Avatar',
  component: Avatar,
} as Meta;

const AVATAR_DESIGNS: NonNullable<AvatarProps['design']>[] = ['rect', 'circle'];
const AVATAR_SIZES: NonNullable<AvatarProps['size']>[] = [
  'xxl',
  'xl',
  'l',
  'm',
  's',
  'xs',
];

type AvatarStoryMeta = Omit<
  TableGuidesProps<Omit<AvatarProps, ''>>,
  'Component'
> & {
  name: string;
};

const avatarStoryMeta: AvatarStoryMeta = {
  name: 'Text field',
  cols: AVATAR_SIZES.map((size) => ({
    key: size.toLocaleUpperCase(),
    props: {size},
  })),
  rows: AVATAR_DESIGNS.map((design) => ({key: design, props: {design}})),
};

const Template: Story<AvatarProps> = (args) => (
  <TableGuides
    cols={avatarStoryMeta.cols}
    rows={avatarStoryMeta.rows}
    Component={(props) => <Avatar src={src} {...args} {...props} />}
  />
);

export const Default = Template.bind({});
Default.args = {
  username: 'Василий Иванов',
};

export const Online = Template.bind({});
Online.args = {
  isOnline: true,
};

export const Placeholder = Template.bind({});
Placeholder.args = {
  src: undefined,
  username: 'Username',
};
