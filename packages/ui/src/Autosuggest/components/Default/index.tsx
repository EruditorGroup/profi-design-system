import React, {forwardRef} from 'react';
import cx from 'classnames';
import {Input, InputProps} from '../../../Form';
import Spinner from '../../../Spinner';
import Space, {SpaceProps} from '../../../Space';
import List from '../../../List';
import AutosuggestVariant from '../AutosuggestVariant';

import styles from './Autosuggest.module.scss';

import {
  IAutosuggestComponent,
  AutosuggestProps as AutosuggestPropsBase,
  DataAttrs,
} from '../../types';

interface IProps extends InputProps {
  suggestionsContainerProps?: SpaceProps;
  inputProps: DataAttrs;
}

export type AutosuggestProps = AutosuggestPropsBase<IProps>;

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
    showSuggestionsOnEmptyQuery,

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
    <AutosuggestVariant
      ref={ref}
      theme={styles}
      containerProps={{
        ...containerProps,
        className: cx(containerProps?.className, styles['root']),
      }}
      renderSuggestionsContainer={({containerProps: _props, children, query}) =>
        showSuggestionsOnEmptyQuery || query > '' && (
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
}) as IAutosuggestComponent<IProps>;

export default Autosuggest;
