import React, {forwardRef} from 'react';
import type {ForwardRefExoticComponent} from 'react';
import type {IconPropsType} from './_types';

const ParametersIcon: ForwardRefExoticComponent<IconPropsType> = forwardRef(
  (props, ref) => {
    return (
      <svg
        width="1em"
        height="1em"
        viewBox="0 0 21 20"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
        ref={ref}
      >
        <path d="M0 3C0 2.17157 0.671573 1.5 1.5 1.5H4V4.5H1.5C0.671573 4.5 0 3.82843 0 3Z" />
        <path d="M0 17C0 16.1716 0.671573 15.5 1.5 15.5H4V18.5H1.5C0.671573 18.5 0 17.8284 0 17Z" />
        <path d="M17 8.5H19.5C20.3284 8.5 21 9.17157 21 10C21 10.8284 20.3284 11.5 19.5 11.5H17V8.5Z" />
        <rect x="5.5" y="0.5" width="3" height="5" rx="1" />
        <rect x="5.5" y="14.5" width="3" height="5" rx="1" />
        <rect x="12.5" y="7.5" width="3" height="5" rx="1" />
        <path d="M10 1.5H19.5C20.3284 1.5 21 2.17157 21 3C21 3.82843 20.3284 4.5 19.5 4.5H10V1.5Z" />
        <path d="M10 15.5H19.5C20.3284 15.5 21 16.1716 21 17C21 17.8284 20.3284 18.5 19.5 18.5H10V15.5Z" />
        <path d="M0 10C0 9.17157 0.671573 8.5 1.5 8.5H11V11.5H1.5C0.671573 11.5 0 10.8284 0 10Z" />
      </svg>
    );
  },
);

ParametersIcon.displayName = 'ParametersIcon';

export default ParametersIcon;
