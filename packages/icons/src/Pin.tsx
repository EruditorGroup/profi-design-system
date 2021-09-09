import React, {forwardRef} from 'react';
import type {ForwardRefExoticComponent} from 'react';
import type {IconPropsType} from './_types';
import {combineCommonProps} from './_helpers';

const PinIcon: ForwardRefExoticComponent<IconPropsType> = forwardRef(
  (props, ref) => {
    return (
      <svg
        width="1em"
        height="1em"
        viewBox="0 0 18 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...combineCommonProps(props)}
        ref={ref}
      >
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M11.85 2h.02l3.62 3.63.01.01v.01L13.25 7.9a1 1 0 0 0-.16 1.2c.68 1.18.51 2.7-.5 3.7l-1.28 1.3-7.9-7.9 1.29-1.3c1-1 2.52-1.17 3.7-.5a1 1 0 0 0 1.2-.15L11.85 2ZM13.29.6a2.02 2.02 0 0 0-2.86 0L8.7 2.32a5.07 5.07 0 0 0-5.4 1.15l-2 2a1 1 0 0 0 0 1.41l3.94 3.95L.8 15.3a1 1 0 1 0 1.42 1.42l4.45-4.45 3.95 3.95a1 1 0 0 0 1.41 0l2-2a5.07 5.07 0 0 0 1.15-5.4l1.74-1.74c.79-.79.79-2.07 0-2.86L13.29.6Z"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

PinIcon.displayName = 'PinIcon';

export default PinIcon;
