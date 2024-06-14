import React, {useCallback} from 'react';
import classnames from 'classnames';

import {useFocusScroll, useCombinedRef} from '@eruditorgroup/profi-toolkit';
import {MaskedInput} from './MaskedInput';

import styles from './BareInput.module.scss';

import type {BareInputProps} from './types';

const BareInput: React.FC<React.PropsWithChildren<BareInputProps>> = ({
  className,
  type = 'text',
  mask,
  withFocusScroll,
  inputRef,
  ...props
}) => {
  const [ref, setRef] = useCombinedRef<HTMLInputElement>(inputRef);

  useFocusScroll(ref, withFocusScroll);

  const InputComponent = useCallback(
    ({
      customMaskFormatter,
      onMaskedValueChange,
      type,
      ...inputProps
    }: Omit<BareInputProps, 'size' | 'value' | 'defaultValue'>) =>
      mask ? (
        <MaskedInput
          {...inputProps}
          setRef={setRef}
          customMaskFormatter={customMaskFormatter}
          onMaskedValueChange={onMaskedValueChange}
          mask={mask}
          type={type}
        />
      ) : (
        <input {...inputProps} ref={setRef} />
      ),
    [mask, setRef],
  );

  return InputComponent({
    className: classnames(styles['input'], 'input-default', className),
    type,
    ...props,
  });
};

export type {BareInputProps};
export default BareInput;
