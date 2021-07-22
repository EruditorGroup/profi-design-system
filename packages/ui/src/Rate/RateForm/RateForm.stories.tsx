import React, {useState} from 'react';
import {Story, Meta} from '@storybook/react';

import RateForm, {RateFormProps} from './';
import {Title} from '../../Typography';

export default {
  title: 'Rate/RateForm',
} as Meta;

const Template: Story<RateFormProps> = () => {
  const [controlledValue, setControlledValue] = useState('5+');
  return (
    <div>
      <Title level={1} size="xxl" style={{marginBottom: '16px'}}>
        Контроллируемый Rate
      </Title>
      <div style={{maxWidth: '350px'}}>
        <RateForm value={controlledValue} onChange={setControlledValue} />
      </div>
    </div>
  );
};

export const Default = Template.bind({});
Default.storyName = 'RateForm';
Default.args = {};
