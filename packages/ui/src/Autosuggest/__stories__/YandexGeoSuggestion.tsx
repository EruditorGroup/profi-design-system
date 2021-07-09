import React, {useEffect, useState, useCallback, useRef} from 'react';
import Autosuggest, {ISuggestValue} from '../';
// import {Autosuggest, List} from '@eruditorgroup/profi-ui';
import {PlaceIcon} from '@eruditorgroup/profi-icons';
import List from '../../List';
import ReactAutosuggest from 'react-autosuggest';

let isInitialized = false;
let isLoading = false;
const OnLoadCallbackName = 'ymapsOnLoad';
const successCallbacks = new Set<(ymaps) => void>();
const OnErrorCallbackName = 'ymapsOnError';
const errorCallbacks = new Set<(error) => void>();

window[OnErrorCallbackName] = (err) => {
  alert('Fail to load ymaps. Check console');
  errorCallbacks.forEach((cb) => cb(err));
  console.error(err);
};
window[OnLoadCallbackName] = (ymaps: any) => {
  isInitialized = true;
  successCallbacks.forEach((cb) => cb(ymaps));
  successCallbacks.clear();
};

declare global {
  type YandexSuggest = {
    displayName: string;
    value: string;
    type: 'geo';
    hl: [number, number];
  };
  type YMaps = {
    suggest: (value: string, {results: number}) => Promise<YandexSuggest[]>;
  };

  interface Window {
    ymaps?: YMaps;
  }
}

const loadYmaps = ({apiKey, onLoad}) => {
  if (typeof window.ymaps === 'undefined' || !isInitialized) {
    if (!isLoading) {
      successCallbacks.add(onLoad);
      isLoading = true;
      const script = window.document.createElement('script');
      script.setAttribute(
        'src',
        `https://api-maps.yandex.ru/2.1/?apikey=${apiKey}&lang=ru_RU&load=suggest,geocode&onload=${OnLoadCallbackName}&onerror=${OnErrorCallbackName}`,
      );
      script.setAttribute('type', 'text/javascript');
      window.document.body.appendChild(script);
    }
  } else if (onLoad) {
    onLoad(window.ymaps);
  }
};

type Props = {
  apiKey?: string;
};

export default function YandexGeoSuggestion({
  apiKey,
}: Props): React.ReactElement {
  const [value, setValue] = useState('');
  const [isLoading, setLoading] = useState(false);
  const [suggestions, setSuggestions] = useState<ISuggestValue[]>([]);
  const debounce = useRef<NodeJS.Timeout>();

  console.log(suggestions);
  const [ymaps, setYMaps] = useState<YMaps>();

  const reload = useCallback(
    (value: string) => {
      if (!value) return;
      setLoading(true);
      clearTimeout(debounce.current);
      debounce.current = setTimeout(async () => {
        const items = await ymaps.suggest(value, {results: 5});
        setSuggestions(
          items.map(({value, displayName}) => ({value, label: displayName})),
        );
        setLoading(false);
      }, 300);
    },
    [ymaps],
  );

  useEffect(() => loadYmaps({apiKey, onLoad: setYMaps}), [apiKey]);

  return (
    <>
      <Autosuggest
        block
        size="l"
        isLoading={isLoading}
        suggestions={suggestions} // {value: string, label: string}[]
        inputProps={{
          value,
          onChange: (_, params) => setValue(params.newValue),
        }}
        onSuggestionsFetchRequested={({value}) => reload(value)}
        onSuggestionSelected={(_, {suggestion}) => setValue(suggestion.value)}
        onSuggestionsClearRequested={() => setSuggestions([])}
        renderSuggestion={({label, value}, params) => (
          <List.Item
            key={value}
            as="div"
            leading={<PlaceIcon color="#C4C4C4" />}
            active={params.isHighlighted}
          >
            {label}
          </List.Item>
        )}
      />
    </>
  );
}
