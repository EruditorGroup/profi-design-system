import React, {forwardRef} from 'react';
import type {ForwardRefExoticComponent} from 'react';
import type {IconPropsType} from './_types';

const DiagramIcon: ForwardRefExoticComponent<IconPropsType> = forwardRef(
  (props, ref) => {
    return (
      <svg
        width="1em"
        height="1em"
        viewBox="0 0 22 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
        ref={ref}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0.5 11C0.5 5.45318 4.80104 0.910927 10.25 0.526367V9.64644C10.25 11.2055 12.135 11.9863 13.2374 10.8839L19.4096 4.71174C20.7224 6.46461 21.5 8.64149 21.5 11C21.5 16.799 16.799 21.5 11 21.5C5.20101 21.5 0.5 16.799 0.5 11ZM11.75 0.526367C14.3506 0.709905 16.6898 1.8405 18.4246 3.57537L12.1768 9.82322C12.0193 9.98071 11.75 9.86917 11.75 9.64644V0.526367Z"
          fill="currentColor"
        />
      </svg>
    );
  },
);

DiagramIcon.displayName = 'DiagramIcon';

export default DiagramIcon;
