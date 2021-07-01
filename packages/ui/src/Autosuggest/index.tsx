import React, {forwardRef, useCallback, useEffect, useState} from 'react';
import ReactAutosuggest, {
  AutosuggestPropsSingleSection,
} from 'react-autosuggest';
import type {AutosuggestPropsBase} from 'react-autosuggest';
import {Input, InputProps} from '../Form';
import Spinner from '../Spinner';
import Space from '../Space';
import common from '../styles/common.module.css';

import styles from './Autosuggest.module.scss';

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
    onSelected: (value: ISuggestValue | ISuggestValue[]) => void;
    suggestions: ISuggestValue[];
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
    suggestions: values,
    onSuggestionsFetchRequested,

    inputClassName,
    inputRef,

    leading,
    trailing,
    withFloatLabel,
    block,
    invalid,
    disabled,
    style,

    // div props
    ...props
  },
  ref,
) {
  const [isLoading, setLoading] = useState(false);
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

  console.log(suggestions);

  return (
    <ReactAutosuggest<ISuggestValue>
      ref={ref}
      theme={styles}
      suggestions={suggestions}
      onSuggestionsFetchRequested={async (req) => {
        if (onSuggestionsFetchRequested) {
          setLoading(true);
          await onSuggestionsFetchRequested(req);
          setLoading(false);
        } else {
          updateSuggestions();
        }
      }}
      onSuggestionSelected={(_, data) => onSelected(data.suggestion)}
      renderSuggestionsContainer={({containerProps, children}) => (
        <Space withShadow radius={size} bg="white" {...containerProps}>
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
          block={block}
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
        onChange: (_, params) => setInput(params.newValue),
      }}
      {...props}
    />
  );
});

export default Autosuggest;
