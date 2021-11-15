import * as React from 'react';
import cx from 'classnames';
import Button from '../../../Button';
import {CloseIcon} from '@eruditorgroup/profi-icons';
import type {ButtonProps} from '../../../Button';
import {useModalContext} from '../../context';

import styles from './CloseButton.module.scss';

type TProps = Omit<ButtonProps, 'rounded'> & {
  withHoverAnimation?: boolean;
};

const CloseButton: React.FC<TProps> = ({
  design = 'transparent',
  className,
  withHoverAnimation = true,
  ...rest
}) => {
  const {handleClose} = useModalContext();

  return (
    <Button
      {...rest}
      rounded
      design={design}
      onClick={handleClose}
      className={cx(
        styles['button-icon'],
        withHoverAnimation && styles['with-hover-animation'],
        className,
      )}
    >
      <CloseIcon />
    </Button>
  );
};

export default CloseButton;