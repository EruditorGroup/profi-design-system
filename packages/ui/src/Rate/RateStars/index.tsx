import React, {forwardRef} from 'react';
import cx from 'classnames';

import {StarIcon, SparkIcon} from '@eruditorgroup/profi-icons';
import RateTooltip from '../RateTooltip';

import type {
  HTMLAttributes,
  ForwardRefExoticComponent,
  RefAttributes,
  KeyboardEvent,
} from 'react';

import styles from './RateStars.module.scss';

export interface RateStarsProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  value?: string; // '1, '2', '3', '4', '5', '5+'
  onChange?: (newValue: string) => void;
  size?: 's' | 'm' | 'l';
}

export const MARKS_ARRAY = ['1', '2', '3', '4', '5'];

const RateStars: ForwardRefExoticComponent<
  RateStarsProps & RefAttributes<HTMLDivElement>
> = forwardRef(({value, onChange, className, size = 's', ...props}, ref) => {
  const isFive = value === '5';
  const isBest = value === '5+';
  const onlyReading = !onChange;

  function onKeyDown(e: KeyboardEvent<SVGSVGElement>, newValue: string) {
    if (e.key === 'Enter') {
      onChange(newValue);
    }
  }

  return (
    <RateTooltip show={isBest} size={size}>
      <div
        className={cx(
          styles['rate'],
          styles[`rate_size-${size}`],
          isBest && styles['rate_best'],
          className,
        )}
        {...props}
        ref={ref}
      >
        {MARKS_ARRAY.map((mark, index) => {
          return (
            <StarIcon
              key={index}
              className={cx(styles['star'], styles[`star_size-${size}`], {
                [styles['star_filled']]: parseInt(value) >= parseInt(mark),
                [styles['star_best']]: index === 4 && isBest,
                [styles['star_pointer']]: !onlyReading,
                [styles['star_scalled']]: !onlyReading && isFive && !isBest,
              })}
              {...(!onlyReading
                ? {
                    onClick: () => onChange(mark),
                    onKeyDown: (e) => onKeyDown(e, mark),
                    'aria-checked': parseInt(value) > index ? 'true' : 'false',
                    'aria-posinset': index + 1,
                    'aria-setsize': MARKS_ARRAY.length,
                    tabIndex: 0,
                  }
                : {})}
            />
          );
        })}
        {isBest && (
          <>
            <SparkIcon
              className={cx(
                styles['spark'],
                styles['spark_mini'],
                styles[`spark_mini-${size}`],
              )}
            />
            <SparkIcon
              className={cx(
                styles['spark'],
                styles['spark_big'],
                styles[`spark_big-${size}`],
              )}
            />
          </>
        )}
      </div>
    </RateTooltip>
  );
});

export default RateStars;
