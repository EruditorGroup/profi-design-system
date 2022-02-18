import React, {forwardRef} from 'react';

import {Text} from '../';
import CurrencySymbol from '../CurrencySymbol';

import {prettyNumber} from '@eruditorgroup/profi-toolkit';

import type {TextProps} from '../';

type RangeSignature = (
  from: number,
  to: number,
  format: (value: number) => string | number,
) => React.ReactNode;

const fullRange: RangeSignature = (from, to, format) => (
  <>
    {format(from)}
    {from !== to && (
      <span>
        &ndash;
        {format(to)}
      </span>
    )}
  </>
);

const partialRange: RangeSignature = (from, to, format) => (
  <>
    {(from && 'от ') || (to && 'до ')}
    {format(from || to)}
  </>
);

export interface PriceProps extends TextProps {
  value?: number | [number | null, number | null];
  currencyCode: string;
  decimals?: number;
  pretty?: boolean;
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
    const isRange = typeof value !== 'number';
    const values = isRange ? value : [value];
    if (values.every((price) => isNaN(price))) return null;

    const [from, to] = values;

    const format = (value: number) => {
      const formatted = Number.isInteger(value)
        ? value
        : value.toFixed(decimals);
      return pretty ? prettyNumber(formatted) : formatted;
    };

    let valueView = null;
    if (from && to) {
      valueView = fullRange(from, to, format);
    } else if ((from || to) && isRange) {
      valueView = partialRange(from, to, format);
    } else {
      valueView = format(from);
    }

    return (
      <Text as={Component} ref={ref} {...props}>
        {valueView}&nbsp;
        <CurrencySymbol code={currencyCode} />
      </Text>
    );
  },
);

Price.displayName = 'Price';
export default Price;
