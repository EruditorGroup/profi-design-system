import React, {forwardRef} from 'react';
import type {ForwardRefExoticComponent} from 'react';
import type {IconPropsType} from './_types';
import {combineCommonProps} from './_helpers';

const CameraOutlineIcon: ForwardRefExoticComponent<IconPropsType> = forwardRef(
  (props, ref) => {
    return (
      <svg
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 17 17"
        width="1em"
        height="1em"
        {...combineCommonProps(props)}
        ref={ref}
      >
        <rect
          x="0.5"
          y="0.5"
          width="16"
          height="12"
          rx="2.5"
          stroke="currentColor"
        />
        <rect
          x="5.5"
          y="3.5"
          width="6"
          height="6"
          rx="3"
          stroke="currentColor"
        />
        <rect x="2" y="2" width="3" height="3" rx="1.5" fill="currentColor" />
      </svg>
    );
  },
);

CameraOutlineIcon.displayName = 'CameraOutlineIcon';

export default CameraOutlineIcon;
