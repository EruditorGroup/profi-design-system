import React from 'react';
import {Story, Meta} from '@storybook/react';

import Slider, {SliderProps} from './';
import SliderItem from './SliderItem';

import {Title} from '../Typography';
import Space from '../Space';

export default {
  title: 'Slider',
} as Meta;

type FactoryParams = {
  title: string;
  cardWidth?: string;
  cardLength?: number;
};

const TemplateFactory = ({
  cardWidth = '350px',
  title,
  cardLength = 15,
}: FactoryParams): Story<SliderProps> => (args) => {
  const titleStyles = {marginBottom: '32px'};
  const blockStyles = {
    width: cardWidth,
    height: '500px',
    background: '#f2f2f2',
  };

  const containerStyles = {
    margin: '20px 40px',
  };

  return (
    <div style={containerStyles}>
      <Title style={titleStyles}>{title}</Title>
      <Slider
        offset={20}
        arrowAdditionalFill
        style={{width: '810px'}}
        {...args}
      >
        {[...Array(cardLength)].map((_v, index) => (
          <SliderItem
            as={Space}
            radius="l"
            px={20}
            py={20}
            className="card"
            style={blockStyles}
          >
            Card {index + 1}
          </SliderItem>
        ))}
      </Slider>
    </div>
  );
};

export const Default = TemplateFactory({
  title: 'Слайдер',
  cardWidth: '350px',
}).bind({});
Default.storyName = 'Default';
Default.args = {
  scrollable: true,
};

export const FullSlide = TemplateFactory({
  title: 'Слайдер с карточками на всю ширину',
  cardWidth: '810px',
}).bind({});
FullSlide.storyName = 'Full slide';
FullSlide.args = {
  centeredSlides: false,
  moveMouseWheel: false,
  arrowBackground: 'transparent',
};

export const FewElements = TemplateFactory({
  title: 'Слайдер, когда меньше элементов меньше ширины контейнера',
  cardLength: 2,
}).bind({});
FewElements.storyName = 'Few elements';
FewElements.args = {
  centeredSlides: false,
  moveMouseWheel: false,
  arrowBackground: 'transparent',
};

export const Flex = TemplateFactory({
  title: 'Слайдер (flex)',
  cardWidth: '350px',
}).bind({});
Flex.storyName = 'Flex';
Flex.args = {
  flex: true,
  scrollable: true,
};
