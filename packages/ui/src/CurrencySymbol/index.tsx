import React, {forwardRef, HTMLAttributes} from 'react';

export const CURRENCY_MAP = {
  RUB: {
    text: 'руб.',
    sign: '&#8381;',
  },
  UAH: {
    text: 'грн',
    sign: '&#8372;',
  },
  KZT: {
    text: 'тг',
    sign: '&#8376;',
  },
  BYN: {
    text: 'руб.',
    sign: 'руб.',
  },
};

export interface CurrencySymbolProps extends HTMLAttributes<HTMLSpanElement> {
  code: string;
  asSign?: boolean;
}

const CurrencySymbol = forwardRef<HTMLSpanElement, CurrencySymbolProps>(
  ({code, asSign = true, className, ...props}, ref) => {
    const currency = CURRENCY_MAP[code];
    if (!currency) return null;

    const {sign, text} = currency;
    return (
      <span
        dangerouslySetInnerHTML={{__html: asSign ? sign : text}}
        className={className}
        ref={ref}
        {...props}
      />
    );
  },
);

CurrencySymbol.displayName = 'CurrencySymbol';
export default CurrencySymbol;
