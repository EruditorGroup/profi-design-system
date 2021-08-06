import React from 'react';
import {Story, Meta} from '@storybook/react';

import TableGuides, {
  TableGuidesProps,
} from '../../../../.storybook/TableGuides';

import CurrencySymbol, {CurrencySymbolProps, CURRENCY_MAP} from './index';

export default {
  title: 'CurrencySymbol',
  component: CurrencySymbol,
} as Meta;

type CurrencySymbolStoryMeta = Omit<
  TableGuidesProps<Omit<CurrencySymbolProps, ''>>,
  'Component'
> & {
  name: string;
};

const currencySymbolStoryMeta: CurrencySymbolStoryMeta = {
  name: 'Currency Symbol',
  cols: Object.keys(CURRENCY_MAP).map((code) => ({
    key: code,
    props: {code},
  })),
  rows: ['Sign', 'Text'].map((view) => ({
    key: view,
    props: {asSign: view === 'Sign'},
  })),
};

const Template: Story<CurrencySymbolProps> = () => (
  <TableGuides
    cols={currencySymbolStoryMeta.cols}
    rows={currencySymbolStoryMeta.rows}
    Component={(props) => (
      <div style={{textAlign: 'center'}}>
        <CurrencySymbol {...props} />
      </div>
    )}
  />
);

export const Default = Template.bind({});
Default.args = {};
