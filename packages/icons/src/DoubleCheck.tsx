import React, {forwardRef} from 'react';
import type {ForwardRefExoticComponent} from 'react';
import type {IconPropsType} from './_types';
import {combineCommonProps} from './_helpers';

const DoubleCheckIcon: ForwardRefExoticComponent<IconPropsType> = forwardRef(
  (props, ref) => {
    return (
      <svg
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...combineCommonProps(props)}
        ref={ref}
      >
        <path d="M2 10.5L6.725 15L9.0875 12.3M7.4 10.5L12.125 15L20 6M14.6 6L11.45 9.6" stroke="currentColor"
              stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    );
  },
);

DoubleCheckIcon.displayName = 'DoubleCheckIcon';

export default DoubleCheckIcon;
