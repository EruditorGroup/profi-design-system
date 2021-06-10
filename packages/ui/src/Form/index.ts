import {forwardRef} from 'react';

import wrapControlWithRef from './wrapControlWithRef';
import BareInput from './BareInput';
import BareTextarea from './BareTextarea';
import BareInputUnit from './BareInputUnit';
import Checkbox from './Checkbox';
import Radio from './Radio';

import type {BaseControlProps} from './types';
import type {BareInputProps} from './BareInput';
import type {BareInputUnitProps} from './BareInputUnit';
import type {BareTextareaProps} from './BareTextarea';
import type {FormControlProps} from './FormControl';
import type {CheckboxProps} from './Checkbox';
import type {RadioProps} from './Radio';

import {default as FormControl} from './FormControl';

type InputProps = FormControlProps &
  BareInputProps & {
    children?: never;
  };

const Input = forwardRef<HTMLInputElement, InputProps>(
  wrapControlWithRef<HTMLInputElement, InputProps>(BareInput),
);

type InputUnitProps = FormControlProps &
  BareInputUnitProps & {
    children?: never;
  };

const InputUnit = forwardRef<HTMLInputElement, InputUnitProps>(
  wrapControlWithRef<HTMLInputElement, InputUnitProps>(BareInputUnit),
);

type TextareaProps = FormControlProps &
  BareTextareaProps & {
    children?: never;
  };

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  wrapControlWithRef<HTMLTextAreaElement, TextareaProps>(BareTextarea),
);

export {
  wrapControlWithRef,
  FormControl,
  Input,
  InputUnit,
  Textarea,
  Checkbox,
  Radio,
};
export type {
  BaseControlProps,
  FormControlProps,
  InputProps,
  InputUnitProps,
  TextareaProps,
  CheckboxProps,
  RadioProps,
};
