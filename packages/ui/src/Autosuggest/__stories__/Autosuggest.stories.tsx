import React, {useCallback, useState} from 'react';
import {PlaceIcon} from '@eruditorgroup/profi-icons';
import {Story, Meta} from '@storybook/react';

import Autosuggest, {AutosuggestProps, ISuggestValue} from '../index';
import metro from './_metro.json';

export default {
  title: 'Autosuggest',
  component: Autosuggest,
} as Meta;

const metros = metro.map((station) => ({
  value: station,
}));

const Template: Story<Omit<AutosuggestProps, 'suggestions' | 'value'>> = (
  args,
) => {
  const [value, setValue] = useState<string>('');
  console.log(value);
  const [suggestions, setSuggestions] = useState<ISuggestValue[]>(metros);

  const updateSuggestions = useCallback(() => {
    console.log('fetch', value);
    setSuggestions(() =>
      metros.filter((metro) =>
        metro.value.toLowerCase().includes(value.toLowerCase()),
      ),
    );
  }, [suggestions, value]);

  const reload = useCallback(async () => {
    setLoading(true);
    await new Promise((res) => setTimeout(res, 1000));
    updateSuggestions();
    setLoading(false);
  }, []);

  const [tags, setTags] = useState<React.ReactNode[]>([]);
  const addTag = ({value, label}: ISuggestValue): void =>
    setTags((old) => {
      const tag = (
        <Autosuggest.Tag
          key={old.length}
          icon={<PlaceIcon />}
          onDelete={() => setTags((old) => old.filter((node) => node !== tag))}
        >
          {value}
        </Autosuggest.Tag>
      );
      return [...old, tag];
    });

  const [isLoading, setLoading] = useState(false);

  return (
    <>
      <h2>Static suggestions</h2>
      <Autosuggest
        {...args}
        size="l"
        suggestions={suggestions}
        inputProps={{
          value,
          onChange: (_, params) => setValue(params.newValue),
        }}
        onSuggestionsFetchRequested={updateSuggestions}
        onSelected={(selected) => setValue(selected.value)}
      />

      <h2>Multiple</h2>
      <Autosuggest
        {...args}
        isMultiple
        block
        size="l"
        suggestions={suggestions}
        leading={tags.length > 0 && tags}
        inputProps={{
          placeholder: 'Введите метро или город области…',
          value,
          onChange: (_, params) => setValue(params.newValue),
        }}
        onSuggestionsFetchRequested={updateSuggestions}
        onSuggestionsClearRequested={() => setValue('')}
        onSelected={addTag}
      />
      <h2>Async suggestions</h2>
      <Autosuggest
        {...args}
        block
        size="l"
        isLoading={isLoading}
        suggestions={suggestions}
        inputProps={{
          value,
          onChange: (_, params) => setValue(params.newValue),
        }}
        onSuggestionsFetchRequested={reload}
        onSelected={(selected) => setValue(selected.value)}
      />
    </>
  );
};

export const Default = Template.bind({});
Default.args = {};
