import React, {forwardRef} from 'react';
import type {ForwardRefExoticComponent} from 'react';
import type {IconPropsType} from './_types';
import {combineCommonProps} from './_helpers';

const WarningIcon: ForwardRefExoticComponent<IconPropsType> = forwardRef(
  (props, ref) => {
    return (
      <svg
        width="1em"
        height="1em"
        viewBox="0 0 13 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...combineCommonProps(props)}
        ref={ref}
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M13 6.5C13 10.0899 10.0899 13 6.5 13C2.91015 13 0 10.0899 0 6.5C0 2.91015 2.91015 0 6.5 0C10.0899 0 13 2.91015 13 6.5ZM5.59998 2.9C5.59998 2.40294 6.00292 2 6.49998 2C6.99703 2 7.39998 2.40294 7.39998 2.9V6.6C7.39998 7.09706 6.99703 7.5 6.49998 7.5C6.00292 7.5 5.59998 7.09706 5.59998 6.6V2.9ZM6.5 8.5C5.94772 8.5 5.5 8.94771 5.5 9.5C5.5 10.0523 5.94772 10.5 6.5 10.5C7.05228 10.5 7.5 10.0523 7.5 9.5C7.5 8.94771 7.05228 8.5 6.5 8.5Z"
          fill="currentColor"
        />
      </svg>
    );
  },
);

WarningIcon.displayName = 'WarningIcon';
export default WarningIcon;
