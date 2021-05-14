import React, {useState} from 'react';
import {Row, Col} from '../Grid';
import {Story, Meta} from '@storybook/react';

export default {
  title: 'Divider',
  component: Col,
} as Meta;

const colStyle = {
  background: '#d3d3d38f',
  border: '1px solid #fff',
  paddingTop: '5px',
  paddingBottom: '5px',
};
const rowStyle = {
  background: 'rgba(231, 246, 251, 0.5)',
  marginTop: '10px',
  marginBottom: '10px',
  paddingTop: '10px',
  paddingBottom: '10px',
  border: '1px solid #a00000',
};

const Template: Story<{}> = () => {
  return (
    <div style={{position: 'relative'}}>
      <div
        style={{
          position: 'absolute',
          top: '0',
          left: '0',
          right: '0',
          margin: 'auto',
          height: '100%',
          width: '100%',
          display: 'flex',
          boxSizing: 'border-box',
        }}
      >
        {Array.from({length: 12}).map((e, i) => (
          <i
            style={{
              height: '100%',
              background: `rgba(255, 48, 198, ${i % 2 ? '.05' : '.1'})`,
              width: `${100 / 12}%`,
            }}
          />
        ))}
      </div>
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
                span-4
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
    </div>
  );
};

export const Default = Template.bind({});
