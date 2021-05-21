import type {FocusEventHandler, RefObject} from 'react';

type Mutable<T> = {
  -readonly [P in keyof T]: T[P];
};

type MutableRef<HTMLElementType> =
  | ((instance: HTMLElementType | null) => void)
  | Mutable<RefObject<HTMLElementType>>
  | null;

export type BaseControlProps<HTMLElementType = HTMLInputElement> = Partial<
  Pick<
    HTMLInputElement,
    'id' | 'className' | 'placeholder' | 'value' | 'defaultValue'
  >
> & {
  onFocus?: FocusEventHandler<HTMLElementType>;
  onBlur?: FocusEventHandler<HTMLElementType>;

  inputRef?: MutableRef<HTMLElementType>;

  children?: never;
};

export type HTMLElementWithValue = HTMLElement & {value: string};
