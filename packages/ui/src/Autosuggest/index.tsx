import React, {forwardRef} from 'react';
import ReactAutosuggest, {
  AutosuggestPropsSingleSection,
} from 'react-autosuggest';
import cx from 'classnames';
import type {AutosuggestPropsBase} from 'react-autosuggest';
import {Input, InputProps} from '../Form';
import Spinner from '../Spinner';
import Space, {SpaceProps} from '../Space';
import List, {ListProps} from '../List';

import styles from './Autosuggest.module.scss';

export type ISuggestValue = {
  value: string;
  [key: string]: React.ReactNode;
};
type RewritedProps =
  | 'ref'
  | 'theme'
  | 'getSuggestionValue'
  | 'renderSuggestionsContainer'
  | 'renderInputComponent'
  | 'value'
  | 'onChange';

export type AutosuggestProps = Omit<
  AutosuggestPropsBase<ISuggestValue>,
  RewritedProps
> &
  Omit<
    AutosuggestPropsSingleSection<ISuggestValue> & InputProps,
    RewritedProps
  > & {
    suggestionsSize?: ListProps['size'];
    suggestions: ISuggestValue[];
    isLoading?: boolean;
    isMultiple?: boolean;
    suggestionsContainerProps: SpaceProps;
  };

type IAutosuggestComponent = React.ForwardRefExoticComponent<
  // не знаем что там будет
  // eslint-disable-next-line
  AutosuggestProps & React.RefAttributes<ReactAutosuggest<ISuggestValue, any>>
>;

const Autosuggest = forwardRef(function Autosuggest(
  {
    className,
    size = 'm',
    suggestionsSize = 'm',
    isLoading,
    suggestions,
    block = false,
    inputClassName,
    containerProps,
    suggestionsContainerProps,
    inputRef,
    shouldRenderSuggestions,

    leading,
    trailing,
    upper,
    lower,
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
      containerProps={{
        ...containerProps,
        className: cx(containerProps?.className, styles['root']),
      }}
      renderSuggestionsContainer={({containerProps: _props, children, query}) =>
        query > '' && (
          <Space
            withShadow
            radius={suggestionsSize}
            bg="white"
            {..._props}
            {...(suggestionsContainerProps || {})}
            className={cx(
              _props?.className,
              suggestionsContainerProps?.className,
              styles['suggestions'],
              block && styles['block'],
            )}
          >
            <List
              as="div"
              className={styles['uilist']}
              design="low"
              size={suggestionsSize}
            >
              {isLoading ? (
                <Spinner
                  size={suggestionsSize}
                  className={styles['spinner']}
                  color="secondary"
                />
              ) : (
                children
              )}
            </List>
          </Space>
        )
      }
      shouldRenderSuggestions={
        shouldRenderSuggestions ?? ((value) => value > '')
      }
      renderInputComponent={(
        props: React.InputHTMLAttributes<HTMLInputElement>,
      ) => (
        <Input
          {...props}
          upper={upper}
          lower={lower}
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
      {...props}
    />
  );
}) as IAutosuggestComponent;

export default Autosuggest;
