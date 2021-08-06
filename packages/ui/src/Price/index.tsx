import React, {forwardRef} from 'react';

import {Text} from '../';
import CurrencySymbol from '../CurrencySymbol';

import {prettyNumber} from '@eruditorgroup/profi-toolkit';

import type {TextProps} from '../';

export interface PriceProps extends TextProps {
  value: number;
  currencyCode: string;
  minority?: number; // разряд числа после запятой
  pretty?: boolean;
}

const Price = forwardRef<HTMLSpanElement, PriceProps>(
  (
    {
      as: Component = 'span',
      value,
      currencyCode,
      minority = 100,
      pretty,
      ...props
    },
    ref,
  ) => {
    if (isNaN(value)) return null;

    const roundedValue = Math.round(value * minority) / minority;
    return (
      <Text as={Component} ref={ref} {...props}>
        {pretty ? prettyNumber(roundedValue) : roundedValue}&nbsp;
        <CurrencySymbol code={currencyCode} />
      </Text>
    );
  },
);

Price.displayName = 'Price';
export default Price;
