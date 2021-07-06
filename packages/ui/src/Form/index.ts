import {forwardRef} from 'react';

import wrapControlWithRef from './wrapControlWithRef';
import BareInput from './BareInput';
import BareTextarea from './BareTextarea';
import BareInputUnit from './BareInputUnit';
import PhoneInput from './BarePhoneInput';
import Checkbox from './Checkbox';
import Radio from './Radio';

import type {BaseControlProps} from './types';
import type {BareInputProps} from './BareInput';
import type {BareInputUnitProps} from './BareInputUnit';
import type {PhoneInputProps} from './BarePhoneInput';
import type {BareTextareaProps} from './BareTextarea';
import type {FormControlProps, FormControlSize} from './FormControl';
import type {CheckboxProps} from './Checkbox';
import type {RadioProps} from './Radio';

import {default as FormControl} from './FormControl';

type InputProps = React.PropsWithChildren<FormControlProps & BareInputProps>;

const Input = forwardRef<HTMLInputElement, InputProps>(
  wrapControlWithRef<HTMLInputElement, InputProps>(BareInput),
);

type InputUnitProps = FormControlProps & BareInputUnitProps;

const InputUnit = forwardRef<HTMLInputElement, InputUnitProps>(
  wrapControlWithRef<HTMLInputElement, InputUnitProps>(BareInputUnit),
);

type TextareaProps = FormControlProps & BareTextareaProps;

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  wrapControlWithRef<HTMLTextAreaElement, TextareaProps>(BareTextarea),
);

export {
  wrapControlWithRef,
  FormControl,
  Input,
  InputUnit,
  PhoneInput,
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
  PhoneInputProps,
  FormControlSize,
};
