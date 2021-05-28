import React, {CSSProperties} from 'react';
import {Story, Meta} from '@storybook/react';

import {ArrowRightIcon} from '@eruditorgroup/profi-icons';

import Notification, {NotificationProps, NotificationColor} from './index';

const rowStyles: CSSProperties = {
  marginBottom: '20px',
};

const itemStyles: CSSProperties = {
  marginRight: '22px',
};

export default {
  title: 'Notification',
  component: Notification,
} as Meta;

const Template: Story<NotificationProps> = ({...args}) => (
  <div>
    <StoryStyles />
    <table className="story-table">
      <thead>
        <th className="story-guide" />
        <th />
      </thead>
      <tbody>
        <tr>
          <td className="story-variant-guide">
            <div>Normal</div>
          </td>
          <td>
            <Notification style={itemStyles} />
            <Notification children="1" style={itemStyles} />
            <Notification children={25} style={itemStyles} />
            <Notification children="99+" style={itemStyles} />
          </td>
        </tr>
        <tr>
          <td className="story-variant-guide">
            <div>Disabled</div>
          </td>
          <td>
            <Notification disabled style={itemStyles} />
            <Notification disabled children="1" style={itemStyles} />
            <Notification disabled children={25} style={itemStyles} />
            <Notification disabled children="99+" style={itemStyles} />
          </td>
        </tr>
        <tr>
          <td className="story-variant-guide">
            <div>Rich content</div>
          </td>
          <td>
            <Notification style={itemStyles}>
              <ArrowRightIcon
                style={{marginRight: '5px', verticalAlign: 'middle'}}
              />
              Это может быть очень длинный лейбл, потому что мы не хотим
              ограничивать применение
            </Notification>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);
export const Preview = Template.bind({});

const StoryStyles = () => (
  <style>{`
  .story-table {
    width: 1px;
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
  .story-table th.story-guide {
    width: 110px;
  }
  .story-table th.size_xl {
    width: 240px;
  }
  .story-table td {
    padding: 15px 20px;
    border: 0;
    white-space: nowrap;
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
    height: 1px;
    padding: 15px 0;
  }
  .story-variant-guide div {
    position: relative;
    
    display: flex;
    justify-content: flex-end;
    align-items: center;

    height: 100%;
    padding-right: 17px;

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
