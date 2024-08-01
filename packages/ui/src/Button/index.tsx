import React, {forwardRef, ButtonHTMLAttributes, useMemo} from 'react';
import cx from 'classnames';
import {LoaderIcon} from '@eruditorgroup/profi-icons';

import {theme} from '@eruditorgroup/profi-toolkit';

import styles from './Button.module.scss';
import type {
  ForwardingComponent,
  AliasProps,
  IColor,
  ISize,
  ISocials,
} from '@eruditorgroup/profi-toolkit';

type ButtonSocial = Extract<ISocials, 'fb' | 'ya' | 'vk'>;
type ButtonSize = Extract<ISize, 's' | 'm' | 'l'> | 'custom';
type ButtonColor = Extract<
  IColor,
  'primary' | 'secondary' | 'light' | "white" | 'transparent'
>;

type ButtonUndesignedProps = {
  size?: ButtonSize;
  block?: boolean;
  rounded?: boolean;
  regular?: boolean;
  leading?: React.ReactNode;
  trailing?: React.ReactNode;
  loading?: boolean;
  contentClassName?: string;
  skeleton?: boolean;
};

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  AliasProps &
  ButtonUndesignedProps &
  (
    | {design?: ButtonColor | ButtonSocial}
    | {design?: 'link'; underlined?: boolean}
  );

const Button: ForwardingComponent<'button', ButtonProps> = forwardRef(
  (
    {
      design = 'primary',
      size = 'm',
      type = 'button',
      rounded = false,
      block = false,
      as: Component = 'button',
      children,
      className,
      contentClassName,
      leading,
      trailing,
      loading,
      regular,
      skeleton,
      ...props
    },
    ref,
  ) => {
    const shouldRenderSuffix = useMemo<boolean>(() => !!(trailing || leading), [
      trailing,
      leading,
    ]);

    const underlined = useMemo(() => {
      const result = design === 'link' && props['underlined'];
      delete props['underlined'];
      return result;
    }, [design, props]);

    const skeletonClassnames = cx(
      styles['skeleton'],
      theme.transitions.skeleton,
    );

    return (
      <Component
        type={type}
        className={cx(
          styles['button'],
          styles[`design-${design}`],
          styles[`size-${size}`],
          block && styles[`block`],
          rounded && styles[`rounded`],
          regular && styles[`regular`],
          loading && styles[`loading`],
          underlined && styles['underlined'],
          skeleton && !isSkeletonInline(design) && skeletonClassnames,
          className,
        )}
        {...props}
        ref={ref}
        onClick={props.disabled || loading ? null : props.onClick}
      >
        {loading && <LoaderIcon className={styles.loadingIcon} />}
        {shouldRenderSuffix && (
          <span className={styles['leading']}>{leading}</span>
        )}
        <span
          className={cx(
            styles['content'],
            skeleton && isSkeletonInline(design) && skeletonClassnames,
            contentClassName,
          )}
        >
          {children}
        </span>
        {shouldRenderSuffix && (
          <span className={styles['trailing']}>{trailing}</span>
        )}
      </Component>
    );
  },
);

function isSkeletonInline(design: ButtonProps['design']) {
  return ['link', 'transparent'].includes(design);
}

export default Button;
