import React, {forwardRef} from 'react';
import type {ForwardRefExoticComponent} from 'react';
import type {IconPropsType} from './_types';
import {combineCommonProps} from './_helpers';

const EyeOpenIcon: ForwardRefExoticComponent<IconPropsType> = forwardRef(
  (props, ref) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 28 28"
        fill="none"
        {...combineCommonProps(props)}
        ref={ref}
      >
        <mask
          id="mask0_11389_89"
          style={{maskType: 'alpha'}}
          maskUnits="userSpaceOnUse"
          x="1"
          y="1"
          width="26"
          height="26"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M14 6.34375C7.17898 6.34375 3.28125 14 3.28125 14C3.28125 14 7.17898 21.6562 14 21.6562C20.821 21.6562 24.7188 14 24.7188 14C24.7188 14 20.821 6.34375 14 6.34375ZM17.0625 14C17.0625 15.6914 15.6914 17.0625 14 17.0625C12.3086 17.0625 10.9375 15.6914 10.9375 14C10.9375 12.3086 12.3086 10.9375 14 10.9375C15.6914 10.9375 17.0625 12.3086 17.0625 14Z"
            fill="black"
          />
        </mask>
        <g mask="url(#mask0_11389_89)">
          <rect width="28" height="28" fill="currentColor" />
        </g>
      </svg>
    );
  },
);

EyeOpenIcon.displayName = 'EyeOpenIcon';

export default EyeOpenIcon;
