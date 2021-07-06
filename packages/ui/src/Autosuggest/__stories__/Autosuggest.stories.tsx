import React, {useCallback, useState} from 'react';
import {PlaceIcon} from '@eruditorgroup/profi-icons';
import {Story, Meta} from '@storybook/react';

import Autosuggest, {AutosuggestProps, ISuggestValue} from '../index';
import List from '../../List';
import metro from './_metro.json';
import {DotIcon} from '@eruditorgroup/profi-icons';
import ReactAutosuggest from 'react-autosuggest';

export default {
  title: 'Autosuggest',
  component: Autosuggest,
} as Meta;

function getRandomColor(): string | undefined {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return Math.random() >= 0.5 ? undefined : color;
}

const metros = metro.map((station) => ({
  value: station,
  color: getRandomColor(),
}));

const Template: Story<Omit<AutosuggestProps, 'suggestions' | 'value'>> = (
  args,
) => {
  const [value, setValue] = useState<string>('');
  const [suggestions, setSuggestions] = useState<ISuggestValue[]>(metros);

  const updateSuggestions = useCallback(() => {
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

  const [tags, setTags] = useState<ISuggestValue[]>([]);
  const [isLoading, setLoading] = useState(false);

  const renderSuggestion: ReactAutosuggest.RenderSuggestion<ISuggestValue> = (
    {color, value},
    params,
  ) => (
    <List.Item
      as="div"
      leading={
        color ? <DotIcon color={color} /> : <PlaceIcon color="#C4C4C4" />
      }
      active={params.isHighlighted}
    >
      {value}
    </List.Item>
  );

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
        renderSuggestion={renderSuggestion}
      />

      <h2>Multiple</h2>
      <Autosuggest
        {...args}
        isMultiple
        block
        size="l"
        suggestions={suggestions}
        leading={tags.map(({color, value}) => (
          <Autosuggest.Tag
            key={value}
            icon={color ? <DotIcon color={color} /> : <PlaceIcon />}
            onDelete={() =>
              setTags((old) => old.filter((tag) => tag.value !== value))
            }
          >
            {value}
          </Autosuggest.Tag>
        ))}
        inputProps={{
          placeholder: 'Введите метро или город области…',
          value,
          onChange: (_, params) => setValue(params.newValue),
        }}
        onSuggestionsFetchRequested={updateSuggestions}
        onSuggestionsClearRequested={() => setValue('')}
        onSelected={(suggestion) => setTags((old) => [...old, suggestion])}
        renderSuggestion={renderSuggestion}
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
        renderSuggestion={renderSuggestion}
      />
    </>
  );
};

export const Default = Template.bind({});
Default.args = {};
