import React, {useState, forwardRef} from 'react';
import cx from 'classnames';

import {StarIcon, SparkIcon} from '@eruditorgroup/profi-icons';
import {Text} from '../Typography';
import Button from '../Button';
import Space from '../Space';
import WithTooltip from './WithTooltip';

import type {
  HTMLAttributes,
  ForwardRefExoticComponent,
  RefAttributes,
  KeyboardEvent,
  MouseEvent,
} from 'react';

import styles from './Rate.module.scss';

export interface RateProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  size?: 's' | 'm' | 'l';
}

export const MARKS_ARRAY = ['1', '2', '3', '4', '5'];

const Rate: ForwardRefExoticComponent<
  RateProps & RefAttributes<HTMLDivElement>
> = forwardRef(
  (
    {value: propValue, defaultValue, onChange, className, size = 's', ...props},
    ref,
  ) => {
    const [stateValue, setStateValue] = useState(defaultValue);
    const value = propValue ?? stateValue;
    const disabled = !onChange;

    const isFive = value === '5';
    const isBest = value === '5+';
    const showBestDialog = !!onChange && (isBest || isFive);

    function handleChange(chosenVal: string, canClear = true) {
      let val = chosenVal;
      if (canClear && chosenVal === value) {
        val = undefined;
      }

      setStateValue(val);
      if (onChange) onChange(val);
    }

    function onClick(e: MouseEvent<SVGSVGElement>, chosenVal: string) {
      e.stopPropagation();
      handleChange(chosenVal);
    }

    function onKeyDown(e: KeyboardEvent<SVGSVGElement>, chosenVal: string) {
      if (e.key === 'Enter') {
        handleChange(chosenVal);
      }
    }

    return (
      <>
        <WithTooltip show={isBest} size={size} className={styles['tooltip']}>
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
                    [styles['star_disabled']]: disabled,
                    [styles['star_scalled']]: isFive && !isBest,
                    [styles['star_best']]: index === 4 && isBest,
                  })}
                  onClick={(e) => onClick(e, mark)}
                  onKeyDown={(e) => onKeyDown(e, mark)}
                  aria-checked={parseInt(value) > index ? 'true' : 'false'}
                  aria-posinset={index + 1}
                  aria-setsize={MARKS_ARRAY.length}
                  tabIndex={disabled ? -1 : 0}
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
        </WithTooltip>
        {showBestDialog && (
          <div
            className={cx(
              styles['bestDialog_container'],
              showBestDialog && styles['bestDialog_showed'],
            )}
          >
            <Space className={styles['bestDialog']} radius="l" px={16} py={16}>
              <Text className={styles['bestText']} size="l" bold>
                Пятёрки бывают разные. Какая ваша?
              </Text>
              <div className={styles['bestButtons']}>
                <Button
                  className={cx(
                    styles['bestLink'],
                    value === '5' && styles['bestLinkActive'],
                  )}
                  design="light"
                  onClick={onChange && (() => handleChange('5', false))}
                >
                  Просто пять
                </Button>
                <Button
                  className={cx(
                    styles['bestLink'],
                    isBest && styles['bestLinkActive'],
                  )}
                  onClick={onChange && (() => handleChange('5+', false))}
                  design="light"
                  leading={
                    <SparkIcon
                      className={cx(
                        styles['bestIcon'],
                        isBest && styles['bestIcon_active'],
                      )}
                    />
                  }
                >
                  Пять с плюсом
                </Button>
              </div>
            </Space>
          </div>
        )}
      </>
    );
  },
);

export default Rate;
