import React, {forwardRef} from 'react';
import type {ForwardRefExoticComponent} from 'react';
import type {IconPropsType} from './_types';
import {combineCommonProps} from './_helpers';

const SparkIcon: ForwardRefExoticComponent<IconPropsType> = forwardRef(
  (props, ref) => {
    return (
      <svg
        width="1em"
        height="1em"
        viewBox="0 0 12 12"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        {...combineCommonProps(props)}
        ref={ref}
      >
        <path d="M5.25958 0L6.74042 2.50064e-07L7.98758 3.43878C8.05199 3.72472 8.27528 3.94801 8.56121 4.01242L12 5.25958L12 6.74042L8.56121 7.98758C8.27528 8.05199 8.05199 8.27528 7.98758 8.56121L6.74042 12L5.25958 12L4.01242 8.56121C3.94801 8.27528 3.72472 8.05199 3.43879 7.98758L0 6.74042L2.50064e-07 5.25958L3.43879 4.01242C3.72472 3.94801 3.94801 3.72472 4.01242 3.43879L5.25958 0Z" />
      </svg>
    );
  },
);

SparkIcon.displayName = 'SparkIcon';

export default SparkIcon;
