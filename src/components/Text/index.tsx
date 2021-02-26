import React, {useContext, forwardRef, HTMLAttributes} from 'react';
import type {RefAttributes, ForwardRefExoticComponent} from 'react';
import {DropdownContext} from 'components/Dropdown';
import classNames from 'classnames';

import styles from './DropdownPortal.module.scss';
import useRelativePosition from 'hooks/useRelativePosition';

type Variants = HTMLHeadingElement | HTMLParagraphElement;

export interface TextProps
  extends HTMLAttributes<Variants>,
    RefAttributes<Variants> {
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
}

const Text: ForwardRefExoticComponent<TextProps> = forwardRef(
  ({variant = 'p', tag = 'p', className, ...props}, ref) => {
    const context = useContext(DropdownContext);
    const relativePosition = useRelativePosition(
      context?.togglerRef?.current,
      context?.horizontalPosition || 'left',
    );

    return React.createElement(tag, {
      ref,
      className: classNames(styles[variant], className),
      ...props,
    });
  },
);

export default Text;
