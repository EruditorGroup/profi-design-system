import {SearchIcon} from '@eruditorgroup/profi-icons';
import React from 'react';
import {Input, InputProps} from '../../../Form';
import {useFullscreenContext} from './contexts';
import {TWithoutAddons, TIconPosition} from './types';

interface IDefaultInputProps extends TWithoutAddons<InputProps> {
  iconPostion?: TIconPosition;
  fontSize?: string;
}

const DefaultInput: React.FC<IDefaultInputProps> = ({
  fontSize = '15px',
  iconPostion,
  size = 'm',
  onFocus,
  ...rest
}) => {
  const {handleFocus, value} = useFullscreenContext();
  const searchIcon = <SearchIcon style={{fontSize}} />;

  const iconAddon =
    iconPostion === 'leading' ? {leading: searchIcon} : {trailing: searchIcon};

  return (
    <Input
      value={value}
      {...iconAddon}
      {...rest}
      onFocus={(e) => {
        handleFocus();
        onFocus?.(e);
      }}
      size={size}
    />
  );
};

export default DefaultInput;
