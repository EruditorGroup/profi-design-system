import React, {forwardRef} from 'react';
import type {ForwardRefExoticComponent} from 'react';
import type {IconPropsType} from './_types';
import {combineCommonProps} from './_helpers';

const YandexIcon: ForwardRefExoticComponent<IconPropsType> = forwardRef(
  (props, ref) => {
    return (
      <svg
        width="1em"
        height="1em"
        viewBox="0 0 512 512"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        {...combineCommonProps(props)}
        ref={ref}
      >
        <circle cx="256" cy="256" r="251.41" />
        <path
          d="m313.48 105.37h-45.648c-44.854 0-82.892 34.142-82.892 100.43 0 39.765 18.42 69.084 51.25 83.547l-61.262 110.87c-2.005 3.619 0 6.426 3.202 6.426h28.433c2.4 0 4.01-0.801 4.81-2.807l55.659-108.86h20.021v108.86c0 1.197 1.197 2.807 2.799 2.807h24.832c2.4 0 3.203-1.205 3.203-3.205v-294.05c-1e-3 -2.812-1.603-4.017-4.407-4.017zm-26.428 163.89h-16.818c-26.427 0-52.053-19.281-52.053-67.483 0-50.22 24.024-70.705 48.448-70.705h20.424v138.19z"
          fill="#fff"
        />
      </svg>
    );
  },
);

YandexIcon.displayName = 'YandexIcon';

export default YandexIcon;
