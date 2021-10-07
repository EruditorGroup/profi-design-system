import React, {
  forwardRef,
  MutableRefObject,
  PropsWithChildren,
  useEffect,
  useState,
  useCallback,
} from 'react';
import noop from 'lodash/noop';
import {useCombinedRef} from '@eruditorgroup/profi-toolkit';
import Modal from '../../../Modal';
import List from '../../../List';
import Spinner from '../../../Spinner';
import cx from 'classnames';

import {
  IAutosuggestComponent,
  ISuggestValue,
  AutosuggestProps,
} from '../../types';
import AutosuggestVariant from '../AutosuggestVariant';
import {FullscreenContext} from './contexts';
import ActiveField from './ActiveField';
import DefaultInput from './DefaultInput';

import styles from './Fullscreen.module.scss';
import ListItemStyles from '../../../List/components/ListItem/ListItem.module.scss';

interface IFullscreenProps {
  inputRef?: MutableRefObject<HTMLInputElement | HTMLTextAreaElement>;
  renderModalAvailableSpace?: () => JSX.Element;
  renderSuggestionListAddon?: () => JSX.Element;
  activeField: JSX.Element;
  defaultInput: JSX.Element;
  suggestionContainerClassName?: string;
  modalClassName?: string;
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
    // div props
    ...props
  },
  ref,
) {
  const [isFullscreenActive, setFullscreenActive] = useState(false);
  const [localInputRef, setLocalInputRef] = useCombinedRef(inputRef);

  useEffect(() => {
    localInputRef.current && localInputRef.current.focus();
  }, [isFullscreenActive, localInputRef]);

  const handleFocus = useCallback(() => {
    setFullscreenActive(true);
  }, []);

  const handleClose = useCallback(() => {
    setFullscreenActive(false);
  }, []);

  return (
    <FullscreenContext.Provider
      value={{
        handleClose,
        value: props.inputProps.value,
        handleFocus,
        setInputRef: setLocalInputRef,
      }}
    >
      {isFullscreenActive ? (
        <Modal
          className={cx(styles['root'], modalClassName)}
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
              query,
            }) =>
              query > '' && (
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
              )
            }
            renderInputComponent={(props) =>
              React.cloneElement(activeField, {...props})
            }
            getSuggestionValue={({value}) => value}
            renderSuggestion={(suggestion: ISuggestValue, {isHighlighted}) => {
              return (
                <List.Item as="div" active={isHighlighted}>
                  {suggestion.value}
                </List.Item>
              );
            }}
            {...props}
            onSuggestionSelected={(e, data) => {
              handleClose();
              onSuggestionSelected(e, data);
            }}
          />
          {renderModalAvailableSpace?.()}
        </Modal>
      ) : (
        defaultInput
      )}
    </FullscreenContext.Provider>
  );
}) as IAutosuggestComponent<PropsWithChildren<IFullscreenProps>> & {
  ActiveField: typeof ActiveField;
  DefaultInput: typeof DefaultInput;
};

Fullscreen.ActiveField = ActiveField;
Fullscreen.DefaultInput = DefaultInput;

export default Fullscreen;
