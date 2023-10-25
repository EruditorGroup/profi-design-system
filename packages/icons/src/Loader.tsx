import React, {forwardRef} from 'react';
import type {ForwardRefExoticComponent} from 'react';
import type {IconPropsType} from './_types';
import {combineCommonProps} from './_helpers';

const LoaderIcon: ForwardRefExoticComponent<IconPropsType> = forwardRef(
  (props, ref) => {
    return (
      <svg
        width="1em"
        height="1em"
        viewBox="0 0 17 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...combineCommonProps(props)}
        ref={ref}
      >
        <circle opacity="0.3" cx="8.5" cy="8.5" r="7.5" stroke="currentColor" strokeWidth="2" />
        <path d="M1 8.5C1 12.6421 4.35786 16 8.5 16C12.6421 16 16 12.6421 16 8.5C16 4.35786 12.6421 1 8.5 1" stroke="currentColor" strokeWidth="2" />
      </svg>
    );
  },
);

LoaderIcon.displayName = 'LoaderIcon';

export default LoaderIcon;
