import React, {forwardRef} from 'react';
import type {ForwardRefExoticComponent} from 'react';
import type {IconPropsType} from './_types';
import {combineCommonProps} from './_helpers';

const CircleCheckIcon: ForwardRefExoticComponent<IconPropsType> = forwardRef(
  (props, ref) => {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...combineCommonProps(props)}
        ref={ref}
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M11.9992 2.79922C6.9182 2.79922 2.79922 6.9182 2.79922 11.9992C2.79922 17.0802 6.9182 21.1992 11.9992 21.1992C17.0802 21.1992 21.1992 17.0802 21.1992 11.9992C21.1992 6.9182 17.0802 2.79922 11.9992 2.79922ZM1.19922 11.9992C1.19922 6.03454 6.03454 1.19922 11.9992 1.19922C17.9639 1.19922 22.7992 6.03454 22.7992 11.9992C22.7992 17.9639 17.9639 22.7992 11.9992 22.7992C6.03454 22.7992 1.19922 17.9639 1.19922 11.9992ZM17.0649 8.43353C17.3773 8.74595 17.3773 9.25248 17.0649 9.5649L11.0649 15.5649C10.7525 15.8773 10.246 15.8773 9.93353 15.5649L6.93353 12.5649C6.62111 12.2525 6.62111 11.746 6.93353 11.4335C7.24595 11.1211 7.75248 11.1211 8.0649 11.4335L10.4992 13.8678L15.9335 8.43353C16.246 8.12111 16.7525 8.12111 17.0649 8.43353Z"
          fill="currentColor"
        ></path>
      </svg>
    );
  },
);

CircleCheckIcon.displayName = 'CircleCheckIcon';

export default CircleCheckIcon;
