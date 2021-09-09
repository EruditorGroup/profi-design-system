import React, {forwardRef} from 'react';
import type {ForwardRefExoticComponent} from 'react';
import type {IconPropsType} from './_types';
import {combineCommonProps} from './_helpers';

const SupportThinIcon: ForwardRefExoticComponent<IconPropsType> = forwardRef(
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
          d="M8.6 11.36c.6 0 .9-.36.98-.94.07-.8.35-1.22 1.5-1.89 1.2-.71 1.87-1.63 1.87-2.98 0-1.98-1.64-3.34-4.02-3.34-1.81 0-3.18.74-3.73 1.94-.16.33-.24.65-.24 1.03 0 .6.36.96.96.96.49 0 .81-.22 1-.76.29-.9.94-1.38 1.91-1.38 1.08 0 1.83.67 1.83 1.63 0 .84-.37 1.33-1.46 1.99-1.1.65-1.64 1.37-1.64 2.46v.17c0 .64.37 1.11 1.04 1.11Zm.01 3.82c.72 0 1.28-.56 1.28-1.25 0-.7-.56-1.24-1.28-1.24-.7 0-1.28.54-1.28 1.24s.57 1.25 1.28 1.25Z"
        />
      </svg>
    );
  },
);
SupportThinIcon.displayName = 'SupportThinIcon';

export default SupportThinIcon;
