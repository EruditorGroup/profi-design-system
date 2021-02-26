import React from 'react';
import {Story, Meta} from '@storybook/react/types-6-0';

import * as icons from './index';
import {IconPropsType} from './_types';

export default {
  title: 'Icons',
} as Meta;

const variants: IconPropsType[] = [
  {color: 'black'},
  {color: 'var(--color-darkGrey)', width: 40, height: 40},
  {color: 'var(--color-brand)', width: 80, height: 80},
];

// To add icon to this story you should add export your icon inside './index.tsx'
const Template: Story = () => {
  return (
    <>
      {Object.keys(icons)
        .filter((key) => icons[key].displayName)
        .map((key, i) => (
          <div key={i}>
            <h3>{icons[key].displayName}</h3>
            {variants.map((props, j) => {
              const Component = icons[key];
              return <Component {...props} key={j} />;
            })}
            <hr />
          </div>
        ))}
    </>
  );
};

export const List = Template.bind({});
