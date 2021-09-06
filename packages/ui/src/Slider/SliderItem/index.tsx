import React, {useContext, forwardRef} from 'react';
import cx from 'classnames';

import {SliderContext} from '../index';

import type {HTMLAttributes} from 'react';
import type {
  ForwardingComponent,
  AliasProps,
} from '@eruditorgroup/profi-toolkit';

import styles from './SliderItem.module.scss';

export interface SliderItemProps
  extends HTMLAttributes<HTMLDivElement>,
    AliasProps {
  index?: number;
}

const SliderItem: ForwardingComponent<'div', SliderItemProps> = forwardRef(
  (
    {as: Component = 'div', index, style: propStyle, className, ...props},
    ref,
  ) => {
    const {flex, offset} = useContext(SliderContext);
    const style = {marginLeft: undefined, ...propStyle};

    if (index > 0) {
      style.marginLeft = `${offset}px`;
    }

    return (
      <Component
        ref={ref}
        className={cx(
          flex ? styles['item_flex'] : styles['item_inline'],
          className,
        )}
        style={style}
        {...props}
      />
    );
  },
);

SliderItem.displayName = 'SliderItem';
export default SliderItem;
