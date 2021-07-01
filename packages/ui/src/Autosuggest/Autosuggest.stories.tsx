import React, {useCallback, useState} from 'react';
import {Story, Meta} from '@storybook/react';

import Autosuggest, {AutosuggestProps, ISuggestValue} from './index';

export default {
  title: 'Containers/Autosuggest',
  component: Autosuggest,
} as Meta;

const Template: Story<Omit<AutosuggestProps, 'suggestions' | 'value'>> = (
  args,
) => {
  const [suggestions, setSuggestions] = useState<ISuggestValue[]>([
    {value: 'Green'},
    {value: 'Blue'},
    {value: 'Black'},
    {value: 'White'},
  ]);

  const [selected, setSelected] = useState<ISuggestValue[]>();

  const reload = useCallback(async () => {
    await new Promise((res) => setTimeout(res, 3000));
    setSuggestions((old) => old.reverse());
  }, []);

  return (
    <>
      <h2>Static suggestions</h2>
      <Autosuggest
        block={false}
        suggestions={suggestions}
        // value={selected}
        onSuggestionsClearRequested={() => setSelected([])}
        // onSelected={(data) => setSelected(data.suggestion)}
        {...args}
      />
      <h2>Async suggestions</h2>
      <Autosuggest
        block={false}
        suggestions={suggestions}
        // value={selected}
        // onSuggestionsFetchRequested={reload}
        onSuggestionsClearRequested={() => setSelected([])}
        // onSelected={(data) => setSelected(data.suggestion)}
        {...args}
      />
    </>
  );
};

export const Default = Template.bind({});
Default.args = {};
