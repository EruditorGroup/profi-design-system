import React, {useState} from 'react';
import {Story, Meta} from '@storybook/react';

import Accordion, {AccordionProps} from './index';
import {Textarea} from '..';

export default {
  title: 'Accordion',
  component: Accordion,
} as Meta<AccordionProps>;

const Template: Story<AccordionProps> = (args) => {
  const [opened, setOpened] = useState(true);
  return (
    <div style={{padding: '20px'}}>
      <Accordion
        opened={opened}
        onChange={setOpened}
        heading="Добавить секретный отзыв для службы поддержки"
      >
        <Textarea
          minLength={40}
          style={{margin: '20px 0'}}
          placeholder="секретный отзыв"
        />
      </Accordion>
      <Accordion heading="Heading">
        <div style={{padding: '20px 0', background: 'red'}}>collapsed data</div>
      </Accordion>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {};
