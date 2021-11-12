import * as React from 'react';
import cx from 'classnames';
import Button from '../../../Button';
import {CloseIcon} from '@eruditorgroup/profi-icons';
import type {ButtonProps} from '../../../Button';
import {useModalContext} from '../../context';

import styles from './CloseButton.module.scss';

type TProps = Omit<ButtonProps, 'rounded'>;

const CloseButton: React.FC<TProps> = ({
  design = 'transparent',
  className,
  ...rest
}) => {
  const {handleClose} = useModalContext();

  return (
    <Button
      {...rest}
      rounded
      design={design}
      onClick={handleClose}
      className={cx(styles['button-icon'], styles['right'], className)}
    >
      <CloseIcon />
    </Button>
  );
};

export default CloseButton;
