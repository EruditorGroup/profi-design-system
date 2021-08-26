import React, {forwardRef} from 'react';
import type {ForwardRefExoticComponent} from 'react';
import type {IconPropsType} from './_types';
import {combineCommonProps} from './_helpers';

const RepeatIcon: ForwardRefExoticComponent<IconPropsType> = forwardRef(
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
          d="M13 4.125H8C5.23858 4.125 3 6.36358 3 9.125V9.125C3 11.8864 5.23858 14.125 8 14.125V14.125C10.7614 14.125 13 11.8864 13 9.125V9.125M13 4.125L11 1.875M13 4.125L11 5.875"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

RepeatIcon.displayName = 'RepeatIcon';

export default RepeatIcon;
