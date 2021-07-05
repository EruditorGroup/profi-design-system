import React, {forwardRef} from 'react';
import type {ForwardRefExoticComponent} from 'react';
import type {IconPropsType} from './_types';

const DiagramIcon: ForwardRefExoticComponent<IconPropsType> = forwardRef(
  (props, ref) => {
    return (
      <svg
        width="1em"
        height="1em"
        viewBox="0 0 29 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
        ref={ref}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.25 14C4.25 8.45318 8.55104 3.91093 14 3.52637V12.6464C14 14.2055 15.885 14.9863 16.9874 13.8839L23.1596 7.71174C24.4724 9.46461 25.25 11.6415 25.25 14C25.25 19.799 20.549 24.5 14.75 24.5C8.95101 24.5 4.25 19.799 4.25 14ZM15.5 3.52637C18.1006 3.70991 20.4398 4.8405 22.1746 6.57537L15.9268 12.8232C15.7693 12.9807 15.5 12.8692 15.5 12.6464V3.52637Z"
          fill="currentColor"
        />
      </svg>
    );
  },
);

DiagramIcon.displayName = 'DiagramIcon';

export default DiagramIcon;
