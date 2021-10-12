import React, {
  forwardRef,
  MutableRefObject,
  PropsWithChildren,
  useEffect,
  useState,
  useCallback,
} from 'react';
import noop from 'lodash/noop';
import {InputProps as AutosuggestInputProps} from 'react-autosuggest';
import cx from 'classnames';

import {
  useCombinedRef,
  useMoveCaretToEndOnFocus,
} from '@eruditorgroup/profi-toolkit';
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
  RewrittenProps,
} from '../../types';

import styles from './Fullscreen.module.scss';
import ListItemStyles from '../../../List/components/ListItem/ListItem.module.scss';

type SharedFieldProps = {
  value: string;
  onChange: AutosuggestInputProps<ISuggestValue>['onChange'];
  onBlur?: AutosuggestInputProps<ISuggestValue>['onBlur'];
  [key: string]: any;
} & Pick<InputProps, 'placeholder'>;

interface IFullscreenProps {
  inputRef?: MutableRefObject<HTMLInputElement | HTMLTextAreaElement>;
  renderModalAvailableSpace?: () => JSX.Element;
  renderSuggestionListAddon?: () => JSX.Element;
  onOpen?: () => void;
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
    inputRef,
    onSuggestionSelected,
    renderModalAvailableSpace,
    renderSuggestionListAddon,
    defaultInput,
    activeField,
    suggestionContainerClassName,
    modalClassName,
    modalBodyClassName,
    renderSuggestion,
    onOpen,
    closeOnSuggestionSelected = true,
    sharedFieldProps,
    // div props
    ...props
  },
  ref,
) {
  const [isFullscreenActive, setFullscreenActive] = useState(false);
  const [localInputRef, setLocalInputRef] = useCombinedRef(inputRef);
  useMoveCaretToEndOnFocus(localInputRef, [isFullscreenActive]);

  useEffect(() => {
    const input = localInputRef.current;
    if (input) {
      input.focus();
    }
  }, [isFullscreenActive, localInputRef]);

  const handleOpen = useCallback(() => {
    setFullscreenActive(true);
    onOpen?.();
  }, [onOpen]);

  const handleClose = useCallback(() => {
    setFullscreenActive(false);
  }, []);

  const handleFocus = useCallback(() => {
    handleOpen();
  }, [handleOpen]);

  return (
    <FullscreenContext.Provider
      value={{
        handleClose,
        value: sharedFieldProps.value,
        handleFocus,
        setInputRef: setLocalInputRef,
      }}
    >
      {isFullscreenActive ? (
        <Modal
          className={cx(styles['root'], modalClassName)}
          bodyClassName={cx(styles['modal-body'], modalBodyClassName)}
          visible
          fullscreen
          onClose={noop}
          withCloseButton={false}
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
              React.cloneElement(activeField, {...props})
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
            onSuggestionSelected={(e, data) => {
              closeOnSuggestionSelected && handleClose();
              onSuggestionSelected(e, data);
            }}
            inputProps={sharedFieldProps}
          />
          {renderModalAvailableSpace?.()}
        </Modal>
      ) : (
        React.cloneElement(defaultInput, sharedFieldProps)
      )}
    </FullscreenContext.Provider>
  );
}) as IAutosuggestComponent<
  PropsWithChildren<IFullscreenProps>,
  RewrittenProps | 'inputProps'
> & {
  ActiveField: typeof ActiveField;
  DefaultInput: typeof DefaultInput;
};

Fullscreen.ActiveField = ActiveField;
Fullscreen.DefaultInput = DefaultInput;

export default Fullscreen;
