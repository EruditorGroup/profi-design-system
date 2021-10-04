import {SearchIcon} from '@eruditorgroup/profi-icons';
import React from 'react';
import {Input} from '../../../Form';
import {useFullscreenContext} from './contexts';
import {TInputPropsWithoutAddons, TIconPosition} from './types';

interface IDefaultInputProps extends TInputPropsWithoutAddons {
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
