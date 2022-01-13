import React from 'react';
import {Story, Meta} from '@storybook/react';

import {Accordion, AccordionProps} from './index';
import {Textarea} from '@eruditorgroup/profi-ui';

export default {
  title: 'Accordion',
  component: Accordion,
  parameters: {
    controls: {include: ['size', 'design']},
  },
  args: {size: 'xl'},
} as Meta<AccordionProps>;

const Template: Story<Partial<AccordionProps>> = (args) => {
  return (
    <div style={{padding: '20px'}}>
      <Accordion
        {...args}
        bold
        defaultOpened
        heading="Добавить секретный отзыв для службы поддержки"
      >
        <Textarea
          minLength={40}
          style={{margin: '20px 0'}}
          placeholder="секретный отзыв"
        />
      </Accordion>
      <Accordion {...args} bold heading="Heading">
        <div style={{padding: '20px 0', background: 'red'}}>collapsed data</div>
      </Accordion>
    </div>
  );
};

export const LinkDesign = Template.bind({});
LinkDesign.args = {
  design: 'link',
};

export const BlockDesign = Template.bind({});
BlockDesign.args = {
  design: 'block',
};
