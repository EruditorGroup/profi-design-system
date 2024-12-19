import React, {MouseEventHandler, useCallback, useMemo, useRef} from 'react';
import type {ComponentProps, ComponentType, ReactElement, Ref} from 'react';

import {useFloatLabel, canUseDom} from '@eruditorgroup/profi-toolkit';

import type {BaseControlProps, HTMLElementWithValue} from './types';
import FormControl from './FormControl';
import type {FormControlProps} from './FormControl';
import {useCombinedRef} from '@eruditorgroup/profi-toolkit';

const GLOBAL_ID_PREFIX = 'profi-ui-';
let globalIdCount = 0;

const isClientSide = canUseDom();

export type ControlProps<T extends BaseControlProps = BaseControlProps> = T &
  FormControlProps & {
    children?: never;
  };

const wrapControlWithRef = /*#__PURE__*/ <
  HTMLElementType extends HTMLElementWithValue,
  PropsType extends BaseControlProps<HTMLElementType> & FormControlProps
>(
  Component: ComponentType<React.PropsWithChildren<PropsType>>,
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

  const [inputRef, setRef] = useCombinedRef(ref);

  const [isFloated, focusHandlers] = useFloatLabel<HTMLElementType>(
    !!(
      value ||
      defaultValue ||
      restInputProps.autoFocus ||
      (isClientSide && inputRef.current === document.activeElement)
    ),
    {onFocus, onBlur},
  );

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
      <Component {...inputProps} inputRef={setRef} />
    </FormControl>
  );
};

export default wrapControlWithRef;
