import React from 'react';
import {Story, Meta} from '@storybook/react';

import TableGuides, {
  TableGuidesProps,
  TableCell,
} from '../../../../.storybook/TableGuides';

import {ChevronDownIcon, CloseIcon} from '@eruditorgroup/profi-icons';

import Button, {ButtonProps} from './index';
import Spinner from '../Spinner';
import Avatar from '../Avatar';
import Link from '../Link';
import src from '../Avatar/avatar.png';

const BUTTON_DESIGNS: NonNullable<ButtonProps['design']>[] = [
  'primary',
  'secondary',
  'light',
  'transparent',
  'link',
];
const BUTTON_SIZES: NonNullable<ButtonProps['size']>[] = ['l', 'm', 's'];

export default {
  title: 'Button',
  component: Button,
} as Meta;

type ButtonStoryMeta = Omit<TableGuidesProps<ButtonProps>, 'Component'> & {
  name: string;
};

const fullStoryMeta: ButtonStoryMeta = {
  name: 'Button',
  cols: BUTTON_SIZES.map((size) => ({
    key: size,
    props: {size},
  })),
  rows: BUTTON_DESIGNS.reduce<TableCell<ButtonProps>[]>(
    (rows, design) => [
      ...rows,
      {key: `Normal`, span: 2, spanLabel: design, props: {design}},
      {key: `Disabled`, props: {design, disabled: true}},
    ],
    [],
  ),
};

const templateStoryMeta: ButtonStoryMeta = {
  name: '',
  cols: BUTTON_SIZES.map((size) => ({
    key: size,
    props: {size},
  })),
  rows: BUTTON_DESIGNS.map((design) => ({
    key: design,
    props: {design},
  })),
};

const templateFactory: (meta: ButtonStoryMeta) => Story<ButtonProps> = (
  meta,
) => ({children = 'Button', ...args}) => (
  <TableGuides
    cols={meta.cols}
    rows={meta.rows}
    forceRowHeight="50px"
    Component={(props) => (
      <div style={{textAlign: 'center'}}>
        <Button {...args} {...props}>
          {children}
        </Button>
      </div>
    )}
  />
);

export const BaseStory = templateFactory(fullStoryMeta).bind({});
BaseStory.storyName = fullStoryMeta.name;

export const RegularButtonStory = templateFactory(fullStoryMeta).bind({});
RegularButtonStory.storyName = 'Regular';
RegularButtonStory.args = {
  regular: true,
};

export const AsLinkStory = templateFactory(fullStoryMeta).bind({});
AsLinkStory.storyName = 'As Link';
AsLinkStory.args = {
  as: Link,
  children: 'Close',
  leading: <CloseIcon />,
  // @ts-ignore
  // не одупляет, что мы передали as={Link} и надо забрать его пропы.
  // Но тут и не сильно нужен тайп-чекинг
  to: '#',
};

export const RoundedStory = templateFactory(fullStoryMeta).bind({});
RoundedStory.storyName = 'Rounded';
RoundedStory.args = {
  children: <CloseIcon />,
  rounded: true,
};

export const LeadingAndTrailingComponentsStory = templateFactory(
  templateStoryMeta,
).bind({});
LeadingAndTrailingComponentsStory.storyName =
  'With Leading & Trailing components';
LeadingAndTrailingComponentsStory.args = {
  children: 'Василий Петрович',
  leading: <Avatar src={src} isOnline />,
  trailing: <ChevronDownIcon />,
};

export const WithLeftSpinnerStory = templateFactory(templateStoryMeta).bind({});
WithLeftSpinnerStory.storyName = 'With Left Spinner';
WithLeftSpinnerStory.args = {
  children: (
    <>
      <Spinner withRightPadding delay={1000} /> Button
    </>
  ),
};

export const WithRightSpinnerStory = templateFactory(templateStoryMeta).bind(
  {},
);
WithRightSpinnerStory.storyName = 'With Right Spinner';
WithRightSpinnerStory.args = {
  children: (
    <>
      <Spinner withRightPadding delay={1000} /> Button
    </>
  ),
};
