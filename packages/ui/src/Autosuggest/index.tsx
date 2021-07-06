import React, {forwardRef} from 'react';
import ReactAutosuggest, {
  AutosuggestPropsSingleSection,
} from 'react-autosuggest';
import cx from 'classnames';
import type {AutosuggestPropsBase} from 'react-autosuggest';
import {Input, InputProps} from '../Form';
import Spinner from '../Spinner';
import Space from '../Space';

import AutosuggestTag from './components/Tag';

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
  | 'renderInputComponent';

export type AutosuggestProps = Omit<
  AutosuggestPropsBase<ISuggestValue>,
  RewritedProps
> &
  Omit<AutosuggestPropsSingleSection<ISuggestValue>, RewritedProps> &
  Omit<InputProps, 'value' | 'onChange'> & {
    onSelected: (value: ISuggestValue) => void;
    suggestions: ISuggestValue[];
    isLoading?: boolean;
    isMultiple?: boolean;
  };

type IAutosuggestComponent = React.ForwardRefExoticComponent<
  // не знаем что там будет
  // eslint-disable-next-line
  AutosuggestProps & React.RefAttributes<ReactAutosuggest<ISuggestValue, any>>
> & {
  Tag: typeof AutosuggestTag;
};

const Autosuggest = forwardRef(function Autosuggest(
  {
    className,
    size = 'm',
    onSelected,
    isLoading,
    suggestions,
    block = false,
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
  return (
    <ReactAutosuggest<ISuggestValue>
      ref={ref}
      theme={styles}
      suggestions={suggestions}
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
          wrap
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
      {...props}
    />
  );
}) as IAutosuggestComponent;

Autosuggest.Tag = AutosuggestTag;

export default Autosuggest;
