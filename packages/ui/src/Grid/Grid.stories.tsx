import React, {CSSProperties, useState} from 'react';
import {Story, Meta} from '@storybook/react';

import Grid from '.';
import type {ColProps} from './components/Col';

export default {
  title: 'Grid',
  component: Grid.Container,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

const containerStyles: CSSProperties = {
  position: 'relative',
};

const markupRowStyles: CSSProperties = {
  position: 'absolute',
  height: '100%',
  width: '100%',
  backgroundColor: '#FDE8EB',
  zIndex: -1,
};

const markupColumnStyles: CSSProperties = {
  backgroundColor: '#FABBC4',
  height: '100%',
};

const rowStyles = {
  padding: '1rem 0',
};

const colStyles = {
  paddingTop: '.75rem',
  paddingBottom: '.75rem',
  backgroundColor: '#eee',
  border: '1px solid #ddd',
};

const Template: Story<ColProps> = ({span, offset}) => {
  return (
    <Grid.Container style={containerStyles}>
      <Grid.Row style={markupRowStyles}>
        {Array.from({length: 12}, () => (
          <Grid.Col>
            <div style={markupColumnStyles}></div>
          </Grid.Col>
        ))}
      </Grid.Row>
      <Grid.Row style={rowStyles}>
        {Array.from({length: 12}, () => (
          <Grid.Col style={colStyles}>col</Grid.Col>
        ))}
      </Grid.Row>
      <Grid.Row style={rowStyles}>
        {Array.from({length: 3}, () => (
          <Grid.Col style={colStyles} span={4}>
            span=4
          </Grid.Col>
        ))}
      </Grid.Row>
      <Grid.Row style={rowStyles}>
        {Array.from({length: 3}, () => (
          <Grid.Col style={colStyles} span={3} offset={1}>
            span=4 offset-1
          </Grid.Col>
        ))}
      </Grid.Row>
      <Grid.Row style={rowStyles}>
        <Grid.Col style={colStyles} span={span} offset={offset}>
          span={span} offset={offset}
        </Grid.Col>
      </Grid.Row>
      <Grid.Row style={rowStyles}>
        <Grid.Col style={colStyles} l={5} m={2}>
          l=5 m=2
        </Grid.Col>
        <Grid.Col
          style={colStyles}
          m={{span: 3, offset: 1}}
        >{`m={span: 3, offset: 1}`}</Grid.Col>
      </Grid.Row>
      <Grid.Row style={rowStyles}>
        <Grid.Col style={colStyles} s={6} m={4} l={3}>
          s=6 m=4 l=2
        </Grid.Col>
      </Grid.Row>
    </Grid.Container>
  );
};

export const Default = Template.bind({});
Default.args = {
  span: 5,
  offset: 1,
};
Default.argTypes = {
  span: {
    control: {type: 'range', min: 1, max: 12},
  },
  offset: {
    control: {type: 'range', min: 1, max: 11},
  },
};
