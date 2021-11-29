import React, {forwardRef} from 'react';
import type {ForwardRefExoticComponent} from 'react';
import type {IconPropsType} from './_types';
import {combineCommonProps} from './_helpers';

const SandClockIcon: ForwardRefExoticComponent<IconPropsType> = forwardRef(
  (props, ref) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 26 38"
        fill="none"
        {...combineCommonProps(props)}
        ref={ref}
      >
        <path
          d="M10.6836 18.8651C3.41558 13.4607 2.59924 9.54719 2.59921 1.53375L23.6577 1.53369C23.6576 9.54713 22.3266 13.4607 15.0586 18.8651C22.3266 24.2695 23.6576 28.3694 23.6577 36.3828L2.59265 36.3829C2.59268 28.3695 3.41558 24.2695 10.6836 18.8651Z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M21.4924 11.2793H4.50708C5.21786 14.5488 9.14107 17.6771 12.7424 20.099C16.3437 17.6771 20.7816 14.5488 21.4924 11.2793Z"
          fill="currentColor"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M2.96306 35.4707L23.2939 35.4707C23.2939 33.1545 23.0366 32.1251 22.5219 30.3236L12.7281 26.2935L3.73512 30.3236C2.96306 32.3825 2.96306 33.4119 2.96306 35.4707Z"
          fill="currentColor"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M12.7427 17.4561V28.0075"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M0.904297 1.5L25.0955 1.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M0.904297 36.5L25.0955 36.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    );
  },
);

SandClockIcon.displayName = 'SandClockIcon';

export default SandClockIcon;
