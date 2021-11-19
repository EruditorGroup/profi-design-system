import React, {forwardRef} from 'react';
import cx from 'classnames';

import {StarIcon, SparkIcon} from '@eruditorgroup/profi-icons';
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
  stroked?: boolean; // @deprecated
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
      stroked, // @deprecated - выпилить после интеграции в warp
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
      <RateTooltip trigger={tooltipTrigger} show={!readonly && isBest}>
        <div
          className={cx(
            styles['rate'],
            isBest && styles['rate_best'],
            className,
          )}
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
                  [styles['star_stroked']]:
                    (stroked || design == 'stroked') && !filled,
                  [styles['star_light']]: design === 'light' && !filled,
                  [styles['star_best']]: index === 4 && isBest,
                  [styles['star_pointer']]: !readonly,
                  [styles['star_scalled']]: !readonly && isFive && !isBest,
                })}
                {...(!readonly
                  ? {
                      onClick: () => onChange(mark),
                      onKeyDown: (e) => onKeyDown(e, mark),
                      'aria-checked':
                        parseInt(value) > index ? 'true' : 'false',
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
              width=".65em"
              height=".91em"
              viewBox="0 0 42 58"
              fill="none"
              className={styles['spark']}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.0232 39.8648C17.7316 39.4569 18.5235 40.2488 18.1156 40.9573L16.1897 44.3024C16.0474 44.5495 16.0474 44.8537 16.1897 45.1008L18.1156 48.446C18.5235 49.1544 17.7316 49.9463 17.0232 49.5384L13.678 47.6125C13.4309 47.4702 13.1267 47.4702 12.8796 47.6125L9.53446 49.5384C8.82603 49.9463 8.03413 49.1544 8.442 48.446L10.3679 45.1008C10.5102 44.8537 10.5102 44.5495 10.3679 44.3024L8.442 40.9573C8.03413 40.2488 8.82603 39.4569 9.53446 39.8648L12.8796 41.7907C13.1267 41.933 13.4309 41.933 13.678 41.7907L17.0232 39.8648Z"
                fill="currentColor"
                stroke="currentColor"
                stroke-width="2"
                className={styles['spark_mini']}
              />
              <path
                d="M25.4997 5.96802C25.9327 5.04246 27.3113 5.28555 27.4016 6.30337L28.1036 14.2162C28.1351 14.5712 28.3531 14.8826 28.6759 15.0336L35.8715 18.3996C36.797 18.8326 36.554 20.2112 35.5361 20.3015L27.6233 21.0034C27.2683 21.0349 26.9569 21.253 26.8059 21.5758L23.4399 28.7713C23.007 29.6969 21.6283 29.4538 21.538 28.436L20.8361 20.5232C20.8046 20.1682 20.5865 19.8567 20.2637 19.7057L13.0682 16.3398C12.1426 15.9068 12.3857 14.5282 13.4035 14.4379L21.3163 13.7359C21.6714 13.7044 21.9828 13.4864 22.1338 13.1636L25.4997 5.96802Z"
                fill="currentColor"
                stroke="currentColor"
                stroke-width="2"
                className={styles['spark_big']}
              />
            </svg>
          )}
        </div>
      </RateTooltip>
    );
  },
);

export default RateStars;
