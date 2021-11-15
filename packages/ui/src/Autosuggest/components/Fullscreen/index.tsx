import React, {
  forwardRef,
  MutableRefObject,
  PropsWithChildren,
  useCallback,
} from 'react';
import noop from 'lodash/noop';
import {
  useCombinedRef,
  useControllableState,
} from '@eruditorgroup/profi-toolkit';
import {InputProps as AutosuggestInputProps} from 'react-autosuggest';
import cx from 'classnames';

import Modal from '../../../Modal';
import List from '../../../List';
import Spinner from '../../../Spinner';

import AutosuggestVariant from '../AutosuggestVariant';
import ActiveField from './ActiveField';
import DefaultInput from './DefaultInput';
import {FullscreenContext} from './contexts';

import type {InputProps} from '../../../Form';
import type {
  IAutosuggestComponent,
  ISuggestValue,
  AutosuggestProps,
} from '../../types';

import styles from './Fullscreen.module.scss';
import ListItemStyles from '../../../List/components/ListItem/ListItem.module.scss';
import {useDelayAlwaysRenderSuggestions} from './hooks/useDelayAlwaysRenderSuggestions';

interface State {
  isOpen: boolean;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type TStatefyEvent<T extends (...args: any) => void> = T extends (
  ...args: infer R
) => void
  ? (state: State, ...args: R) => void
  : never;

type TReplaceEvents<
  TEventKeys extends keyof AutosuggestInputProps<ISuggestValue>
> = {
  [k in TEventKeys]?: TStatefyEvent<AutosuggestInputProps<ISuggestValue>[k]>;
};

type SharedFieldProps = {
  value: string;
  fieldRef?: MutableRefObject<HTMLInputElement | HTMLTextAreaElement>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
} & Pick<InputProps, 'placeholder'> &
  Pick<
    AutosuggestInputProps<ISuggestValue>,
    'onChange' | 'onBlur' | 'onKeyDown' | 'onSubmit'
  > &
  TReplaceEvents<'onFocus'>;

interface IFullscreenProps {
  renderModalAvailableSpace?: () => JSX.Element;
  renderSuggestionListAddon?: () => JSX.Element;
  onChangeOpen?: (state: boolean) => void;
  isFullscreenOpen?: boolean;
  closeOnSuggestionSelected?: boolean;
  activeField: JSX.Element;
  defaultInput: JSX.Element;
  suggestionContainerClassName?: string;
  modalClassName?: string;
  modalBodyClassName?: string;
  sharedFieldProps: SharedFieldProps;
}

export type FullscreenAutosuggestProps = AutosuggestProps<IFullscreenProps>;

const Fullscreen = forwardRef(function Fullscreen(
  {
    suggestionsSize = 'm',
    isLoading,
    containerProps,
    shouldRenderSuggestions,
    onSuggestionSelected,
    renderModalAvailableSpace,
    renderSuggestionListAddon,
    defaultInput,
    activeField,
    suggestionContainerClassName,
    modalClassName,
    modalBodyClassName,
    renderSuggestion,
    onChangeOpen,
    closeOnSuggestionSelected = true,
    sharedFieldProps,
    alwaysRenderSuggestions,
    isFullscreenOpen,
    // div props
    ...props
  },
  ref,
) {
  const [isFullscreenActive, setFullscreenActive] = useControllableState({
    value: isFullscreenOpen,
    defaultValue: false,
    onChange: onChangeOpen,
  });

  const state: State = {
    isOpen: isFullscreenActive,
  };
  const [localInputRef, setLocalInputRef] = useCombinedRef<
    HTMLInputElement | HTMLTextAreaElement
  >(sharedFieldProps.fieldRef);

  const handleOpen = useCallback(() => {
    setFullscreenActive(true);
  }, [setFullscreenActive]);

  const handleClose = useCallback(() => {
    setFullscreenActive(false);
  }, [setFullscreenActive]);

  const hadleInputKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
    if (e.key === 'Enter') {
      sharedFieldProps.onSubmit?.(e);
    }
  };

  const enhancedSharedProps = {
    ...sharedFieldProps,
    onFocus: (e: React.FocusEvent<HTMLElement>) => {
      sharedFieldProps.onFocus?.(state, e);
    },
    ref: (setLocalInputRef as unknown) as React.Ref<HTMLInputElement>,
  };

  const delayedAlwaysRenderSuggestions = useDelayAlwaysRenderSuggestions(
    alwaysRenderSuggestions,
    isFullscreenActive,
  );

  return (
    <FullscreenContext.Provider
      value={{
        handleClose,
        value: sharedFieldProps.value,
        handleOpenModal: handleOpen,
      }}
    >
      {isFullscreenActive ? (
        <Modal
          className={cx(styles['root'], modalClassName)}
          bodyClassName={cx(styles['modal-body'], modalBodyClassName)}
          visible
          fullscreen
          onClose={noop}
          withPadding={false}
        >
          <AutosuggestVariant
            ref={ref}
            containerProps={containerProps}
            theme={{
              ...styles,
              suggestion: cx(ListItemStyles['bordered'], styles['suggestion']),
            }}
            shouldRenderSuggestions={
              shouldRenderSuggestions ?? ((value) => value > '')
            }
            renderSuggestionsContainer={({
              containerProps: _props,
              children,
            }) => (
              <div
                {..._props}
                className={cx(_props.className, suggestionContainerClassName)}
              >
                {renderSuggestionListAddon?.()}
                <List
                  as="div"
                  size={suggestionsSize}
                  className={styles['uilist']}
                  design="high"
                  onTouchStart={() => localInputRef.current.blur()}
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
              </div>
            )}
            renderInputComponent={(props) =>
              React.cloneElement(activeField, {
                ...props,
                onKeyDown: (e: React.KeyboardEvent<HTMLElement>) => {
                  hadleInputKeyDown(e);
                  props?.onKeyDown(e);
                },
              })
            }
            getSuggestionValue={({value}) => value}
            renderSuggestion={
              renderSuggestion ??
              ((suggestion: ISuggestValue, {isHighlighted}) => {
                return (
                  <List.Item as="div" active={isHighlighted}>
                    {suggestion.value}
                  </List.Item>
                );
              })
            }
            {...props}
            alwaysRenderSuggestions={delayedAlwaysRenderSuggestions}
            onSuggestionSelected={(e, data) => {
              closeOnSuggestionSelected && handleClose();
              onSuggestionSelected(e, data);
            }}
            inputProps={enhancedSharedProps}
          />
          {renderModalAvailableSpace?.()}
        </Modal>
      ) : (
        React.cloneElement(defaultInput, enhancedSharedProps)
      )}
    </FullscreenContext.Provider>
  );
}) as IAutosuggestComponent<
  PropsWithChildren<IFullscreenProps>,
  'inputProps'
> & {
  ActiveField: typeof ActiveField;
  DefaultInput: typeof DefaultInput;
};

Fullscreen.ActiveField = ActiveField;
Fullscreen.DefaultInput = DefaultInput;

export default Fullscreen;
