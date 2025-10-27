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
/**
 * @deprecated У компонента существует аналог из @mono-front/uikit-web. Стоит использовать его
 *
 * `import {Input} from '@mono-front/uikit-web';`
 */
type InputProps = React.PropsWithChildren<FormControlProps & BareInputProps>;

/**
 * @deprecated У компонента существует аналог из @mono-front/uikit-web. Стоит использовать его
 *
 * `import {Input} from '@mono-front/uikit-web';`
 */
const Input = forwardRef<HTMLInputElement, InputProps>(
  /*#__PURE__*/ wrapControlWithRef<HTMLInputElement, InputProps>(BareInput),
);

/**
 * @deprecated У компонента существует аналог из @mono-front/uikit-web. Стоит использовать его
 *
 * `import {Input} from '@mono-front/uikit-web';`
 */
type InputUnitProps = FormControlProps & BareInputUnitProps;

/**
 * @deprecated У компонента существует аналог из @mono-front/uikit-web. Стоит использовать его
 *
 * `import {Input} from '@mono-front/uikit-web';`
 */
const InputUnit = forwardRef<HTMLInputElement, InputUnitProps>(
  /*#__PURE__*/ wrapControlWithRef<HTMLInputElement, InputUnitProps>(
    BareInputUnit,
  ),
);

/**
 * @deprecated У компонента существует аналог из @mono-front/uikit-web. Стоит использовать его
 *
 * `import {TextArea} from '@mono-front/uikit-web';`
 */
type TextareaProps = Omit<FormControlProps, 'align'> & BareTextareaProps;

/**
 * @deprecated У компонента существует аналог из @mono-front/uikit-web. Стоит использовать его
 *
 * `import {TextArea} from '@mono-front/uikit-web';`
 */
const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  /*#__PURE__*/ wrapControlWithRef<HTMLTextAreaElement, TextareaProps>(
    BareTextarea,
  ),
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
