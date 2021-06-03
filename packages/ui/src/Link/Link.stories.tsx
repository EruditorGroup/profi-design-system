import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Story, Meta} from '@storybook/react/types-6-0';

import Link, {LinkProps} from './index';

export default {
  title: 'Link',
  component: Link,
} as Meta;

const td = {
  color: `var(--ui-color-secondary})`,
  border: '1px solid #ececec',
};

export const Default: Story<LinkProps> = (args) => (
  <>
    <p>
      <Link {...args} to="#">
        Обычный линк
      </Link>
    </p>
    <p>
      <Link {...args} to="#" clear>
        Ссылка без стилей (для использования в качестве `as`)
      </Link>
    </p>
    <p>
      Lorem ipsum{' '}
      <Link {...args} to="#">
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
      <Link {...args} to="#" disabled>
        неактивный линк
      </Link>{' '}
      lorem ipsum
    </p>
    <p>
      Lorem ipsum{' '}
      <Link {...args} to="#" underlined>
        underlined link
      </Link>{' '}
      lorem ipsum
    </p>
    <p>
      Lorem ipsum{' '}
      <Link {...args} to="#" bold>
        bold link
      </Link>{' '}
      lorem ipsum
    </p>
  </>
);

export const Sizes: Story<LinkProps> = (args) => {
  return (
    <table cellPadding="10">
      <thead>
        <tr>
          <th></th>
          <th>Regular</th>
          <th>Bold</th>
        </tr>
      </thead>
      <tbody>
        {(['xs', 's', 'm', 'l'] as LinkProps['size'][]).map((size) => (
          <tr>
            <td style={td} key={size}>
              Link: {size.toUpperCase()}
            </td>
            <td style={td}>
              <Link size={size} to="#">
                Съешь ещё этих мягких французских булок
              </Link>
            </td>
            <td style={td}>
              <Link size={size} to="#" bold>
                Съешь ещё этих мягких французских булок
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
