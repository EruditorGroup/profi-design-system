import React, {forwardRef} from 'react';
import type {ForwardRefExoticComponent} from 'react';
import type {IconPropsType} from './_types';

const FbIcon: ForwardRefExoticComponent<IconPropsType> = forwardRef(
  (props, ref) => {
    return (
      <svg
        width="1em"
        height="1em"
        viewBox="0 0 18 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
        ref={ref}
      >
        <path
          d="M17.5 8.55195C17.5 3.82883 13.6944 0 9 0C4.30558 0 0.5 3.82883 0.5 8.55195C0.5 12.8204 3.60831 16.3584 7.67188 17V11.024H5.51367V8.55195H7.67188V6.66785C7.67188 4.52451 8.9409 3.3406 10.8825 3.3406C11.8121 3.3406 12.7852 3.50763 12.7852 3.50763V5.61221H11.7134C10.6575 5.61221 10.3281 6.27148 10.3281 6.94846V8.55195H12.6855L12.3087 11.024H10.3281V17C14.3917 16.3584 17.5 12.8204 17.5 8.55195Z"
          fill="currentColor"
        />
      </svg>
    );
  },
);

FbIcon.displayName = 'FbIcon';

export default FbIcon;
