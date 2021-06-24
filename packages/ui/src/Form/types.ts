import type {
  CSSProperties,
  FocusEventHandler,
  InputHTMLAttributes,
  RefObject,
} from 'react';
import React from 'react';

type Mutable<T> = {
  -readonly [P in keyof T]: T[P];
};

type MutableRef<HTMLElementType> =
  | ((instance: HTMLElementType | null) => void)
  | Mutable<RefObject<HTMLElementType>>
  | null;

export type BaseControlProps<HTMLElementType = HTMLInputElement> = Partial<
  Pick<
    InputHTMLAttributes<HTMLInputElement>,
    'id' | 'className' | 'placeholder' | 'value' | 'defaultValue'
  >
> &
  React.PropsWithChildren<{
    style?: CSSProperties;

    onFocus?: FocusEventHandler<HTMLElementType>;
    onBlur?: FocusEventHandler<HTMLElementType>;

    inputRef?: MutableRef<HTMLElementType>;
    inputClassName?: string;
  }>;

export type HTMLElementWithValue = HTMLElement & {value: string};
