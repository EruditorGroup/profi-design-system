import React, {forwardRef} from 'react';
import type {ForwardRefExoticComponent} from 'react';
import type {IconPropsType} from './_types';

const InstagramIcon: ForwardRefExoticComponent<IconPropsType> = forwardRef(
  (props, ref) => {
    return (
      <svg
        width="1em"
        height="1em"
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
        ref={ref}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 11.9792C0 6.33213 0 3.50861 1.75431 1.75431C3.50861 0 6.33213 0 11.9792 0H13.0208C18.6679 0 21.4914 0 23.2457 1.75431C25 3.50861 25 6.33213 25 11.9792V13.0208C25 18.6679 25 21.4914 23.2457 23.2457C21.4914 25 18.6679 25 13.0208 25H11.9792C6.33213 25 3.50861 25 1.75431 23.2457C0 21.4914 0 18.6679 0 13.0208V11.9792ZM12.5 6.08109C8.95493 6.08109 6.08105 8.95497 6.08105 12.5C6.08105 16.0451 8.95493 18.919 12.5 18.919C16.0451 18.919 18.9189 16.0451 18.9189 12.5C18.9189 8.95497 16.0451 6.08109 12.5 6.08109ZM12.5 16.6667C10.1988 16.6667 8.3333 14.8012 8.3333 12.5C8.3333 10.1989 10.1988 8.33334 12.5 8.33334C14.8012 8.33334 16.6667 10.1989 16.6667 12.5C16.6667 14.8012 14.8012 16.6667 12.5 16.6667ZM20.1725 6.32752C21.0009 6.32752 21.6725 5.65593 21.6725 4.82749C21.6725 3.99906 21.0009 3.32751 20.1725 3.32751C19.3441 3.32751 18.6725 3.99906 18.6725 4.82749C18.6725 5.65593 19.3441 6.32752 20.1725 6.32752Z"
          fill="currentColor"
        />
      </svg>
    );
  },
);

InstagramIcon.displayName = 'InstagramIcon';

export default InstagramIcon;
