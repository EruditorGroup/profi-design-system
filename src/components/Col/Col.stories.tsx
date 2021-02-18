import React, {useState} from 'react';
import Row from '../Row';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Story, Meta} from '@storybook/react/types-6-0';

import Col from '../Col';

export default {
  title: 'Grid',
  component: Col,
} as Meta;

const colStyle = {
  background: '#e7f6fb',
  border: '1px solid #d0d0d0',
  padding: '5px',
};
const rowStyle = {
  background: 'lightgrey',
  marginTop: '10px',
  marginBottom: '10px',
  paddingTop: '10px',
  paddingBottom: '10px',
  border: '1px solid #a00000',
};

const Template: Story<{}> = () => {
  return (
    <>
      <Row style={rowStyle}>
        <Col span={12} style={colStyle}>
          span-12
        </Col>
      </Row>
      <Row style={rowStyle}>
        {Array.from({length: 3}).map(() => (
          <Col span={4} style={colStyle}>
            span-4
          </Col>
        ))}
      </Row>
      <Row style={rowStyle}>
        {Array.from({length: 4}).map(() => (
          <Col span={3} style={colStyle}>
            span-3
          </Col>
        ))}
      </Row>
      <Row style={rowStyle}>
        {Array.from({length: 12}).map(() => (
          <Col span={1} style={colStyle}>
            span-1
          </Col>
        ))}
      </Row>
      <Row style={rowStyle}>
        <Col offset={3} span={3} style={colStyle}>
          span-3 offset-3
        </Col>
      </Row>
      <Row style={rowStyle}>
        <Col offset={6} span={6} style={colStyle}>
          span-6 offset-6
        </Col>
      </Row>
      <Row style={rowStyle}>
        <Col offset={2} span={8} style={colStyle}>
          <p>span-8 offset-2</p>
          <Row>
            {Array.from({length: 4}).map(() => (
              <Col span={3} style={colStyle}>
                span-3
              </Col>
            ))}
            {Array.from({length: 3}).map(() => (
              <Col span={4} style={colStyle}>
                span-3
              </Col>
            ))}
            <Col span={5} style={colStyle}>
              span-5
            </Col>
            <Col span={5} style={colStyle}>
              span-5
            </Col>
            <Col span={2} style={colStyle}>
              span-2
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export const Default = Template.bind({});
