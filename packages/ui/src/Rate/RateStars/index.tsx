import React, {forwardRef} from 'react';
import cx from 'classnames';

import {StarIcon} from '@eruditorgroup/profi-icons';
import RateTooltip from '../RateTooltip';

import type {ITrigger} from '../../Tooltip';
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
  starClassName?: string;
  tooltipTrigger?: ITrigger;
  design: 'stroked' | 'light' | 'default';
}

export const MARKS_ARRAY = ['1', '2', '3', '4', '5'];

const RateStars: ForwardRefExoticComponent<
  RateStarsProps & RefAttributes<HTMLDivElement>
> = forwardRef(
  (
    {
      value,
      onChange,
      className,
      starClassName,
      design,
      tooltipTrigger,
      ...props
    },
    ref,
  ) => {
    const isFive = value === '5';
    const isBest = value === '5+';
    const readonly = !onChange;

    function onKeyDown(e: KeyboardEvent<SVGSVGElement>, newValue: string) {
      if (e.key === 'Enter') {
        onChange(newValue);
      }
    }

    return (
      <RateTooltip
        trigger={tooltipTrigger}
        show={readonly && isBest}
        className={cx(styles['rate'], isBest && styles['rate_best'], className)}
        {...props}
        ref={ref}
      >
        {MARKS_ARRAY.map((mark, index) => {
          const filled = parseInt(value) >= parseInt(mark);
          return (
            <StarIcon
              key={index}
              className={cx(styles['star'], starClassName, {
                [styles['star_filled']]: filled,
                [styles[`design_${design}`]]: !filled, // дизайн filled звезд всегда одинаковый
                [styles['star_best']]: index === 4 && isBest,
                [styles['star_pointer']]: !readonly,
                [styles['star_scalled']]: !readonly && isFive && !isBest,
              })}
              {...(!readonly
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
          <svg
            className={styles['spark']}
            width=".6em"
            height=".94em"
            viewBox="0 0 30 47"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_418_4135)">
              <path
                d="M12.7479 35.4797C13.3449 34.1952 11.8583 32.9478 10.697 33.7589L6.9208 36.3962C6.82733 36.4615 6.70618 36.4721 6.60279 36.424L2.42595 34.4825C1.14144 33.8854 -0.105942 35.372 0.705115 36.5333L3.34245 40.3096C3.40773 40.403 3.41833 40.5242 3.37028 40.6276L1.42874 44.8044C0.831662 46.0889 2.31825 47.3363 3.47955 46.5252L7.25579 43.8879C7.34927 43.8226 7.47042 43.812 7.57381 43.8601L11.7506 45.8016C13.0352 46.3987 14.2825 44.9121 13.4715 43.7508L10.8341 39.9746C10.7689 39.8811 10.7583 39.7599 10.8063 39.6566L12.7479 35.4797Z"
                fill="currentColor"
                className={styles['spark_big']}
              />
              <path
                d="M22.0429 2.60389C21.8677 0.628553 19.1921 0.156791 18.3519 1.95306L15.6196 7.79403C15.5519 7.93861 15.4125 8.03627 15.2535 8.05037L8.83023 8.62017C6.8549 8.7954 6.38314 11.471 8.1794 12.3112L14.0204 15.0435C14.165 15.1112 14.2626 15.2506 14.2767 15.4096L14.8465 21.8329C15.0217 23.8082 17.6973 24.28 18.5376 22.4837L21.2699 16.6427C21.3375 16.4981 21.477 16.4005 21.636 16.3864L28.0592 15.8166C30.0345 15.6413 30.5063 12.9658 28.71 12.1255L22.8691 9.39321C22.7245 9.32558 22.6268 9.1861 22.6127 9.02711L22.0429 2.60389Z"
                fill="currentColor"
                className={styles['spark_mini']}
              />
            </g>
            <defs>
              <clipPath id="clip0_418_4135">
                <rect width="30" height="47" fill="white" />
              </clipPath>
            </defs>
          </svg>
        )}
      </RateTooltip>
    );
  },
);

export default RateStars;
