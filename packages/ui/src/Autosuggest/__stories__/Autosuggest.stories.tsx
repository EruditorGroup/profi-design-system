import React, {useCallback, useState} from 'react';
import {CloseIcon, PlaceIcon} from '@eruditorgroup/profi-icons';
import {Story, Meta} from '@storybook/react';

import Autosuggest from '../components/Default/index';
import {ChevronLeftIcon, SearchIcon} from '@eruditorgroup/profi-icons';

import Button from '../../Button';
import {Input} from '../../Form';
import List from '../../List';
import GeoTag from '../../GeoTag';
import Tag from '../../Tag';
import metro from './_metro.json';
import {DotIcon} from '@eruditorgroup/profi-icons';
import ReactAutosuggest from 'react-autosuggest';
import YandexGeoSuggestion from './YandexGeoSuggestion';
import styles from './AutosuggestStories.module.scss';
import Fullscreen from '../components/Fullscreen';
import {AutosuggestProps, ISuggestValue, TSection} from '../types';

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
        color ? (
          <DotIcon color={color as string} />
        ) : (
          <PlaceIcon color="#C4C4C4" />
        )
      }
      active={params.isHighlighted}
    >
      {value}
    </List.Item>
  );

  const renderFullscreenSuggestion: ReactAutosuggest.RenderSuggestion<ISuggestValue> = (
    {value},
    params,
  ) => (
    <List.Item as="div" active={params.isHighlighted}>
      {value}
    </List.Item>
  );

  return (
    <>
      <h2>Static suggestions</h2>
      <Autosuggest
        {...args}
        multiSection={false}
        size="l"
        suggestionsSize="l"
        suggestions={suggestions}
        inputProps={{
          value,
          onChange: (_, params) => setValue(params.newValue),
        }}
        onSuggestionsFetchRequested={updateSuggestions}
        onSuggestionSelected={(_, {suggestion}) => setValue(suggestion.value)}
        renderSuggestion={renderSuggestion}
      />

      <h2>Multiple</h2>
      <Autosuggest
        {...args}
        multiSection={false}
        isMultiple
        block
        size="l"
        suggestionsSize="l"
        suggestions={suggestions}
        trailing={<CloseIcon />}
        upper={tags.map(({color, value}) => (
          <GeoTag
            key={value}
            icon={color ? <DotIcon color={color as string} /> : <PlaceIcon />}
            trailing={<CloseIcon />}
            onClick={() =>
              setTags((old) => old.filter((tag) => tag.value !== value))
            }
          >
            {value}
          </GeoTag>
        ))}
        inputProps={{
          placeholder: 'Введите метро или город области…',
          value,
          onChange: (_, params) => setValue(params.newValue),
        }}
        onSuggestionsFetchRequested={updateSuggestions}
        onSuggestionsClearRequested={() => setValue('')}
        onSuggestionSelected={(_, {suggestion}) =>
          setTags((old) => [...old, suggestion])
        }
        renderSuggestion={renderSuggestion}
      />
      <h2>Async suggestions</h2>
      <Autosuggest
        {...args}
        multiSection={false}
        block
        size="l"
        suggestionsSize="l"
        isLoading={isLoading}
        suggestions={suggestions}
        inputProps={{
          value,
          onChange: (_, params) => setValue(params.newValue),
        }}
        onSuggestionsFetchRequested={reload}
        onSuggestionSelected={(_, {suggestion}) => setValue(suggestion.value)}
        renderSuggestion={renderSuggestion}
      />
      <h2>Yandex geo suggestions</h2>
      <YandexGeoSuggestion />

      <h2>Fullscreen</h2>
      <Fullscreen
        {...args}
        inputRef={null}
        multiSection={false}
        sharedFieldProps={{
          value,
          onChange: (_, params) => setValue(params.newValue),
          'data-testattribute': 'test',
        }}
        suggestions={suggestions.slice(0, 10)}
        onSuggestionsFetchRequested={updateSuggestions}
        onSuggestionSelected={(_, {suggestion}) => setValue(suggestion.value)}
        renderSuggestion={renderFullscreenSuggestion}
        alwaysRenderSuggestions
        activeField={
          <Fullscreen.ActiveField iconPostion="none" textarea>
            {(field, {onClose}) => (
              <div className={styles['fullscreen-input-panel']}>
                <Button design="light" rounded onClick={onClose}>
                  <ChevronLeftIcon />
                </Button>
                {field}
                <Button rounded>
                  <SearchIcon />
                </Button>
              </div>
            )}
          </Fullscreen.ActiveField>
        }
        defaultInput={
          <Fullscreen.DefaultInput iconPostion="trailing" size="l" />
        }
        renderModalAvailableSpace={() => (
          <div className={styles['fullscreen-modal-space']}>Info</div>
        )}
        renderSuggestionListAddon={() => (
          <div className={styles['fullscreen-list-tag']}>
            {suggestions.slice(0, 3).map((x) => (
              <Tag className={styles['fullscreen-tag']} size="m" key={x.value}>
                {x.value}
              </Tag>
            ))}
          </div>
        )}
      />

      <h2>Opened suggestions view without interactive</h2>
      <Autosuggest
        {...args}
        multiSection={false}
        size="xl"
        suggestionsSize="l"
        suggestions={suggestions}
        inputProps={{
          value: 'П',
          onChange: (_, params) => {},
        }}
        onSuggestionsFetchRequested={updateSuggestions}
        onSuggestionSelected={(_, {suggestion}) => setValue(suggestion.value)}
        renderSuggestion={renderSuggestion}
        alwaysRenderSuggestions
      />
    </>
  );
};

