import React, {forwardRef} from 'react';
import ReactAutosuggest, {
  AutosuggestPropsSingleSection,
  AutosuggestPropsMultiSection,
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

export type TSection = {suggestions: ISuggestValue[]; title: string};

type SetDifference<A, B> = A extends B ? never : A;
type Diff<T, U> = Pick<T, SetDifference<keyof T, keyof U>>;

type DiffAutosuggestProps<T extends AutosuggestPropsBase<ISuggestValue>> = Diff<
  T,
  AutosuggestPropsBase<ISuggestValue>
>;

type TMultiVariantProps = DiffAutosuggestProps<
  Omit<
    AutosuggestPropsMultiSection<ISuggestValue, TSection>,
    'getSectionSuggestions'
  >
> & {sectionClassName?: string};

type TSingleVariantProps = DiffAutosuggestProps<
  AutosuggestPropsSingleSection<ISuggestValue>
>;

export type AutosuggestProps = Omit<
  AutosuggestPropsBase<ISuggestValue> & InputProps,
  RewritedProps
> &
  (TMultiVariantProps | TSingleVariantProps) & {
    suggestionsSize?: ListProps['size'];
    isLoading?: boolean;
    isMultiple?: boolean;
    suggestionsContainerProps?: SpaceProps;
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
  const baseProps: AutosuggestPropsBase<ISuggestValue> = {
    ref: ref,
    theme: styles,
    containerProps: {
      ...containerProps,
      className: cx(containerProps?.className, styles['root']),
    },
    renderSuggestionsContainer: ({containerProps: _props, children, query}) =>
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
      ),
    shouldRenderSuggestions: shouldRenderSuggestions ?? ((value) => value > ''),
    renderInputComponent: (
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
    ),
    getSuggestionValue: ({value}) => value,
    ...props,
  };
  if (props.multiSection === true) {
    return (
      <ReactAutosuggest<ISuggestValue, TSection>
        multiSection={true}
        suggestions={props.suggestions as TSection[]}
        getSectionSuggestions={({suggestions}) => suggestions}
        {...baseProps}
        theme={{...baseProps.theme, sectionContainer: props.sectionClassName}}
      />
    );
  } else {
    return (
      <ReactAutosuggest<ISuggestValue>
        multiSection={false}
        suggestions={props.suggestions as ISuggestValue[]}
        {...baseProps}
      />
    );
  }
}) as IAutosuggestComponent;

export default Autosuggest;
