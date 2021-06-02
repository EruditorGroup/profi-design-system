import React, {useState} from 'react';
import {Story, Meta} from '@storybook/react';

import {isValidDate, shiftDate} from '@eruditorgroup/profi-toolkit';

import Calendar, {CalendarProps} from './components/Calendar';
import DualCalendar, {DualCalendarProps} from './components/DualCalendar';

export default {
  title: 'Calendar',
  component: Calendar,
} as Meta;

const TODAY = new Date();

const Template: Story<CalendarProps> = ({
  minDate,
  maxDate,
  forceMonth,
  ...args
}) => {
  const [dates, setDates] = useState<readonly Date[]>(
    args.selectedDays || [
      new Date(TODAY.getFullYear(), TODAY.getMonth(), TODAY.getDate() + 1),
      new Date(TODAY.getFullYear(), TODAY.getMonth(), TODAY.getDate() + 2),
    ],
  );

  if (minDate && !isValidDate(minDate)) {
    minDate = new Date(minDate);
  }
  if (maxDate && !isValidDate(maxDate)) {
    maxDate = new Date(maxDate);
  }
  if (forceMonth && !isValidDate(forceMonth)) {
    forceMonth = new Date(forceMonth);
  }

  return (
    <div>
      <Calendar
        {...args}
        minDate={minDate}
        maxDate={maxDate}
        forceMonth={forceMonth}
        selectedDays={dates}
        onChange={(newDates: readonly Date[]) => setDates(newDates)}
        style={{maxWidth: '250px', margin: '0 10px'}}
      />
      <pre
        style={{
          display: 'inline-block',
          padding: '10px',
          paddingRight: '30px',
          margin: '20px 0',
          background: 'rgba(0,0,0,0.1)',
          borderRadius: '5px',
          boxShadow: '0 1px 6px -3px rgba(0,0,0,0.1)',
        }}
      >
        <div style={{fontSize: '14px', margin: '0 0 5px', opacity: 0.5}}>
          SELECTED VALUES:
        </div>
        {dates.length ? dates.map((d) => `${d}`).join('\n') : 'none'}
      </pre>
    </div>
  );
};

export const BaseStory = Template.bind({});
BaseStory.storyName = 'Base';
BaseStory.args = {
  selectedDays: [shiftDate(TODAY, 2), shiftDate(TODAY, 3), shiftDate(TODAY, 9)],
  selectionMode: 'Multi',
  minDate: TODAY,
};

const DualTemplate: Story<DualCalendarProps> = ({
  minDate,
  maxDate,
  ...args
}) => {
  const TODAY = new Date();
  const [dates, setDates] = useState<readonly Date[]>(
    args.selectedDays || [
      new Date(TODAY.getFullYear(), TODAY.getMonth(), TODAY.getDate() + 1),
      new Date(TODAY.getFullYear(), TODAY.getMonth(), TODAY.getDate() + 2),
    ],
  );

  if (minDate && !isValidDate(minDate)) {
    minDate = new Date(minDate);
  }
  if (maxDate && !isValidDate(maxDate)) {
    maxDate = new Date(maxDate);
  }

  return (
    <div>
      <DualCalendar
        {...args}
        minDate={minDate}
        maxDate={maxDate}
        selectedDays={dates}
        onChange={(newDates: readonly Date[]) => setDates(newDates)}
        containerStyle={{
          maxWidth: '530px',
          padding: '0 10px',
        }}
      />
      <pre
        style={{
          display: 'inline-block',
          padding: '10px',
          paddingRight: '30px',
          margin: '20px 0',
          background: 'rgba(0,0,0,0.1)',
          borderRadius: '5px',
          boxShadow: '0 1px 6px -3px rgba(0,0,0,0.1)',
        }}
      >
        <div style={{fontSize: '14px', margin: '0 0 5px', opacity: 0.5}}>
          SELECTED VALUES:
        </div>
        {dates.length ? dates.map((d) => `${d}`).join('\n') : 'none'}
      </pre>
    </div>
  );
};

export const DualStory = DualTemplate.bind({});
DualStory.storyName = 'Dual Calendar';
DualStory.args = {
  selectedDays: [shiftDate(TODAY, 2), shiftDate(TODAY, 3), shiftDate(TODAY, 9)],
  selectionMode: 'Multi',
  minDate: TODAY,
};
