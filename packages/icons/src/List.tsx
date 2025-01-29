import React, {forwardRef} from 'react';
import type {ForwardRefExoticComponent} from 'react';
import type {IconPropsType} from './_types';
import {combineCommonProps} from './_helpers';

const ListIcon: ForwardRefExoticComponent<IconPropsType> = forwardRef(
  (props, ref) => {
    return (
      <svg
        fill="none"
        width="1em"
        height="1em"
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
        {...combineCommonProps(props)}
        ref={ref}
      >
        <g clip-path="url(#clip0_26639_179352)">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M1.25 4C1.25 3.30964 1.80964 2.75 2.5 2.75C3.19036 2.75 3.75 3.30964 3.75 4C3.75 4.69036 3.19036 5.25 2.5 5.25C1.80964 5.25 1.25 4.69036 1.25 4ZM5.25 3.99992C5.25 3.58571 5.58579 3.24992 6 3.24992H14C14.4142 3.24992 14.75 3.58571 14.75 3.99992C14.75 4.41413 14.4142 4.74992 14 4.74992H6C5.58579 4.74992 5.25 4.41413 5.25 3.99992ZM1.25 8C1.25 7.30964 1.80964 6.75 2.5 6.75C3.19036 6.75 3.75 7.30964 3.75 8C3.75 8.69036 3.19036 9.25 2.5 9.25C1.80964 9.25 1.25 8.69036 1.25 8ZM5.25 7.99992C5.25 7.58571 5.58579 7.24992 6 7.24992L14 7.24992C14.4142 7.24992 14.75 7.58571 14.75 7.99992C14.75 8.41413 14.4142 8.74992 14 8.74992L6 8.74992C5.58579 8.74992 5.25 8.41413 5.25 7.99992ZM1.25 12C1.25 11.3096 1.80964 10.75 2.5 10.75C3.19036 10.75 3.75 11.3096 3.75 12C3.75 12.6904 3.19036 13.25 2.5 13.25C1.80964 13.25 1.25 12.6904 1.25 12ZM5.25 11.9999C5.25 11.5857 5.58579 11.2499 6 11.2499L14 11.2499C14.4142 11.2499 14.75 11.5857 14.75 11.9999C14.75 12.4141 14.4142 12.7499 14 12.7499L6 12.7499C5.58579 12.7499 5.25 12.4141 5.25 11.9999Z"
            fill="currentColor"
          />
        </g>
        <defs>
          <clipPath id="clip0_26639_179352">
            <rect width="16" height="16" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  },
);

ListIcon.displayName = 'ListIcon';

export default ListIcon;
