import React, {forwardRef, useCallback, useEffect, useState} from 'react';
import ReactAutosuggest, {
  AutosuggestPropsSingleSection,
} from 'react-autosuggest';
import cx from 'classnames';
import type {AutosuggestPropsBase} from 'react-autosuggest';
import {Input, InputProps} from '../Form';
import Spinner from '../Spinner';
import Space from '../Space';

import styles from './Autosuggest.module.scss';
import common from '../styles/common.module.css';

export type ISuggestValue = {value: string; label?: React.ReactNode};
type RewritedProps =
  | 'size'
  | 'ref'
  | 'theme'
  | 'getSuggestionValue'
  | 'onSuggestionSelected'
  | 'renderSuggestion'
  | 'renderInputComponent'
  | 'inputProps';

export type AutosuggestProps = Omit<
  AutosuggestPropsBase<ISuggestValue>,
  RewritedProps
> &
  Omit<AutosuggestPropsSingleSection<ISuggestValue>, RewritedProps> &
  InputProps & {
    onSelected: (value: ISuggestValue) => void;
    suggestions: ISuggestValue[];
    isLoading?: boolean;
  };

const Autosuggest = forwardRef<
  // мы правда не знаем, что тут будет
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ReactAutosuggest<ISuggestValue, any>,
  AutosuggestProps
>(function Autosuggest(
  {
    className,
    size = 'm',
    onSelected,
    isLoading,
    suggestions: values,
    onSuggestionsFetchRequested,
    block = false,
    inputProps,

    inputClassName,
    inputRef,

    leading,
    trailing,
    withFloatLabel,
    invalid,
    disabled,
    style,

    // div props
    ...props
  },
  ref,
) {
  const [input, setInput] = useState<string>('');
  const [suggestions, setSuggestions] = useState<ISuggestValue[]>([]);

  const updateSuggestions = useCallback(() => {
    setSuggestions(() =>
      values.filter(({value}) =>
        value.toLowerCase().includes(input.toLowerCase()),
      ),
    );
  }, [values, input]);

  useEffect(updateSuggestions, [updateSuggestions]);

  return (
    <ReactAutosuggest<ISuggestValue>
      ref={ref}
      theme={styles}
      suggestions={suggestions}
      onSuggestionsFetchRequested={(req) => {
        if (onSuggestionsFetchRequested) {
          onSuggestionsFetchRequested(req);
        } else {
          updateSuggestions();
        }
      }}
      onSuggestionSelected={(_, data) => onSelected(data.suggestion)}
      renderSuggestionsContainer={({containerProps, children}) => (
        <Space
          withShadow
          radius={size}
          bg="white"
          {...containerProps}
          className={cx(containerProps.className, block && styles['block'])}
        >
          {isLoading ? (
            <Spinner
              size={size}
              className={styles['spinner']}
              color="primary"
            />
          ) : (
            children
          )}
        </Space>
      )}
      renderInputComponent={(
        props: React.InputHTMLAttributes<HTMLInputElement>,
      ) => (
        <Input
          {...props}
          inputRef={inputRef}
          className={className}
          inputClassName={inputClassName}
          size={size}
          leading={leading}
          trailing={trailing}
          withFloatLabel={withFloatLabel}
          invalid={invalid}
          disabled={disabled}
          style={style}
        />
      )}
      getSuggestionValue={({value}) => value}
      renderSuggestion={({label, value}, params) => (
        <Space
          bg={params.isHighlighted ? 'light' : 'transparent'}
          px={13}
          py={[13, 15]}
          className={common[`size-${size}`]}
        >
          {label ?? value}
        </Space>
      )}
      inputProps={{
        value: input,
        onChange: (ev, params) => {
          if (['enter', 'click'].includes(params.method)) {
            setInput(params.newValue);
          } else if (params.method === 'type') {
            setInput(
              (ev as React.ChangeEvent<HTMLInputElement>).currentTarget.value,
            );
          }
        },
      }}
      {...props}
    />
  );
});

export default Autosuggest;
