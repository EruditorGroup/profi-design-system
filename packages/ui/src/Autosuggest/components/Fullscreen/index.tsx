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
import ActiveInput from './ActiveInput';
import DefaultInput from './DefaultInput';

import styles from './Fullscreen.module.scss';
import ListItemStyles from '../../../List/components/ListItem/ListItem.module.scss';

interface IFullscreenProps {
  inputRef?: MutableRefObject<HTMLInputElement>;
  renderModalAvailableSpace?: () => JSX.Element;
  renderSuggesctionListAddon?: () => JSX.Element;
  activeInput: JSX.Element;
  defaultInput: JSX.Element;
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
    renderSuggesctionListAddon,
    defaultInput,
    activeInput,
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
          className={styles['root']}
          visible
          fullscreen
          onClose={noop}
          withCloseButton={false}
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
              children: containerChildren,
              query,
            }) =>
              query > '' && (
                <div {..._props}>
                  {containerChildren && renderSuggesctionListAddon?.()}
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
                      containerChildren
                    )}
                  </List>
                </div>
              )
            }
            renderInputComponent={(props) =>
              React.cloneElement(activeInput, {...props})
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
  ActiveInput: typeof ActiveInput;
  DefaultInput: typeof DefaultInput;
};

Fullscreen.ActiveInput = ActiveInput;
Fullscreen.DefaultInput = DefaultInput;

export default Fullscreen;
