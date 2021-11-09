import React, {useEffect, useRef, useState} from 'react';
import {Story, Meta} from '@storybook/react';

import Tooltip, {TooltipContextType} from './index';
import Text from '../Typography/Text';
import Button from '../Button';
import Checkbox from '../Form/Checkbox';
import {
  ChevronDownIcon,
  ChevronUpIcon,
  VkIcon,
} from '@eruditorgroup/profi-icons';

export default {
  title: 'Tooltip',
  component: Tooltip,
} as Meta;

const rowStyle: Record<string, string> = {
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  height: '150px',
  flexWrap: 'wrap',
};

const Template: Story = (args) => {
  const api = useRef<TooltipContextType | null>(null);

  useEffect(() => {
    api.current?.setOpened(true);
  }, []);

  return (
    <>
      <div style={rowStyle}>
        <Tooltip api={api} trigger="custom">
          <Tooltip.Toggler as={Button}>Bottom left</Tooltip.Toggler>

          <Tooltip.Content style={{width: '200px'}} position="bottom-left">
            <Text size="l" bold>
              Lorem Ipsum Lorem Ipsum
            </Text>
            <Text size="s">Lorem Ipsum Lorem Ipsum</Text>
          </Tooltip.Content>
        </Tooltip>

        <Tooltip>
          <Tooltip.Toggler as={Button}>Bottom center</Tooltip.Toggler>

          <Tooltip.Content style={{width: '200px'}} position="bottom-center">
            <Text size="l" bold>
              Lorem Ipsum Lorem Ipsum
            </Text>
            <Text size="s">Lorem Ipsum Lorem Ipsum</Text>
          </Tooltip.Content>
        </Tooltip>

        <Tooltip>
          <Tooltip.Toggler as={Button}>Bottom right</Tooltip.Toggler>
          <Tooltip.Content style={{width: '200px'}} position="bottom-right">
            <Text size="l" bold>
              Lorem Ipsum Lorem Ipsum
            </Text>
            <Text size="s">Lorem Ipsum Lorem Ipsum</Text>
          </Tooltip.Content>
        </Tooltip>
      </div>
      <div style={rowStyle}>
        <Tooltip>
          <Tooltip.Toggler as={Button}>Top left</Tooltip.Toggler>
          <Tooltip.Content style={{width: '200px'}} position="top-left">
            <Text size="l" bold>
              Lorem Ipsum Lorem Ipsum
            </Text>
            <Text size="s">Lorem Ipsum Lorem Ipsum</Text>
          </Tooltip.Content>
        </Tooltip>

        <Tooltip>
          <Tooltip.Toggler as={Button}>Top center</Tooltip.Toggler>
          <Tooltip.Content style={{width: '200px'}} position="top-center">
            <Text size="l" bold>
              Lorem Ipsum Lorem Ipsum
            </Text>
            <Text size="s">Lorem Ipsum Lorem Ipsum</Text>
          </Tooltip.Content>
        </Tooltip>

        <Tooltip>
          <Tooltip.Toggler as={Button}>Top right</Tooltip.Toggler>
          <Tooltip.Content style={{width: '200px'}} position="top-right">
            <Text size="l" bold>
              Lorem Ipsum Lorem Ipsum
            </Text>
            <Text size="s">Lorem Ipsum Lorem Ipsum</Text>
          </Tooltip.Content>
        </Tooltip>
      </div>
      <div style={rowStyle}>
        <Tooltip persist>
          <Tooltip.Toggler as={Button}>Persist</Tooltip.Toggler>
          <Tooltip.Content style={{width: '200px'}} position="top-left">
            <Text size="l" bold>
              Lorem Ipsum Lorem Ipsum
            </Text>
            <Text size="s">Lorem Ipsum Lorem Ipsum</Text>
          </Tooltip.Content>
        </Tooltip>
        <Tooltip persist trigger="click">
          <Tooltip.Toggler as={Button}>Click trigger</Tooltip.Toggler>
          <Tooltip.Content style={{width: '200px'}} position="top-right">
            <Text size="l" bold>
              Lorem Ipsum Lorem Ipsum
            </Text>
            <Text size="s">Lorem Ipsum Lorem Ipsum</Text>
          </Tooltip.Content>
        </Tooltip>

        <Tooltip>
          <Tooltip.Toggler>
            <Checkbox>Custom toggler</Checkbox>
          </Tooltip.Toggler>
          <Tooltip.Content style={{width: '200px'}} position="top-left">
            <Text align="center" size="l" bold>
              Lorem Ipsum Lorem Ipsum
            </Text>
            <Text align="center" size="s">
              Lorem Ipsum Lorem Ipsum
            </Text>
          </Tooltip.Content>
        </Tooltip>
      </div>
    </>
  );
};

export const Default = Template.bind({});

export const Without_animation = Template.bind({});
Without_animation.args = {
  animated: false,
};
