import React, {forwardRef} from 'react';
import type {ForwardRefExoticComponent} from 'react';
import type {IconPropsType} from './_types';

const PlaceIcon: ForwardRefExoticComponent<IconPropsType> = forwardRef(
  (props, ref) => {
    return (
      <svg
        width="1em"
        height="1em"
        viewBox="0 0 17 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        ref={ref}
        {...props}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.2947 12.8702C14.0697 11.1769 15.5799 9.73623 15.5799 6.59615C15.5799 3.09127 12.6341 0.25 9.00017 0.25C5.36627 0.25 2.42041 3.09127 2.42041 6.59615C2.42041 9.73623 3.93063 11.1769 5.70565 12.8702C6.8005 13.9147 7.9961 15.0553 9.00017 16.75C10.0042 15.0553 11.1998 13.9147 12.2947 12.8702ZM9.0002 9.36043C10.3979 9.36043 11.5309 8.22741 11.5309 6.82975C11.5309 5.4321 10.3979 4.29908 9.0002 4.29908C7.60254 4.29908 6.46952 5.4321 6.46952 6.82975C6.46952 8.22741 7.60254 9.36043 9.0002 9.36043Z"
          fill="currentColor"
        />
      </svg>
    );
  },
);

PlaceIcon.displayName = 'PlaceIcon';

export default PlaceIcon;
