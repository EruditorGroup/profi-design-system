import React, {forwardRef} from 'react';
import cx from 'classnames';
import {theme} from '@eruditorgroup/profi-toolkit';

import Link from '../../Link';
import BaseText, {BaseTextProps} from '../BaseText';

import type {ISize, ForwardingComponent} from '@eruditorgroup/profi-toolkit';

export interface TextProps extends Omit<BaseTextProps, 'as'> {
  as?: 'p' | 'span' | 'div' | typeof Link;
  size?: ISize;
}

const Text: ForwardingComponent<'p', TextProps> = forwardRef(function Text(
  {as: Component = 'p', size = 'm', className, ...props},
  ref,
) {
  return (
    <BaseText
      as={Component}
      className={cx(theme.common[`size-${size}`], className)}
      {...props}
      ref={ref}
    />
  );
});

export default Text;
