import React, {forwardRef} from 'react';
import type {ForwardRefExoticComponent} from 'react';
import type {IconPropsType} from './_types';
import {combineCommonProps} from './_helpers';

const PhoneCallIcon: ForwardRefExoticComponent<IconPropsType> = forwardRef(
  (props, ref) => {
    return (
      <svg
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...combineCommonProps(props)}
        ref={ref}
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M13.2546 1.91169C13.3034 1.47257 13.699 1.15613 14.1381 1.20491C16.3477 1.45039 18.4083 2.4399 19.9813 4.01099C21.5544 5.58207 22.5465 7.64135 22.7948 9.85069C22.8441 10.2898 22.5281 10.6857 22.0891 10.735C21.65 10.7844 21.2541 10.4684 21.2048 10.0294C20.997 8.18072 20.1669 6.45765 18.8507 5.14307C17.5344 3.82849 15.8103 3.00053 13.9614 2.79513C13.5223 2.74635 13.2059 2.35082 13.2546 1.91169ZM13.2646 5.84683C13.3492 5.41318 13.7693 5.13022 14.2029 5.21483C15.336 5.43588 16.3772 5.99001 17.1935 6.80627C18.0098 7.62254 18.5639 8.66381 18.7849 9.79683C18.8696 10.2305 18.5866 10.6506 18.1529 10.7352C17.7193 10.8198 17.2992 10.5369 17.2146 10.1032C17.0545 9.28276 16.6532 8.52873 16.0621 7.93764C15.471 7.34655 14.717 6.94529 13.8966 6.78522C13.4629 6.70061 13.18 6.28048 13.2646 5.84683Z"
          fill="currentColor"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M4.5721 2.36263C5.20506 2.14317 5.89681 2.11539 6.60092 2.47074C6.96104 2.65248 7.33392 2.98055 7.66199 3.31867C8.34785 4.02554 9.0671 5.00361 9.50469 5.88994C9.70895 6.3037 9.90079 6.79807 9.90079 7.2532C9.90079 7.68378 9.75106 8.06196 9.5941 8.36304C9.43966 8.65928 9.23482 8.9581 9.07199 9.20416C8.70998 9.75122 8.48201 10.1564 8.46308 10.5826C8.44573 10.973 8.67017 11.502 9.11144 12.105C9.859 13.1266 10.895 14.1344 11.9232 14.8716C12.3273 15.1612 12.8865 15.5629 13.4138 15.5371C13.7766 15.5193 14.1738 15.2976 14.7578 14.9222C15.017 14.7555 15.3243 14.5537 15.6304 14.4002C15.9369 14.2464 16.3202 14.0992 16.7468 14.0992C17.2019 14.0992 17.6963 14.291 18.11 14.4953C18.9964 14.9329 19.9744 15.6521 20.6813 16.338C21.0194 16.6661 21.3475 17.0389 21.5292 17.399C21.8846 18.1032 21.8568 18.7949 21.6373 19.4279C21.4314 20.022 21.0495 20.5853 20.6757 21.0962C19.8001 22.2928 18.1889 23.1293 15.8724 22.6735C13.6255 22.2314 10.671 20.5182 7.02121 16.9125C6.99863 16.8913 7.04265 16.9353 7.02121 16.9125C3.41552 13.2627 1.76858 10.3745 1.32645 8.12761C0.870629 5.81111 1.70714 4.19983 2.9038 3.32428C3.4147 2.95047 3.97798 2.56861 4.5721 2.36263ZM8.18554 15.8145C11.7578 19.3494 14.3808 20.7493 16.1813 21.1036C17.9189 21.4455 18.8937 20.822 19.3844 20.1514C19.7555 19.6443 20.0056 19.25 20.1256 18.9037C20.2322 18.5964 20.2245 18.365 20.1008 18.1199C20.0431 18.0055 19.8734 17.7835 19.5671 17.4863C18.9852 16.9216 18.0873 16.2685 17.4017 15.93C17.0296 15.7462 16.8141 15.6992 16.7468 15.6992C16.6811 15.6992 16.5597 15.724 16.3479 15.8303C16.1288 15.9402 15.8972 16.0917 15.5948 16.2862C15.0849 16.6141 14.3393 17.0937 13.492 17.1351C12.5786 17.1799 11.7089 16.6866 10.991 16.1719C10.2877 15.6678 9.66562 15.0684 9.29676 14.6788C8.9213 14.3243 8.32312 13.7371 7.82024 13.0499C7.33041 12.3805 6.82198 11.4721 6.86465 10.5116C6.90574 9.58671 7.39623 8.83719 7.73768 8.3212C7.92659 8.03574 8.06972 7.82594 8.17533 7.62338C8.27841 7.42566 8.30079 7.31486 8.30079 7.2532C8.30079 7.1859 8.25373 6.9704 8.07 6.59824C7.73152 5.91264 7.07835 5.01481 6.51368 4.43285C6.21646 4.12652 5.99451 3.95691 5.88005 3.89914C5.63501 3.77548 5.40362 3.76777 5.09623 3.87434C4.74999 3.99439 4.3557 4.24452 3.84858 4.61556C3.17795 5.10623 2.55444 6.08112 2.89635 7.8187C3.25062 9.61915 4.65056 12.2422 8.18554 15.8145Z"
          fill="currentColor"
        />
      </svg>
    );
  },
);

PhoneCallIcon.displayName = 'PhoneCallIcon';

export default PhoneCallIcon;
