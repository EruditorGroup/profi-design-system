import React, {CSSProperties} from 'react';
import {Story, Meta} from '@storybook/react';
import {Title, Text} from '../Typography';

import Progress, {ProgressProps} from './index';

export default {
  title: 'Progress',
  component: Progress,
} as Meta;

const itemStyles: CSSProperties = {width: '300px'};
const sectionStyles: CSSProperties = {marginBottom: '16px'};
const subtitleStyles: CSSProperties = {marginBottom: '4px'};

const Template: Story<ProgressProps> = ({...args}) => (
  <div>
    <Title level={1} style={{marginBottom: '24px'}}>
      Progress
    </Title>

    <div style={sectionStyles}>
      <Text style={subtitleStyles}>Не заполнен</Text>
      <Progress {...args} percent={0} style={itemStyles} />
    </div>

    <div style={sectionStyles}>
      <Text style={subtitleStyles}>Заполнен наполовину</Text>
      <Progress {...args} percent={50} style={itemStyles} />
    </div>

    <div style={sectionStyles}>
      <Text style={subtitleStyles}>Заполнен</Text>
      <Progress {...args} percent={100} style={itemStyles} />
    </div>

    <div style={sectionStyles}>
      <Text style={subtitleStyles}>Success color</Text>
      <Progress {...args} percent={100} style={itemStyles} color="success" />
    </div>

    <div style={sectionStyles}>
      <Text style={subtitleStyles}>С процентами</Text>
      <Progress
        {...args}
        percent={0}
        style={itemStyles}
        color="warning"
        showInfo
      />
      <Progress
        {...args}
        percent={50}
        style={itemStyles}
        color="warning"
        showInfo
      />
      <Progress
        {...args}
        percent={100}
        style={itemStyles}
        color="warning"
        showInfo
      />
    </div>
  </div>
);

export const Default = Template.bind({});
