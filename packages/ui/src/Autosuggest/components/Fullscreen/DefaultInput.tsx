import {SearchIcon} from '@eruditorgroup/profi-icons';
import React, {forwardRef} from 'react';
import {FormControlProps, Textarea} from '../../../Form';
import {useFullscreenContext} from './contexts';
import {TIconPosition, ForwardingFocusableComponent} from './types';
import {AliasProps} from '@eruditorgroup/profi-toolkit';

interface IDefaultInputProps extends AliasProps, FormControlProps {
  iconPostion?: TIconPosition;
  fontSize?: string;
}

const DefaultInput: ForwardingFocusableComponent<
  typeof Textarea,
  IDefaultInputProps
> = forwardRef(
  (
    {
      as: Component = Textarea,
      fontSize = '15px',
      iconPostion,
      size = 'm',
      onClick,
      ...rest
    },
    ref,
  ) => {
    const {handleOpenModal} = useFullscreenContext();
    const searchIcon = <SearchIcon style={{fontSize}} />;

    const iconAddon =
      iconPostion === 'leading'
        ? {leading: searchIcon}
        : {trailing: searchIcon};

    return (
      <Component
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

