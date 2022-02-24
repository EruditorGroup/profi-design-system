import * as React from 'react';
import cx from 'classnames';
import Button from '../../../Button';
import {ChevronLeftIcon} from '@eruditorgroup/profi-icons';
import type {ButtonProps} from '../../../Button';
import {useModalContext} from '../../context';

import styles from './BackButton.module.scss';

type TProps = Omit<ButtonProps, 'rounded'> & {
  withHoverAnimation?: boolean;
};

const BackButton: React.FC<TProps> = ({
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
        styles['button-icon'],
        withHoverAnimation && styles['with-hover-animation'],
        className,
      )}
    >
      <ChevronLeftIcon />
    </Button>
  );
};

export default BackButton;
