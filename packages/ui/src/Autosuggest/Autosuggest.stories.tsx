import React, {useCallback, useState} from 'react';
import {Story, Meta} from '@storybook/react';

import Autosuggest, {AutosuggestProps, ISuggestValue} from './index';

export default {
  title: 'Autosuggest',
  component: Autosuggest,
} as Meta;
const selection = [
  {value: 'flowers'},
  {value: 'azalea'},
  {value: 'aloe'},
  {value: 'pansies'},
  {value: 'aster'},
  {value: 'African marigold'},
  {value: 'begonia'},
  {value: 'bouquet'},
  {value: 'rosebud'},
  {value: 'cornflower'},
  {value: 'verbena'},
  {value: 'convolves (convolvulus)'},
  {value: 'carnation'},
  {value: 'dahlia'},
  {value: 'geranium'},
  {value: 'herbera'},
  {value: 'hyacinth'},
  {value: 'gladiolus'},
  {value: 'glycinia'},
  {value: 'hydrangea'},
  {value: 'delphinium'},
  {value: 'cow-wheat'},
  {value: 'willow herb'},
  {value: 'ikebana'},
  {value: 'iris'},
  {value: 'kalanchoe'},
  {value: 'calendula, marigold'},
  {value: 'camellia'},
  {value: 'rush, reed'},
  {value: 'cannee'},
  {value: 'bluebell (harebell, campanula)'},
  {value: 'цветок	pot flower'},
  {value: 'stinging-nettle'},
  {value: 'crocus'},
  {value: 'water-lily'},
  {value: 'double buttercup, globeflower'},
  {value: 'lavender'},
  {value: 'lily-of-the-valley'},
  {value: 'goose-foot'},
  {value: 'gillyflower'},
  {value: 'lily'},
  {value: 'water lily'},
  {value: 'snap-dragon'},
  {value: 'lupine'},
  {value: 'buttercup, yellowcup'},
  {value: 'poppy'},
  {value: 'holly-hox'},
  {value: 'daisy'},
  {value: 'lung-wort'},
  {value: 'mimosa, acacia'},
  {value: 'milkweed'},
  {value: 'narcissus'},
  {value: 'daffodil'},
  {value: 'nasturtium, Indian cress'},
  {value: 'forget-me-not'},
  {value: 'marigold'},
  {value: 'dandelion'},
  {value: 'orchid'},
  {value: 'cowslip'},
  {value: 'petunia'},
  {value: 'peony'},
  {value: 'plantain'},
  {value: 'snowdrop'},
  {value: 'sunflower'},
  {value: 'mignonette'},
  {value: ' лопух	burdock'},
  {value: 'rhododendron'},
  {value: 'rose'},
  {value: 'daisy'},
  {value: 'chamomile'},
  {value: 'camomile'},
  {value: 'plant'},
  {value: 'saintpaulia'},
  {value: 'catkin'},
  {value: 'spathiphyllum'},
  {value: 'winter-cress'},
  {value: 'Missouri tobacco'},
  {value: 'cane'},
  {value: 'milfoil'},
  {value: 'tulip'},
  {value: 'fertilize, nourish'},
  {value: 'violet'},
  {value: 'cyclamen'},
  {value: 'ficus, rubber plant'},
  {value: 'phlox'},
  {value: 'fuchsia'},
  {value: 'hosta'},
  {value: 'chrysanthemum'},
  {value: 'bloom, blossom'},
  {value: 'cyclamen'},
  {value: 'chicory'},
  {value: 'cynia'},
  {value: 'sage'},
  {value: 'edelweiss'},
];
const Template: Story<Omit<AutosuggestProps, 'suggestions' | 'value'>> = (
  args,
) => {
  const [suggestions, setSuggestions] = useState<ISuggestValue[]>(selection);

  const [value, setValue] = useState<string>('');

  const [isLoading, setLoading] = useState(false);
  const reload = useCallback(async () => {
    setLoading(true);
    await new Promise((res) => setTimeout(res, 1000));
    setLoading(false);
  }, []);

  return (
    <>
      <h2>Static suggestions</h2>
      <Autosuggest
        {...args}
        suggestions={suggestions}
        value={value}
        onChange={(ev) => {
          console.log(ev);
          setValue(ev.currentTarget.value);
        }}
        onSuggestionsClearRequested={() => setValue('')}
        // onSelected={(suggestion) => setValue(suggestion.value ?? '')}
      />
      <h2>Async suggestions</h2>
      <Autosuggest
        {...args}
        block
        isLoading={isLoading}
        suggestions={suggestions}
        value={value}
        onChange={(ev) => setValue(ev.currentTarget.value)}
        onSuggestionsFetchRequested={reload}
        onSuggestionsClearRequested={() => setValue('')}
      />
    </>
  );
};

export const Default = Template.bind({});
Default.args = {};
