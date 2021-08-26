import React, {forwardRef} from 'react';
import type {ForwardRefExoticComponent} from 'react';
import type {IconPropsType} from './_types';
import {combineCommonProps} from './_helpers';

const ParametersIcon: ForwardRefExoticComponent<IconPropsType> = forwardRef(
  (props, ref) => {
    return (
      <svg
        width="1em"
        height="1em"
        viewBox="0 0 29 28"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        {...combineCommonProps(props)}
        ref={ref}
      >
        <path d="M4.75 7C4.75 6.17157 5.42157 5.5 6.25 5.5H8.75V8.5H6.25C5.42157 8.5 4.75 7.82843 4.75 7Z" />
        <path d="M4.75 21C4.75 20.1716 5.42157 19.5 6.25 19.5H8.75V22.5H6.25C5.42157 22.5 4.75 21.8284 4.75 21Z" />
        <path d="M21.75 12.5H24.25C25.0784 12.5 25.75 13.1716 25.75 14C25.75 14.8284 25.0784 15.5 24.25 15.5H21.75V12.5Z" />
        <rect x="10.25" y="4.5" width="3" height="5" rx="1" />
        <rect x="10.25" y="18.5" width="3" height="5" rx="1" />
        <rect x="17.25" y="11.5" width="3" height="5" rx="1" />
        <path d="M14.75 5.5H24.25C25.0784 5.5 25.75 6.17157 25.75 7C25.75 7.82843 25.0784 8.5 24.25 8.5H14.75V5.5Z" />
        <path d="M14.75 19.5H24.25C25.0784 19.5 25.75 20.1716 25.75 21C25.75 21.8284 25.0784 22.5 24.25 22.5H14.75V19.5Z" />
        <path d="M4.75 14C4.75 13.1716 5.42157 12.5 6.25 12.5H15.75V15.5H6.25C5.42157 15.5 4.75 14.8284 4.75 14Z" />
      </svg>
    );
  },
);

ParametersIcon.displayName = 'ParametersIcon';

export default ParametersIcon;
