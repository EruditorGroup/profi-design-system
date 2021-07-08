import React from 'react';
import {CloseIcon, DotIcon} from '@eruditorgroup/profi-icons';
import {Story, Meta} from '@storybook/react';

import Tag, {TagProps} from './index';
import Space from '../Space';

export default {
  title: 'Tag',
  component: Tag,
} as Meta;

const base64 =
  'PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iOXB0IiBoZWlnaHQ9IjlwdCIgdmlld0JveD0iMCAwIDkgOSIgdmVyc2lvbj0iMS4xIj4KPGcgaWQ9InN1cmZhY2UxOTYiPgo8cGF0aCBzdHlsZT0iIHN0cm9rZTpub25lO2ZpbGwtcnVsZTpub256ZXJvO2ZpbGw6cmdiKDkzLjcyNTQ5JSwxOC44MjM1MjklLDE0LjExNzY0NyUpO2ZpbGwtb3BhY2l0eToxOyIgZD0iTSA0LjUgNC41IEwgNC41IDAgQyA3Ljk2NDg0NCAwIDEwLjEyODkwNiAzLjc1IDguMzk4NDM4IDYuNzUgQyA2LjY2NDA2MiA5Ljc1IDIuMzM1OTM4IDkuNzUgMC42MDE1NjIgNi43NSAiLz4KPHBhdGggc3R5bGU9IiBzdHJva2U6bm9uZTtmaWxsLXJ1bGU6bm9uemVybztmaWxsOnJnYig3MC41ODgyMzUlLDgzLjUyOTQxMiUsMjcuNDUwOTglKTtmaWxsLW9wYWNpdHk6MTsiIGQ9Ik0gNC41IDQuNSBMIDAuNjAxNTYyIDYuNzUgQyAtMS4xMjg5MDYgMy43NSAxLjAzNTE1NiAwIDQuNSAwICIvPgo8cGF0aCBzdHlsZT0iIHN0cm9rZTpub25lO2ZpbGwtcnVsZTpub256ZXJvO2ZpbGw6cmdiKDk2LjA3ODQzMSUsNTAuOTgwMzkyJSwxOS4yMTU2ODYlKTtmaWxsLW9wYWNpdHk6MTsiIGQ9Ik0gNC41IDQuNSBMIDQuNSAwIEMgNy45NjQ4NDQgMCAxMC4xMjg5MDYgMy43NSA4LjM5ODQzOCA2Ljc1ICIvPgo8L2c+Cjwvc3ZnPgo=';

const Template: Story<TagProps> = (args) => {
  return (
    <>
      <Space bg="light" px={20} py={20}>
        <h2>Plain design</h2>
        <Tag {...args} trailing={<CloseIcon />}>
          Some tg
        </Tag>
        <Tag {...args} icon={<DotIcon color="red" />}>
          Some tg
        </Tag>
        <Tag {...args} icon={<DotIcon color="blue" />} trailing={<CloseIcon />}>
          Some tg
        </Tag>
        <Tag
          {...args}
          icon={{icon: base64, format: 'base64Svg'}}
          trailing={<CloseIcon />}
        >
          Some tg
        </Tag>
      </Space>
      <Space px={20} py={20}>
        <h2>Light design</h2>
        <Tag {...args} design="light" trailing={<CloseIcon />}>
          Some tg
        </Tag>
        <Tag {...args} design="light" icon={<DotIcon color="red" />}>
          Some tg
        </Tag>
        <Tag
          {...args}
          design="light"
          icon={<DotIcon color="blue" />}
          trailing={<CloseIcon />}
        >
          Some tg
        </Tag>
        <Tag
          {...args}
          design="light"
          icon={{icon: base64, format: 'base64Svg'}}
          trailing={<CloseIcon />}
        >
          Some tg
        </Tag>
      </Space>
    </>
  );
};

export const Default = Template.bind({});
Default.args = {};
