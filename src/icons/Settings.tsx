import React, {forwardRef, useMemo} from 'react';
import type {ForwardRefExoticComponent} from 'react';
import type {IconPropsType} from './_types';

const SettingsIcon: ForwardRefExoticComponent<
  IconPropsType & {key: string}
> = forwardRef(({width = '20', key, height = '20', color, ...props}, ref) => {
  const id = useMemo<string>(() => (Math.random() * 1000).toFixed(), []);
  return (
    <svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      style={{color}}
      ref={ref}
      width={width}
      height={height}
      {...props}
    >
      <mask
        id={`Icon_Settings_svg__a${key || id}`}
        maskUnits="userSpaceOnUse"
        x="3"
        y="3"
        width="14"
        height="14"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M10 17a7 7 0 100-14 7 7 0 000 14zm0-4.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"
          fill="#fff"
        />
      </mask>
      <g mask={`url(#Icon_Settings_svg__a${key || id})`} fill="currentColor">
        <path d="M10 0l1.837 5.565L17.07 2.93l-2.636 5.234L20 10l-5.565 1.837 2.636 5.234-5.234-2.636L10 20l-1.837-5.565L2.93 17.07l2.636-5.234L0 10l5.565-1.837L2.93 2.93l5.234 2.636L10 0z" />
        <circle cx="10" cy="10" r="5.5" />
      </g>
    </svg>
  );
});

SettingsIcon.displayName = 'SettingsIcon';

export default SettingsIcon;
