import React from 'react';
import {Story, Meta} from '@storybook/react';

import Input, {InputProps} from './index';

export default {
  title: 'Form/Input',
  component: Input,
} as Meta;

const TEXT_FIELD_SIZES: InputProps['size'][] = ['l', 'm', 's', 'xl'];
const FLOATING_LABEL_SIZES: InputProps['size'][] = ['l', 'm'];

const Template: Story<InputProps> = ({placeholder = 'Label', ...args}) => {
  const defaultValue = 'Text';

  const SIZES = args.withFloatLabel ? FLOATING_LABEL_SIZES : TEXT_FIELD_SIZES;

  return (
    <div>
      <StoryStyles />
      <table className="story-table">
        <thead>
          <tr>
            <th></th>
            {SIZES.map((s) => (
              <th key={s}>
                {s}
                <div className="story-size-guide"></div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="story-variant-guide">
              <div>Normal</div>
            </td>
            {SIZES.map((s) => (
              <td key={s}>
                <Input
                  {...args}
                  size={s}
                  defaultValue={defaultValue}
                  placeholder={placeholder}
                />
              </td>
            ))}
          </tr>
          <tr>
            <td className="story-variant-guide">
              <div>Disabled</div>
            </td>
            {SIZES.map((s) => (
              <td key={s}>
                <Input
                  {...args}
                  size={s}
                  defaultValue={defaultValue}
                  placeholder={placeholder}
                  disabled
                />
              </td>
            ))}
          </tr>
          <tr>
            <td className="story-variant-guide">
              <div>Empty</div>
            </td>
            {SIZES.map((s) => (
              <td key={s}>
                <Input
                  {...args}
                  size={s}
                  defaultValue=""
                  placeholder={placeholder}
                />
              </td>
            ))}
          </tr>
          <tr>
            <td className="story-variant-guide">
              <div>Error</div>
            </td>
            {SIZES.map((s) => (
              <td key={s}>
                <Input
                  {...args}
                  size={s}
                  defaultValue={defaultValue}
                  placeholder={placeholder}
                  invalid
                />
              </td>
            ))}
          </tr>
          <tr>
            <td className="story-variant-guide">
              <div>Error (empty)</div>
            </td>
            {SIZES.map((s) => (
              <td key={s}>
                <Input
                  {...args}
                  size={s}
                  defaultValue=""
                  placeholder={placeholder}
                  invalid
                />
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export const Default = Template.bind({});
Default.storyName = 'Text field';

export const WithLabels = Template.bind({});
WithLabels.storyName = 'Floating Label Text field';
WithLabels.args = {withFloatLabel: true};

const StoryStyles = () => (
  <style>{`
  .story-table {
    table-layout: fixed;
    border-collapse: collapse;
  }
  .story-table th {
    box-sizing: border-box;

    width: 200px;
    padding: 0 20px;

    border: 0;
    
    font-size: 15px;
    font-weight: 400;
    line-height: 20px;
    text-transform: uppercase;
  }
  .story-table th:first-of-type {
    width: 110px;
  }
  .story-table th:last-of-type {
    width: 240px;
  }
  .story-table td {
    padding: 15px 20px;
    border: 0;
    vertical-align: top;
  }

  .story-size-guide {
    box-sizing: border-box;

    position: relative;
    
    width: 100%;
    height: 9px;
    margin-top: 10px;

    border: 1px solid #C8C8C8;
    border-bottom: 0;
    border-radius: 2px;

    clip-path: polygon(0 -5px, 100% -5px, 100% 50%, 0 50%);
  }

  .story-size-guide::before {
    content: '';
    
    position: absolute;
    top: -5px;
    left: 50%;

    width: 1px;
    height: 5px;
    background: #C8C8C8;
    transform: translateX(-50%);
  }

  td.story-variant-guide {
    padding: 14px 0;
  }
  .story-variant-guide div {
    position: relative;
    padding: 15px 17px 16px 0;
    font-size: 15px;
    line-height: 20px;
    text-align: right;

    overflow: hidden;
  }
  .story-variant-guide div::before {
    content: '';
    position: absolute;
    top: 50%;
    right: 4px;

    width: 5px;
    height: 1px;

    background: #C8C8C8;
  }
  .story-variant-guide div::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    right: -3px;

    width: 7px;

    border: 1px solid #C8C8C8;
    border-right: 0;
    border-radius: 2px;
    vertical-align: middle;
  }
`}</style>
);
