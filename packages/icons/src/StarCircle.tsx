import React, {forwardRef} from 'react';
import type {ForwardRefExoticComponent} from 'react';
import type {IconPropsType} from './_types';
import {combineCommonProps} from './_helpers';

const StarCircleIcon: ForwardRefExoticComponent<IconPropsType> = forwardRef(
  (props, ref) => {
    return (
      <svg
        width="1em"
        height="1em"
        viewBox="0 0 11 11"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...combineCommonProps(props)}
        ref={ref}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.64763 10.7943C8.57149 10.7943 10.9418 8.42403 10.9418 5.50017C10.9418 2.57631 8.57149 0.206055 5.64763 0.206055C2.72377 0.206055 0.353516 2.57631 0.353516 5.50017C0.353516 8.42403 2.72377 10.7943 5.64763 10.7943ZM6.46683 4.30741L6.15884 3.16352C6.0182 2.64116 5.27707 2.64116 5.13643 3.16352L4.82844 4.30741C4.77938 4.48961 4.63707 4.63192 4.45487 4.68098L3.31098 4.98897C2.78862 5.12961 2.78862 5.87073 3.31098 6.01138L4.45487 6.31937C4.63707 6.36842 4.77938 6.51074 4.82844 6.69293L5.13643 7.83682C5.27707 8.35919 6.0182 8.35919 6.15884 7.83682L6.46683 6.69293C6.51589 6.51074 6.6582 6.36842 6.84039 6.31937L7.98429 6.01138C8.50665 5.87073 8.50665 5.12961 7.98429 4.98897L6.84039 4.68098C6.6582 4.63192 6.51589 4.4896 6.46683 4.30741Z"
          fill="currentColor"
        />
      </svg>
    );
  },
);

StarCircleIcon.displayName = 'StarCircleIcon';

export default StarCircleIcon;
