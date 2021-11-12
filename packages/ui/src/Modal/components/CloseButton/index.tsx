import * as React from 'react';
import Button from '../../../Button';
import type {ButtonProps} from '../../../Button';

type TProps = Omit<ButtonProps, 'rounded'>;

const CloseButton: React.FC<TProps> = (props) => {
  const {design = 'transparent', className} = props;
  return (
    <Button
      {...props}
      rounded
      design="transparent"
      onClick={handleCloseClick}
      className={classNames(styles['button-icon'], styles['right'])}
    >
      <CloseIcon />
    </Button>
  );
};

export default CloseButton;
