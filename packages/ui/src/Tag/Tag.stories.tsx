import {Meta} from '@storybook/react';
import React from 'react';
import TableGuides, {
  TableGuidesProps,
} from '../../../../.storybook/TableGuides';
import Tag, {TagProps} from './index';
import Avatar from '../Avatar';
import src from '../Avatar/avatar.png';

export default {
  title: 'Tag',
  component: Tag,
} as Meta;

type TagStoryMeta = Omit<
  TableGuidesProps<TagProps & {state: TagState}>,
  'Component'
>;

const sizes: TagProps['size'][] = ['l', 'm', 's'];

enum TagState {
  NORMAL = 'normal',
  ACTIVE = 'active',
  CHOSEN = 'chosen',
  DISABLED = 'disabled',
}

const states: TagState[] = [
  TagState.NORMAL,
  TagState.ACTIVE,
  TagState.CHOSEN,
  TagState.DISABLED,
];

const meta: TagStoryMeta = {
  cols: sizes.map((size) => ({
    key: size,
    props: {size},
  })),
  rows: states.map((state) => ({
    key: state,
    props: {state},
  })),
};

const tableTemplate = () => (args) => {
  return (
    <TableGuides
      cols={meta.cols}
      rows={meta.rows}
      Component={(props) => {
        console.log(props);
        return (
          <Tag
            {...args}
            {...props}
            active={props.state === TagState.ACTIVE}
            current={props.state === TagState.CHOSEN}
            disabled={props.state === TagState.DISABLED}
          />
        );
      }}
    />
  );
};

export const TagStory = tableTemplate().bind({});
TagStory.args = {
  children: 'Тестовый тэг',
};

const template = () => (args) => <Tag {...args} />;

export const TagWithLeadingStory = template().bind({});
TagWithLeadingStory.args = {
  children: 'Тестовый тэг',
  leading: <Avatar src={src} isOnline />,
};
