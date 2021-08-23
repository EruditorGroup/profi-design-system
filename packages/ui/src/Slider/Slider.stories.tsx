import React from 'react';
import {Story, Meta} from '@storybook/react';

import Slider, {SliderProps} from './';

import {Title} from '../Typography';
import Space from '../Space';

export default {
  title: 'Slider',
} as Meta;

type FactoryParams = {
  title: string;
  cardWidth?: string;
};

const StoryStyles = () => {
  return (
    <style>
      {`
        .card {
          margin: 0 10px;
        }

        .card:first-child {
          margin-left: 0;
        }
        
        .card:last-child {
          margin-right: 0;
        }
    `}
    </style>
  );
};

const TemplateFactory = ({
  cardWidth,
  title,
}: FactoryParams): Story<SliderProps> => (args) => {
  const titleStyles = {marginBottom: '32px'};
  const blockStyles = {
    width: cardWidth || '350px',
    height: '500px',
    background: '#f2f2f2',
    display: 'inline-block',
  };

  const containerStyles = {
    margin: '20px 40px',
  };

  return (
    <>
      <StoryStyles />
      <div style={containerStyles}>
        <Title style={titleStyles}>{title}</Title>
        <Slider style={{maxWidth: '1180px'}} {...args}>
          {[...Array(15)].map((_v, index) => (
            <Space
              radius="l"
              px={20}
              py={20}
              className="card"
              style={blockStyles}
            >
              Card {index + 1}
            </Space>
          ))}
        </Slider>
      </div>
    </>
  );
};

export const Default = TemplateFactory({
  title: 'Слайдер',
  cardWidth: '350px',
}).bind({});
Default.storyName = 'Default';
Default.args = {};

export const FullSlide = TemplateFactory({
  title: 'Слайдер с карточками на всю ширину',
  cardWidth: '1180px',
}).bind({});
FullSlide.storyName = 'Full slide';
FullSlide.args = {
  centeredSlides: false,
  moveMouseWheel: false,
  arrowBackground: 'transparent',
};
