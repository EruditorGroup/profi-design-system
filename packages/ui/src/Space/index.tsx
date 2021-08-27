import React, {forwardRef, useMemo} from 'react';
import cx from 'classnames';

import type {
  RefAttributes,
  ForwardRefExoticComponent,
  HTMLAttributes,
} from 'react';

import styles from './Space.module.scss';
import {IColor, ISize} from '@eruditorgroup/profi-toolkit';

type IPadding = string | number | [string | number, string | number];

function paddingToArray(size?: IPadding): [string, string] {
  if (Array.isArray(size)) {
    return size.map((s) => `${s || 0}px`) as [string, string];
  }
  return [`${size || '0'}px`, `${size || '0'}px`];
}

function getPadding({x, y}: {x?: IPadding; y?: IPadding}): string | undefined {
  if (!x && !y) return undefined;
  const [left, right] = paddingToArray(x);
  const [top, bottom] = paddingToArray(y);
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
  // чтобы не было постоянного пересчёта паддингов, добавил memo.
  // так как px и py могут быть массивами, приводим их к строке, иначе они будут новыми ссылками
  // react-hooks/exhaustive-deps не понимает такого :(
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const padding = useMemo(() => getPadding({x: px, y: py}), [`${px}${py}`]);

  return (
    <div
      className={cx(
        styles['space'],
        inline ? styles['inline'] : styles['block'],
        justify && styles[`justify-${justify}`],
        align && styles[`align-${align}`],
        direction && styles[`direction-${direction}`],
        withShadow && styles['withShadow'],
        radius && styles[`radius-${radius}`],
        bg && styles[`bg-${bg}`],
        className,
      )}
      {...props}
      style={{padding, ...(style || {})}}
      ref={ref}
    />
  );
});
export default Space;
