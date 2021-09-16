import React, {forwardRef} from 'react';
import type {ForwardRefExoticComponent} from 'react';
import type {IconPropsType} from './_types';
import {combineCommonProps} from './_helpers';

const ThumbUpIcon: ForwardRefExoticComponent<IconPropsType> = forwardRef(
  (props, ref) => {
    return (
      <svg
        width="1em"
        height="1em"
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
        {...combineCommonProps(props)}
        ref={ref}
      >
        <path
          fill="currentColor"
          d="M9.128 2.071a.847.847 0 011.303 1.072L8.518 5.995H12.4a1.7 1.7 0 011.583 2.32l-1.657 4.227a1.5 1.5 0 01-1.609.938l-4.537-.648a1.5 1.5 0 01-1.287-1.485V6.92c0-.477.214-.883.538-1.152l.025-.025L9.128 2.07zM2.5 6.6a.6.6 0 011.2 0v5.8a.6.6 0 11-1.2 0V6.6z"
        />
      </svg>
    );
  },
);

ThumbUpIcon.displayName = 'ThumbUpIcon';

export default ThumbUpIcon;
