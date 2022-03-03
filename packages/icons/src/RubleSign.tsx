import React, {forwardRef} from 'react';
import type {ForwardRefExoticComponent} from 'react';
import type {IconPropsType} from './_types';
import {combineCommonProps} from './_helpers';

const RubleSignIcon: ForwardRefExoticComponent<IconPropsType> = forwardRef(
  (props, ref) => {
    return (
      <svg
        width="1em"
        height="1em"
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...combineCommonProps(props)}
        ref={ref}
      >
        <circle cx="7.5" cy="7.5" r="6.5" stroke="currentColor" />
        <path
          fill="currentColor"
          d="M5.824 10.947a.75.75 0 0 0 1.5 0h-1.5Zm.75-6.894v-.75a.75.75 0 0 0-.75.75h.75Zm0 3.563h-.75.75Zm0-2.813c.664 0 1.439.005 2.045.189.294.089.485.203.597.323.096.103.176.25.176.52h1.5c0-.624-.207-1.146-.58-1.545-.357-.38-.82-.6-1.257-.734-.859-.26-1.868-.253-2.481-.253v1.5Zm.75 6.144V7.616h-1.5v3.33h1.5Zm0-3.331V4.053h-1.5v3.563h1.5Zm2.068-1.782c0 .278-.08.427-.171.528-.106.116-.287.228-.573.316-.593.183-1.365.188-2.074.188v1.5c.653 0 1.665.007 2.515-.254.436-.135.892-.357 1.242-.741.364-.401.56-.92.56-1.537h-1.5Z"
        />
        <path
          fill="currentColor"
          d="M5.41 9.643h3.095M5.41 7.598h.936"
          stroke="currentColor"
        />
      </svg>
    );
  },
);

RubleSignIcon.displayName = 'RubleSignIcon';

export default RubleSignIcon;
