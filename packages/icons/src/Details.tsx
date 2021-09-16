import React, {forwardRef} from 'react';
import type {ForwardRefExoticComponent} from 'react';
import type {IconPropsType} from './_types';
import {combineCommonProps} from './_helpers';

const DetailsIcon: ForwardRefExoticComponent<IconPropsType> = forwardRef(
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
          stroke="none"
          strokeWidth="1"
          d="M9 15.3A6.8 6.8 0 1 0 9 1.7a6.8 6.8 0 0 0 0 13.6ZM9 17A8.5 8.5 0 1 0 9 0a8.5 8.5 0 0 0 0 17ZM9 7c.6 0 1 .4 1 1v4a1 1 0 0 1-2 0V8c0-.6.4-1 1-1Zm0-1a1.15 1.15 0 1 0 0-2.3A1.15 1.15 0 0 0 9 6Z"
        />
      </svg>
    );
  },
);

DetailsIcon.displayName = 'DetailsIcon';

export default DetailsIcon;
