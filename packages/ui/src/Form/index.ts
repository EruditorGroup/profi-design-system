import {forwardRef} from 'react';

import wrapControlWithRef from './wrapControlWithRef';
import BareInput from './BareInput';

import type {BaseControlProps} from './types';
import type {BareInputProps} from './BareInput';
import type {FormControlProps} from './FormControl';

import {default as FormControl} from './FormControl';

type InputProps = FormControlProps &
  BareInputProps & {
    children?: never;
  };

const Input = forwardRef<HTMLInputElement, InputProps>(
  wrapControlWithRef<HTMLInputElement, InputProps>(BareInput),
);

export {wrapControlWithRef, FormControl, Input};
export type {BaseControlProps, FormControlProps, InputProps};
