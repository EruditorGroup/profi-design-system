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
      <RateTooltip trigger={tooltipTrigger} show={readonly && isBest}>
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
                  [styles[`design_${design}`]]: !filled, // дизайн filled звезд всегда одинаковый
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
              width=".848em"
              height="1.157em"
              className={styles['spark']}
              viewBox="0 0 43 59"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.6595 39.4798C21.2566 38.1953 19.77 36.9479 18.6087 37.759L14.8324 40.3963C14.739 40.4616 14.6178 40.4722 14.5144 40.4242L10.3376 38.4826C9.05307 37.8855 7.80568 39.3721 8.61674 40.5334L11.2541 44.3097C11.3194 44.4032 11.33 44.5243 11.2819 44.6277L9.34036 48.8045C8.74328 50.089 10.2299 51.3364 11.3912 50.5254L15.1674 47.888C15.2609 47.8228 15.382 47.8122 15.4854 47.8602L19.6623 49.8017C20.9468 50.3988 22.1942 48.9122 21.3831 47.7509L18.7458 43.9747C18.6805 43.8812 18.6699 43.7601 18.7179 43.6567L20.6595 39.4798Z"
                fill="#FFA216"
                className={styles['spark_big']}
              />
              <path
                d="M29.9545 6.60413C29.7793 4.6288 27.1037 4.15703 26.2635 5.9533L23.5312 11.7943C23.4635 11.9389 23.3241 12.0365 23.1651 12.0506L16.7419 12.6204C14.7665 12.7956 14.2948 15.4712 16.091 16.3115L21.932 19.0438C22.0766 19.1114 22.1742 19.2509 22.1883 19.4099L22.7581 25.8331C22.9334 27.8084 25.6089 28.2802 26.4492 26.4839L29.1815 20.643C29.2491 20.4984 29.3886 20.4007 29.5476 20.3866L35.9708 19.8168C37.9462 19.6416 38.4179 16.966 36.6217 16.1258L30.7807 13.3935C30.6361 13.3258 30.5385 13.1863 30.5244 13.0274L29.9545 6.60413Z"
                fill="#FFA216"
                className={styles['spark_mini']}
              />
            </svg>

            // <svg
            //   width=".7em"
            //   height="1em"
            //   viewBox="0 0 42 58"
            //   fill="none"
            //   className={styles['spark']}
            //   xmlns="http://www.w3.org/2000/svg"
            // >
            //   <path
            //     d="M17.0232 39.8648C17.7316 39.4569 18.5235 40.2488 18.1156 40.9573L16.1897 44.3024C16.0474 44.5495 16.0474 44.8537 16.1897 45.1008L18.1156 48.446C18.5235 49.1544 17.7316 49.9463 17.0232 49.5384L13.678 47.6125C13.4309 47.4702 13.1267 47.4702 12.8796 47.6125L9.53446 49.5384C8.82603 49.9463 8.03413 49.1544 8.442 48.446L10.3679 45.1008C10.5102 44.8537 10.5102 44.5495 10.3679 44.3024L8.442 40.9573C8.03413 40.2488 8.82603 39.4569 9.53446 39.8648L12.8796 41.7907C13.1267 41.933 13.4309 41.933 13.678 41.7907L17.0232 39.8648Z"
            //     fill="currentColor"
            //     stroke="currentColor"
            //     stroke-width="2"
            //     className={styles['spark_mini']}
            //   />
            //   <path
            //     d="M25.4997 5.96802C25.9327 5.04246 27.3113 5.28555 27.4016 6.30337L28.1036 14.2162C28.1351 14.5712 28.3531 14.8826 28.6759 15.0336L35.8715 18.3996C36.797 18.8326 36.554 20.2112 35.5361 20.3015L27.6233 21.0034C27.2683 21.0349 26.9569 21.253 26.8059 21.5758L23.4399 28.7713C23.007 29.6969 21.6283 29.4538 21.538 28.436L20.8361 20.5232C20.8046 20.1682 20.5865 19.8567 20.2637 19.7057L13.0682 16.3398C12.1426 15.9068 12.3857 14.5282 13.4035 14.4379L21.3163 13.7359C21.6714 13.7044 21.9828 13.4864 22.1338 13.1636L25.4997 5.96802Z"
            //     fill="currentColor"
            //     stroke="currentColor"
            //     stroke-width="2"
            //     className={styles['spark_big']}
            //   />
            // </svg>
          )}
        </div>
      </RateTooltip>
    );
  },
);

export default RateStars;
