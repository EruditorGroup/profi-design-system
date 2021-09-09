import React, {forwardRef} from 'react';
import type {ForwardRefExoticComponent} from 'react';
import type {IconPropsType} from './_types';
import {combineCommonProps} from './_helpers';

const GoogleIcon: ForwardRefExoticComponent<IconPropsType> = forwardRef(
  (props, ref) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 16 16"
        {...combineCommonProps(props)}
        ref={ref}
      >
        <g
          fillRule="evenodd"
          clipPath="url(#profi-design-icons-google)"
          clipRule="evenodd"
        >
          <path
            fill="#4285F4"
            d="M14.72 8.4c0-.49-.04-.96-.13-1.42H8v2.7h3.77a3.22 3.22 0 01-1.4 2.12v1.75h2.26a6.83 6.83 0 002.09-5.14z"
          />
          <path
            fill="#34A853"
            d="M8 15.25c1.89 0 3.47-.63 4.63-1.7l-2.26-1.75a4.2 4.2 0 01-6.29-2.22H1.74v1.81A7 7 0 008 15.25z"
          />
          <path
            fill="#FBBC05"
            d="M4.08 9.58a4.2 4.2 0 010-2.66V5.11H1.74a7 7 0 000 6.28l2.34-1.81z"
          />
          <path
            fill="#EA4335"
            d="M8 4.03c1.03 0 1.95.36 2.68 1.05l2-2A7 7 0 001.74 5.1l2.34 1.81A4.17 4.17 0 018 4.03z"
          />
        </g>
        <defs>
          <clipPath id="profi-design-icons-google">
            <path fill="#fff" d="M0 0h14v14H0z" transform="translate(1 1.25)" />
          </clipPath>
        </defs>
      </svg>
    );
  },
);

GoogleIcon.displayName = 'GoogleIcon';

export default GoogleIcon;