export const Default = Template.bind({});
Default.args = {};

const books = [
  {
    title: 'Фантастика',
    suggestions: [
      {value: 'Гарри Поттер'},
      {value: 'Властелин колец'},
      {value: 'Ведьмак'},
    ],
  },
  {
    title: 'Детектив',
    suggestions: [
      {value: 'Восточный экспресс'},
      {value: 'Убийство по алфавиту'},
      {value: 'Шерлок Холмс'},
    ],
  },
  {
    title: 'Классика',
    suggestions: [{value: 'Капитанская дочь'}, {value: 'Отцы и дети'}],
  },
  {
    title: 'Зарубежная',
    suggestions: [{value: 'Триумфальная арка'}, {value: 'Зеленая миля'}],
  },
];

export const MultiSection = () => {
  const [value, setValue] = useState<string>('');
  const [suggestions, setSuggestions] = useState<TSection[]>([]);

  const updateSuggestions = useCallback(({value}) => {
    setSuggestions(() => {
      const result: TSection[] = [];
      books.forEach(({title, suggestions}) => {
        const filtered = suggestions.filter((book) =>
          book.value.toLowerCase().includes(value.toLowerCase()),
        );
        filtered.length && result.push({title, suggestions: filtered});
      });
      return result;
    });
  }, []);

  const renderSuggestion: ReactAutosuggest.RenderSuggestion<ISuggestValue> = (
    {value},
    params,
  ) => (
    <List.Item as="div" active={params.isHighlighted}>
      {value}
    </List.Item>
  );

  return (
    <Autosuggest
      multiSection={true}
      renderSectionTitle={() => null}
      sectionClassName={styles['section']}
      size="l"
      suggestionsSize="l"
      suggestions={suggestions}
      inputProps={{
        value,
        placeholder: 'Начните вводить "В"',
        onChange: (_, params) => setValue(params.newValue),
      }}
      onSuggestionsFetchRequested={updateSuggestions}
      onSuggestionSelected={(_, {suggestion}) => setValue(suggestion.value)}
      renderSuggestion={renderSuggestion}
    />
  );
};
