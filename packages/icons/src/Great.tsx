import React, {forwardRef} from 'react';
import type {ForwardRefExoticComponent} from 'react';
import type {IconPropsType} from './_types';
import {combineCommonProps} from './_helpers';

const GreatIcon: ForwardRefExoticComponent<IconPropsType> = forwardRef(
  (props, ref) => {
    return (
      <svg
        width="1em"
        height="1em"
        viewBox="0 0 22 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...combineCommonProps(props)}
        ref={ref}
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M11 21C16.799 21 21.5 16.299 21.5 10.5C21.5 4.70101 16.799 0 11 0C5.20101 0 0.5 4.70101 0.5 10.5C0.5 16.299 5.20101 21 11 21ZM12.4787 8.49206L11.7242 5.68974C11.525 4.94973 10.475 4.94973 10.2758 5.68974L9.52127 8.49206C9.45178 8.75016 9.25016 8.95178 8.99206 9.02127L6.18974 9.77579C5.44973 9.97504 5.44973 11.025 6.18974 11.2242L8.99206 11.9787C9.25016 12.0482 9.45178 12.2498 9.52127 12.5079L10.2758 15.3103C10.475 16.0503 11.525 16.0503 11.7242 15.3103L12.4787 12.5079C12.5482 12.2498 12.7498 12.0482 13.0079 11.9787L15.8103 11.2242C16.5503 11.025 16.5503 9.97504 15.8103 9.77579L13.0079 9.02127C12.7498 8.95178 12.5482 8.75016 12.4787 8.49206Z"
          fill="currentColor"
        />
      </svg>
    );
  },
);

GreatIcon.displayName = 'GreatIcon';
export default GreatIcon;
