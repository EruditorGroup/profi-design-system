import React from 'react';
import {SearchIcon} from '@eruditorgroup/profi-icons';
import {useFullscreenContext} from './contexts';
import {Input} from '../../../Form';
import {TIconPosition, TInputPropsWithoutAddons} from './types';

type TActiveInputProps = {
  fontSize?: string;
  iconPostion?: Exclude<TIconPosition, 'trailing'>;
  children?: (
    input: JSX.Element,
    handler: {onClose: () => void},
  ) => JSX.Element;
} & TInputPropsWithoutAddons;

const ActiveInput: React.FC<TActiveInputProps> = ({
  iconPostion,
  fontSize = '15px',
  size = 'm',
  children,
  ...inputProps
}) => {
  const {setInputRef, handleClose} = useFullscreenContext();
  const input = (
    <Input
      {...inputProps}
      leading={iconPostion === 'leading' && <SearchIcon style={{fontSize}} />}
      ref={setInputRef}
      size={size}
    />
  );
  return children ? children(input, {onClose: handleClose}) : input;
};

ActiveInput.displayName = 'ActiveInput';

export default ActiveInput;
