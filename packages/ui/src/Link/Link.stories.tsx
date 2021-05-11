import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Story, Meta} from '@storybook/react/types-6-0';

import Link, {LinkProps} from './index';

export default {
  title: 'Link',
  component: Link,
} as Meta;

const Template: Story<LinkProps> = (args) => (
  <>
    <p>
      <Link to="/foo/bar" {...args}>
        Обычный линк
      </Link>
    </p>
    <p>
      Lorem ipsum{' '}
      <Link to="/foo/bar" {...args}>
        линк в тексте
      </Link>{' '}
      lorem ipsum
    </p>
    <p>
      Lorem ipsum{' '}
      <Link {...args} to="#" color="brand">
        с brand-цветом
      </Link>{' '}
      lorem ipsum
    </p>
    <p>
      Lorem ipsum{' '}
      <Link {...args} disabled>
        неактивный линк
      </Link>{' '}
      lorem ipsum
    </p>
  </>
);

export const Default = Template.bind({});
