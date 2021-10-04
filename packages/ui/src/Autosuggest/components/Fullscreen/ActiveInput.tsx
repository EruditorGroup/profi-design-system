import React from 'react';
import {SearchIcon} from '@eruditorgroup/profi-icons';
import {useActiveInputContext, useFullscreenContext} from './contexts';
import {Input} from '../../../Form';
import {TIconPosition, TInputPropsWithoutAddons} from './types';


interface IActiveInputProps extends TInputPropsWithoutAddons {
  fontSize?: string;
  iconPostion?: Exclude<TIconPosition, 'trailing'>;
  children?: (
    input: JSX.Element,
    handlers: {
      onClose: () => void;
    },
  ) => JSX.Element;
}

const ActiveInput: React.FC<IActiveInputProps> = ({
  iconPostion,
  fontSize = '15px',
  size = 'm',
  children,
  ...inputViewProps
}) => {
  const {setInputRef, ...inputProps} = useActiveInputContext();
  const {handleClose} = useFullscreenContext();
  const input = (
    <Input
      {...inputViewProps}
      {...inputProps}
      leading={iconPostion === 'leading' && <SearchIcon style={{fontSize}} />}
      ref={setInputRef}
      size={size}
    />
  );
  return children
    ? children(input, {
        onClose: handleClose,
      })
    : input;
};

ActiveInput.displayName = 'ActiveInput';

export default ActiveInput;
