import React, {forwardRef} from 'react';
import type {ForwardRefExoticComponent} from 'react';
import type {IconPropsType} from './_types';
import {combineCommonProps} from './_helpers';

const AlertTriangleColorfulIcon: ForwardRefExoticComponent<IconPropsType> = forwardRef(
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
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M15.508 12.972c-.02-.385-.233-.746-.429-1.077l-.081-.139-5.512-9.52-.08-.139c-.215-.382-.453-.802-.864-.985a1.333 1.333 0 0 0-1.084 0c-.41.183-.648.603-.865.985l-.079.14-5.511 9.519-.082.139c-.205.347-.43.726-.43 1.131a1.333 1.333 0 0 0 .548 1.052c.364.265.849.26 1.289.256h11.344c.44.005.925.01 1.29-.256a1.333 1.333 0 0 0 .546-1.106z"
          fill="currentColor"
        />
        <rect x="7.3" y="5.4" width="1.4" height="4" rx=".7" fill="#181818" />
        <rect
          x="7.3"
          y="10.3"
          width="1.4"
          height="1.4"
          rx=".7"
          fill="#181818"
        />
      </svg>
    );
  },
);

AlertTriangleColorfulIcon.displayName = 'AlertTriangleColorfulIcon';

export default AlertTriangleColorfulIcon;
