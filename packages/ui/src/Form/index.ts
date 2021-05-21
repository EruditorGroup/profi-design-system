import {forwardRef} from 'react';

import wrapControlWithRef from './wrapControlWithRef';
import BareInput from './BareInput';
import BareTextarea from './BareTextarea';

import type {BaseControlProps} from './types';
import type {BareInputProps} from './BareInput';
import type {BareTextareaProps} from './BareTextarea';
import type {FormControlProps} from './FormControl';

import {default as FormControl} from './FormControl';

type InputProps = FormControlProps &
  BareInputProps & {
    children?: never;
  };

const Input = forwardRef<HTMLInputElement, InputProps>(
  wrapControlWithRef<HTMLInputElement, InputProps>(BareInput),
);

type TextareaProps = FormControlProps &
  BareTextareaProps & {
    children?: never;
  };

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  wrapControlWithRef<HTMLTextAreaElement, TextareaProps>(BareTextarea),
);

export {wrapControlWithRef, FormControl, Input, Textarea};
export type {BaseControlProps, FormControlProps, InputProps, TextareaProps};
