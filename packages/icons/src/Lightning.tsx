import React, {forwardRef} from 'react';
import type {ForwardRefExoticComponent} from 'react';
import type {IconPropsType} from './_types';
import {combineCommonProps} from './_helpers';

const LightningIcon: ForwardRefExoticComponent<IconPropsType> = forwardRef(
  (props, ref) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 47 76"
        fill="none"
        {...combineCommonProps(props)}
        ref={ref}
      >
        <path
          d="M19.4873 46.7631L13.2135 73.7032C12.8512 75.2532 14.8809 76.1791 15.8169 74.8908L45.9914 33.3466C46.6926 32.3804 46.0015 31.0284 44.8105 31.0284H28.9352C27.9958 31.0284 27.3014 30.1528 27.5128 29.2369L33.7865 2.29681C34.1489 0.746814 32.1191 -0.179129 31.1831 1.10917L1.00858 42.6534C0.307394 43.6196 0.998516 44.9716 2.18952 44.9716H18.0614C19.0041 44.9716 19.6985 45.8472 19.4873 46.7631Z"
          fill="currentColor"
        />
      </svg>
    );
  },
);

LightningIcon.displayName = 'LightningIcon';

export default LightningIcon;
