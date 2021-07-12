import React, {MouseEventHandler, useCallback, useMemo, useRef} from 'react';
import type {ComponentProps, ComponentType, ReactElement, Ref} from 'react';

import {useFloatLabel} from '@eruditorgroup/profi-toolkit';

import type {BaseControlProps, HTMLElementWithValue} from './types';
import FormControl from './FormControl';
import type {FormControlProps} from './FormControl';

const GLOBAL_ID_PREFIX = 'profi-ui-';
let globalIdCount = 0;

export type ControlProps<T extends BaseControlProps = BaseControlProps> = T &
  FormControlProps & {
    children?: never;
  };

const wrapControlWithRef = <
  HTMLElementType extends HTMLElementWithValue,
  PropsType extends BaseControlProps<HTMLElementType> & FormControlProps
>(
  Component: ComponentType<PropsType>,
) => (props: PropsType, ref: Ref<HTMLElementType>): ReactElement => {
  const {
    withFloatLabel,
    size = 'l',
    block = true,
    invalid,
    disabled,
    style,

    leading,
    trailing,
    upper,
    lower,

    id,
    className,
    placeholder,
    value,
    defaultValue,
    onFocus,
    onBlur,
    onClick,
    inputClassName,
    ...restInputProps
  } = props;
  const inputId = useMemo(() => id || `${GLOBAL_ID_PREFIX}${globalIdCount++}`, [
    id,
  ]);

  const [isFloated, focusHandlers] = useFloatLabel<HTMLElementType>(
    Boolean(value || defaultValue),
    {
      onFocus,
      onBlur,
    },
  );

  const internalRef = useRef<HTMLElementType>(null);
  const inputRef = useMemo(() => ref || internalRef, [ref]);

  const _onClick = useRef(onClick);
  _onClick.current = onClick;

  const onWrapperClick: MouseEventHandler<HTMLDivElement> = useCallback(
    (evt) => {
      _onClick.current?.(evt);
      if (evt.target !== evt.currentTarget) return;
      if (typeof inputRef === 'object' && inputRef !== null) {
        inputRef.current?.click();
        inputRef.current?.focus();
      }
    },
    [inputRef, _onClick],
  );

  const wrapperProps = {
    className,
    label: withFloatLabel ? placeholder : undefined,
    withFloatLabel,
    isLabelFloated: isFloated,
    size: size as FormControlProps['size'],
    block,
    invalid,
    disabled,
    style,
    leading,
    trailing,
    upper,
    lower,
  };

  const inputProps = {
    id: inputId,
    value,
    defaultValue,
    disabled,
    placeholder: withFloatLabel ? '' : placeholder,
    className: inputClassName,
    ...focusHandlers,
    ...restInputProps,
  } as ComponentProps<typeof Component>;

  return (
    <FormControl labelFor={inputId} onClick={onWrapperClick} {...wrapperProps}>
      <Component {...inputProps} inputRef={inputRef} />
    </FormControl>
  );
};

export default wrapControlWithRef;
