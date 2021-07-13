import React, {forwardRef} from 'react';
import type {ForwardRefExoticComponent} from 'react';
import type {IconPropsType} from './_types';

const ErrorIcon: ForwardRefExoticComponent<IconPropsType> = forwardRef(
  (props, ref) => {
    return (
      <svg
        width="1em"
        height="1em"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
        ref={ref}
      >
        <rect
          x="0.5"
          y="6.10352e-05"
          width="13"
          height="13"
          rx="4"
          fill="currentColor"
        />
        <rect x="6" y="2.29999" width="2" height="5" rx="1" fill="#fff" />
        <rect
          x="5.8999"
          y="8.5"
          width="2.2"
          height="2.2"
          rx="1.1"
          fill="#fff"
        />
      </svg>
    );
  },
);

ErrorIcon.displayName = 'ErrorIcon';

export default ErrorIcon;
