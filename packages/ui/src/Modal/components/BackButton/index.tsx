import * as React from 'react';
import cx from 'classnames';
import Button from '../../../Button';
import {ChevronLeftIcon} from '@eruditorgroup/profi-icons';
import type {ButtonProps} from '../../../Button';
import {useModalContext} from '../../context';

import styles from './BackButton.module.scss';
import modalButton from '../../ModalButton.module.scss';

type TProps = Omit<ButtonProps, 'rounded'> & {
  withHoverAnimation?: boolean;
};

const BackButton: React.FC<React.PropsWithChildren<TProps>> = ({
  design = 'transparent',
  className,
  withHoverAnimation = true,
  ...rest
}) => {
  const {handleBack} = useModalContext();

  return (
    <Button
      {...rest}
      rounded
      design={design}
      onClick={handleBack}
      className={cx(
        modalButton['button'],
        styles['buttonPosition'],
        withHoverAnimation && modalButton['with-hover-animation'],
        className,
      )}
    >
      <ChevronLeftIcon />
    </Button>
  );
};

export default BackButton;
