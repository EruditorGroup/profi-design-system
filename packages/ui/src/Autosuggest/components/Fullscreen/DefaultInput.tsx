import {SearchIcon} from '@eruditorgroup/profi-icons';
import React, {forwardRef} from 'react';
import {Input, InputProps} from '../../../Form';
import {useFullscreenContext} from './contexts';
import {TIconPosition} from './types';

interface IDefaultInputProps extends InputProps {
  iconPostion?: TIconPosition;
  fontSize?: string;
}

const DefaultInput = forwardRef<HTMLInputElement, IDefaultInputProps>(
  ({fontSize = '15px', iconPostion, size = 'm', onClick, ...rest}, ref) => {
    const {handleOpenModal} = useFullscreenContext();
    const searchIcon = <SearchIcon style={{fontSize}} />;

    const iconAddon =
      iconPostion === 'leading'
        ? {leading: searchIcon}
        : {trailing: searchIcon};

    return (
      <Input
        ref={ref}
        {...rest}
        {...iconAddon}
        onClick={(e) => {
          handleOpenModal();
          onClick?.(e);
        }}
        size={size}
      />
    );
  },
);

export default DefaultInput;
