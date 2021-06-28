import React, {forwardRef} from 'react';
import cx from 'classnames';

import type {
  RefAttributes,
  ForwardRefExoticComponent,
  HTMLAttributes,
} from 'react';

import styles from './Space.module.scss';
import {IColor, ISize} from 'uitype';

type IPadding = string | number | [string | number, string | number];

function getPadding({x, y}: {x?: IPadding; y?: IPadding}): string | undefined {
  if (!x && !y) return undefined;
  function resolve(size?: IPadding): [string, string] {
    if (Array.isArray(size)) {
      return size.map((s) => `${s || 0}px`) as [string, string];
    }
    return [`${size || '0'}px`, `${size || '0'}px`];
  }
  const [left, right] = resolve(x);
  const [top, bottom] = resolve(y);
  return `${top} ${right} ${bottom} ${left === right ? '' : left}`;
}

export interface SpaceProps extends HTMLAttributes<HTMLDivElement> {
  px?: IPadding;
  py?: IPadding;
  withShadow?: boolean;
  radius?: ISize;
  direction?: 'row' | 'col' | 'row-reverse' | 'col-reverse';
  bg?: IColor | 'white';
  justify?: 'start' | 'center' | 'end';
  align?: 'start' | 'center' | 'end';
  inline?: boolean;
}

const Space: ForwardRefExoticComponent<
  SpaceProps & RefAttributes<HTMLDivElement>
> = forwardRef(function Space(
  {
    px,
    py,
    withShadow,
    justify = 'start',
    align = 'start',
    direction = 'col',
    radius,
    bg = 'transparent',
    inline,
    className,
    style,
    ...props
  },
  ref,
) {
  return (
    <div
      className={cx(
        className,
        styles['space'],
        inline && styles['inline'],
        justify && styles[`justify-${justify}`],
        align && styles[`align-${align}`],
        direction && styles[`direction-${direction}`],
        withShadow && styles['withShadow'],
        radius && styles[`radius-${radius}`],
        bg && styles[`bg-${bg}`],
      )}
      {...props}
      style={{padding: getPadding({x: px, y: py}), ...style}}
      ref={ref}
    />
  );
});

export default Space;
