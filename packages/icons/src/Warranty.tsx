import React, {forwardRef} from 'react';
import type {ForwardRefExoticComponent} from 'react';
import type {IconPropsType} from './_types';
import {combineCommonProps} from './_helpers';

const WarrantyIcon: ForwardRefExoticComponent<IconPropsType> = forwardRef(
  (props, ref) => {
    return (
      <svg
        width="1em"
        height="1em"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...combineCommonProps(props)}
        ref={ref}
      >
        <path
          stroke="currentColor"
          strokeWidth="1.5"
          d="M2.25 3.64c0-.22.14-.41.34-.48l5.28-1.73a.5.5 0 0 1 .32 0l5.22 1.73c.2.07.34.26.34.47v5.79c0 2.53-4.55 4.68-5.53 5.12a.45.45 0 0 1-.38 0c-.98-.44-5.59-2.59-5.59-5.12V3.64Z"
        />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="m5.57 8.25 1.94 1.96 2.92-4.42"
        />
      </svg>
    );
  },
);

WarrantyIcon.displayName = 'WarrantyIcon';

export default WarrantyIcon;
