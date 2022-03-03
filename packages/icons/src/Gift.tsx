import React, {forwardRef} from 'react';
import type {ForwardRefExoticComponent} from 'react';
import type {IconPropsType} from './_types';
import {combineCommonProps} from './_helpers';

const GiftIcon: ForwardRefExoticComponent<IconPropsType> = forwardRef(
  (props, ref) => {
    return (
      <svg
        width="1em"
        height="1em"
        viewBox="0 0 16 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...combineCommonProps(props)}
        ref={ref}
      >
        <path
          d="M8 5.056h4.11a1 1 0 0 1 1 1v3.222M8 5.056H3.889a1 1 0 0 0-1 1v3.222m5.11-4.222V13.5m0 0H3.89a1 1 0 0 1-1-1V9.278m5.11 4.222h4.112a1 1 0 0 0 1-1V9.278m-10.222 0H13.11M10.667 5.056a1.778 1.778 0 0 0 0-3.556C9.685 1.5 8 2.296 8 3.278v1.778M5.333 5.056a1.778 1.778 0 1 1 0-3.556C6.315 1.5 8 2.296 8 3.278v1.778"
          stroke="currentColor"
        />
      </svg>
    );
  },
);

GiftIcon.displayName = 'GiftIcon';

export default GiftIcon;
