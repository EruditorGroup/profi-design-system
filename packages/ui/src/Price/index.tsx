import React, {forwardRef} from 'react';

import {Text} from '../';
import CurrencySymbol from '../CurrencySymbol';

import {prettyNumber} from '@eruditorgroup/profi-toolkit';

import type {TextProps} from '../';

export interface PriceProps extends TextProps {
  value: number;
  currencyCode: string;
  decimals?: number;
  pretty?: boolean;
}

function isInteger(n: number) {
  return n % 1 === 0;
}

const Price = forwardRef<HTMLSpanElement, PriceProps>(
  (
    {
      as: Component = 'span',
      value,
      currencyCode,
      decimals = 2,
      pretty,
      ...props
    },
    ref,
  ) => {
    if (isNaN(value)) return null;

    const formattedValue = isInteger(value) ? value : value.toFixed(decimals);
    return (
      <Text as={Component} ref={ref} {...props}>
        {pretty ? prettyNumber(formattedValue) : formattedValue}&nbsp;
        <CurrencySymbol code={currencyCode} />
      </Text>
    );
  },
);

Price.displayName = 'Price';
export default Price;
