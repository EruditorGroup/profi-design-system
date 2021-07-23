import React, {useState, forwardRef} from 'react';
import cx from 'classnames';

import {SparkIcon} from '@eruditorgroup/profi-icons';
import {Text} from '../../Typography';
import Button from '../../Button';
import Space from '../../Space';
import RateStars from '../RateStars';

import type {
  HTMLAttributes,
  ForwardRefExoticComponent,
  RefAttributes,
} from 'react';

import styles from './RateForm.module.scss';

export interface RateFormProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  size?: 's' | 'm' | 'l';
}

const RateForm: ForwardRefExoticComponent<
  RateFormProps & RefAttributes<HTMLDivElement>
> = forwardRef(
  ({value: propValue, defaultValue, onChange, size = 's', ...props}, ref) => {
    const [stateValue, setStateValue] = useState(defaultValue);
    const value = propValue ?? stateValue;

    const isFive = value === '5';
    const isBest = value === '5+';
    const showBestDialog = !!onChange && (isBest || isFive);

    function handleChange(newValue: string, canClear = true) {
      let val = newValue;
      if (canClear && newValue === value) {
        val = undefined;
      }

      setStateValue(val);
      if (onChange) onChange(val);
    }

    return (
      <>
        <RateStars
          size={size}
          value={value}
          onChange={(newValue) => handleChange(newValue)}
          ref={ref}
          {...props}
        />
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

export default RateForm;
