import React, {forwardRef} from 'react';
import type {ForwardRefExoticComponent} from 'react';
import type {IconPropsType} from './_types';
import {combineCommonProps} from './_helpers';

const PeopleIcon: ForwardRefExoticComponent<IconPropsType> = forwardRef(
  (props, ref) => {
    return (
      <svg
        width="1em"
        height="1em"
        viewBox="0 0 29 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...combineCommonProps(props)}
        ref={ref}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.58333 12.95C12.1523 12.95 14.2348 10.8345 14.2348 8.225C14.2348 5.61545 12.1523 3.5 9.58333 3.5C7.0144 3.5 4.93188 5.61545 4.93188 8.225C4.93188 10.8345 7.0144 12.95 9.58333 12.95ZM0.767033 19.5642C2.58476 16.8562 5.85332 15.05 9.58333 15.05C13.3133 15.05 16.5819 16.8562 18.3996 19.5642C20.0077 21.9598 17.606 24.5 14.7516 24.5H4.41505C1.56068 24.5 -0.841019 21.9598 0.767033 19.5642ZM19.645 18.7282C20.2326 19.6035 20.4599 20.5133 20.4107 21.3762H25.1186C27.2646 21.3762 29.0703 19.4961 27.8613 17.7231C26.4946 15.7188 24.0372 14.382 21.2328 14.382C19.5236 14.382 17.9431 14.8786 16.6601 15.7203C17.8429 16.537 18.8582 17.556 19.645 18.7282ZM24.73 9.33052C24.73 11.2619 23.1643 12.8277 21.2328 12.8277C19.3014 12.8277 17.7357 11.2619 17.7357 9.33052C17.7357 7.3991 19.3014 5.83337 21.2328 5.83337C23.1643 5.83337 24.73 7.3991 24.73 9.33052Z"
          fill="currentColor"
        />
      </svg>
    );
  },
);

PeopleIcon.displayName = 'PeopleIcon';

export default PeopleIcon;
