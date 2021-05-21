import React, {useCallback, useMemo, useRef} from 'react';
import type {ComponentProps, ComponentType, ReactElement, Ref} from 'react';

import {useFloatLabel} from '@eruditorgroup/profi-toolkit';

import type {BaseControlProps, HTMLElementWithValue} from './types';
import FormControl from './FormControl';
import type {FormControlProps} from './FormControl';

export type ControlProps<T extends BaseControlProps = BaseControlProps> = T &
  FormControlProps & {
    children?: never;
  };

const controlFactory = <
  HTMLElementType extends HTMLElementWithValue,
  PropsType extends BaseControlProps<HTMLElementType> & FormControlProps
>(
  Component: ComponentType<PropsType>,
) => (props: PropsType, ref: Ref<HTMLElementType>): ReactElement => {
  const {
    id,
    className,
    placeholder,
    withFloatLabel,
    size = 'l',
    block = true,
    disabled,
    invalid,
    value,
    defaultValue,
    leading,
    trailing,
    onFocus,
    onBlur,
    ...restInputProps
  } = props;

  type FocusElementType = HTMLElementType extends HTMLInputElement
    ? HTMLInputElement
    : HTMLTextAreaElement;

  const [isFloated, focusHandlers] = useFloatLabel<HTMLElementType>(
    Boolean(value || defaultValue),
    {
      onFocus,
      onBlur,
    },
  );

  const internalRef = useRef<FocusElementType>(null);
  const inputRef = useMemo(() => ref || internalRef, [ref]);

  const onWrapperClick = useCallback((): void => {
    if (typeof inputRef === 'object' && inputRef !== null) {
      inputRef.current?.focus();
    }
  }, [inputRef]);

  const wrapperProps = {
    className,
    label: withFloatLabel ? placeholder : undefined,
    withFloatLabel,
    isLabelFloated: isFloated,
    size: size as FormControlProps['size'],
    block,
    invalid,
    disabled,
    leading,
    trailing,
  };

  const inputProps = {
    id,
    value,
    defaultValue,
    disabled,
    placeholder: withFloatLabel ? '' : placeholder,
    ...focusHandlers,
    ...restInputProps,
  } as ComponentProps<typeof Component>;

  return (
    <FormControl labelFor={id} onClick={onWrapperClick} {...wrapperProps}>
      <Component {...inputProps} inputRef={inputRef} />
    </FormControl>
  );
};

export default controlFactory;
