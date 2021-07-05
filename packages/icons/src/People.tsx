import React, {forwardRef} from 'react';
import type {ForwardRefExoticComponent} from 'react';
import type {IconPropsType} from './_types';

const PeopleIcon: ForwardRefExoticComponent<IconPropsType> = forwardRef(
  (props, ref) => {
    return (
      <svg
        width="1em"
        height="1em"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
        ref={ref}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.33333 12.95C11.9023 12.95 13.9848 10.8345 13.9848 8.225C13.9848 5.61545 11.9023 3.5 9.33333 3.5C6.7644 3.5 4.68188 5.61545 4.68188 8.225C4.68188 10.8345 6.7644 12.95 9.33333 12.95ZM0.517033 19.5642C2.33476 16.8562 5.60332 15.05 9.33333 15.05C13.0633 15.05 16.3319 16.8562 18.1496 19.5642C19.7577 21.9598 17.356 24.5 14.5016 24.5H4.16505C1.31068 24.5 -1.09102 21.9598 0.517033 19.5642ZM19.395 18.7282C19.9826 19.6035 20.2099 20.5133 20.1607 21.3762H24.8686C27.0146 21.3762 28.8203 19.4961 27.6113 17.7231C26.2446 15.7188 23.7872 14.382 20.9828 14.382C19.2736 14.382 17.6931 14.8786 16.4101 15.7203C17.5929 16.537 18.6082 17.556 19.395 18.7282ZM24.48 9.33052C24.48 11.2619 22.9143 12.8277 20.9828 12.8277C19.0514 12.8277 17.4857 11.2619 17.4857 9.33052C17.4857 7.3991 19.0514 5.83337 20.9828 5.83337C22.9143 5.83337 24.48 7.3991 24.48 9.33052Z"
          fill="currentColor"
        />
      </svg>
    );
  },
);

PeopleIcon.displayName = 'PeopleIcon';

export default PeopleIcon;
