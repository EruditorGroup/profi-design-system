import React, {
  forwardRef,
  MutableRefObject,
  PropsWithChildren,
  useEffect,
  useState,
} from 'react';
import noop from 'lodash/noop';
import {useCombinedRef, findComponentInChildren} from '@eruditorgroup/profi-toolkit';
import Modal from '../../../Modal';
import List from '../../../List';
import Spinner from '../../../Spinner';
import cx from 'classnames';

import {IAutosuggestComponent, ISuggestValue, AutosuggestProps} from '../../types';
import AutosuggestVariant from '../AutosuggestVariant';
import {ActiveInputContext, FullscreenContext} from './contexts';
import ActiveInput from './ActiveInput';
import DefaultInput from './DefaultInput';
import RestModalSlot from './RestModalSlot';
import SuggestionListSlot from './SuggestionListSlot';

import styles from './Fullscreen.module.scss';
import ListItemStyles from '../../../List/components/ListItem/ListItem.module.scss';

interface IFullscreenProps {
  inputRef?: MutableRefObject<HTMLInputElement>;
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
    children,
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

  const handleFocus = () => {
    setFullscreenActive(true);
  };

  const handleClose = () => {
    setFullscreenActive(false);
  };

  const renderActiveInput = (
    props: React.InputHTMLAttributes<HTMLInputElement>,
  ) => {
    const customActiveInput = findComponentInChildren(
      children,
      ActiveInput,
    );
    return (
      <ActiveInputContext.Provider
        value={{setInputRef: setLocalInputRef, ...props}}
      >
        {customActiveInput || <ActiveInput iconPostion="leading" />}
      </ActiveInputContext.Provider>
    );
  };

  const renderDefaultInput = () => {
    const customDefaultInput = findComponentInChildren(
      children,
      DefaultInput,
    );
    return customDefaultInput || <DefaultInput iconPostion="leading" />;
  };

  return (
    <FullscreenContext.Provider
      value={{handleClose, value: props.inputProps.value, handleFocus}}
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
                  {containerChildren &&
                    findComponentInChildren(children, SuggestionListSlot)}
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
            renderInputComponent={renderActiveInput}
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
          {findComponentInChildren(children, RestModalSlot)}
        </Modal>
      ) : (
        renderDefaultInput()
      )}
    </FullscreenContext.Provider>
  );
}) as IAutosuggestComponent<PropsWithChildren<IFullscreenProps>> & {
  ActiveInput: typeof ActiveInput;
  DefaultInput: typeof DefaultInput;
  RestModalSlot: typeof RestModalSlot;
  SuggestionListSlot: typeof SuggestionListSlot;
};

Fullscreen.ActiveInput = ActiveInput;
Fullscreen.DefaultInput = DefaultInput;
Fullscreen.RestModalSlot = RestModalSlot;
Fullscreen.SuggestionListSlot = SuggestionListSlot;

export default Fullscreen;
