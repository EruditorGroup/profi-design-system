import React from 'react';
import {Story, Meta} from '@storybook/react/types-6-0';
import classnames from 'classnames';

import * as icons from './index';
import {IconPropsType} from './_types';

export default {
  title: 'Icons',
} as Meta;

const sizes = [13, 15, 17, 22, 28];

type Icons = {
  [key: string]: React.ForwardRefExoticComponent<IconPropsType>;
};

// To add icon to this story you should add export your icon inside './index.tsx'
const Template: Story = () => {
  return (
    <table cellPadding="10">
      <thead>
        <tr>
          <th></th>
          {sizes.map((size) => (
            <th key={size}>{size}px</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {Object.keys(icons as Icons)
          .filter((key) => (icons as Icons)[key].displayName)
          .map((key, i) => (
            <tr
              key={i}
              style={{
                margin: '5px',
                padding: '0 10px 10px',
                border: '1px solid #ececec',
                width: '160px',
              }}
            >
              <td style={{textAlign: 'right'}}>
                {(icons as Icons)[key].displayName}
              </td>
              {sizes.map((size, j) => {
                const Component = (icons as Icons)[key];
                return (
                  <th
                    key={size}
                    style={{fontSize: `${size}px`, border: '1px solid #ececec'}}
                  >
                    <Component key={j} />
                  </th>
                );
              })}
            </tr>
          ))}
      </tbody>
    </table>
    // <div style={{display: 'flex', flexWrap: 'wrap'}}>
    //   {Object.keys(icons)
    //     .filter((key) => icons[key].displayName)
    //     .map((key, i) => (
    //       <div
    //         key={i}
    //         style={{
    //           margin: '5px',
    //           padding: '0 10px 10px',
    //           border: '1px solid #ececec',
    //           width: '160px',
    //         }}
    //       >
    //         <h3>{icons[key].displayName}</h3>
    //         {variants.map((props, j) => {
    //           const Component = icons[key];
    //           return <Component {...props} key={j} />;
    //         })}
    //       </div>
    //     ))}
    // </div>
  );
};

export const List = Template.bind({});
