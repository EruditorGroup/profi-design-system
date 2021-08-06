import React from 'react';
import {Story, Meta} from '@storybook/react';

import {Title, Text} from '../';
import Price, {PriceProps} from './';

export default {
  title: 'Price',
} as Meta;

const blockStyles = {marginBottom: '16px'};
const labelStyles = {marginBottom: '4px'};

const Template: Story<PriceProps> = (args) => {
  return (
    <>
      <Title level={1} style={{marginBottom: '24px'}}>
        Компонент Price
      </Title>
      <div style={blockStyles}>
        <Text color="muted" size="m" style={labelStyles}>
          Обычная цена
        </Text>
        <Price value={5000} currencyCode="RUB" size="xl" {...args} />
      </div>
      <div style={blockStyles}>
        <Text color="muted" size="m" style={labelStyles}>
          Форматированная цена
        </Text>
        <Price value={5000000} currencyCode="BYN" size="xl" pretty {...args} />
      </div>
      <div style={blockStyles}>
        <Text color="muted" size="m" style={labelStyles}>
          Цена с копейками
        </Text>
        <Price value={999.26} currencyCode="KZT" size="xl" pretty {...args} />
      </div>
      <div style={blockStyles}>
        <Text color="muted" size="m" style={labelStyles}>
          Цена с копейками (должно быть два знака после запятой)
        </Text>
        <Price value={1099.9} currencyCode="RUB" size="xl" pretty {...args} />
      </div>
    </>
  );
};

export const Default = Template.bind({});
Default.storyName = 'Default';
Default.args = {};
