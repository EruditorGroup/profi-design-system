import React, {forwardRef} from 'react';
import type {ForwardRefExoticComponent} from 'react';
import type {IconPropsType} from './_types';
import {combineCommonProps} from './_helpers';

const StarIcon: ForwardRefExoticComponent<IconPropsType> = forwardRef(
  (props, ref) => {
    return (
      <svg
        width="1em"
        height="1em"
        viewBox="0 0 52 49"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...combineCommonProps(props)}
        ref={ref}
      >
        <path
          d="M23.4997 2.19323C24.3237 -0.17737 27.6763 -0.177363 28.5003 2.19324L32.8635 14.7457C33.227 15.7915 34.203 16.5006 35.3099 16.5231L48.5964 16.7939C51.1056 16.845 52.1416 20.0335 50.1416 21.5498L39.5518 29.5784C38.6696 30.2472 38.2968 31.3945 38.6174 32.4543L42.4656 45.1741C43.1924 47.5763 40.4801 49.5469 38.42 48.1134L27.5119 40.5228C26.6032 39.8905 25.3968 39.8905 24.488 40.5228L13.5799 48.1134C11.5199 49.5469 8.80759 47.5763 9.53435 45.1741L13.3826 32.4543C13.7032 31.3945 13.3304 30.2472 12.4481 29.5784L1.85834 21.5497C-0.141601 20.0335 0.894411 16.845 3.40362 16.7939L16.6901 16.5231C17.797 16.5006 18.7729 15.7915 19.1364 14.7457L23.4997 2.19323Z"
          fill="currentColor"
        />
      </svg>
    );
  },
);

StarIcon.displayName = 'StarIcon';

export default StarIcon;
