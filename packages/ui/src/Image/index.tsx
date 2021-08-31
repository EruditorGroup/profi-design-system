import React, {useState, forwardRef} from 'react';
import cx from 'classnames';
import {ISize, theme} from '@eruditorgroup/profi-toolkit';

import styles from './Image.module.scss';

import type {
  ImgHTMLAttributes,
  RefAttributes,
  ForwardRefExoticComponent,
} from 'react';

export interface ImageProps
  extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'loading'> {
  radius?: ISize;
  lazy?: boolean;
  fallback?: string;
  onError?: (e: React.SyntheticEvent<HTMLImageElement, Event>) => void;
  fit?: 'fill' | 'contain' | 'cover';
}

const DEFAULT_FALLBACK =
  'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMzAiIGhlaWdodD0iMTMwIiBmaWxsPSIjMzMzIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHhtbG5zOnY9Imh0dHBzOi8vdmVjdGEuaW8vbmFubyI+PHBhdGggZD0iTTY0LjUgOTRjOS40MjQgMCAxNy44MTYtNC40MTkgMjMuMjE3LTExLjI5OGEyOS42MyAyOS42MyAwIDAgMCAuNTMtLjY5NmMuMjI4LS4zMDkuNDUxLS42MjQuNjY4LS45NDJDOTIuMTI0IDc2LjM0MiA5NCA3MC42NCA5NCA2NC41IDk0IDQ4LjIwOCA4MC43OTIgMzUgNjQuNSAzNWEyOS4zNiAyOS4zNiAwIDAgMC0xNS42NjYgNC40OTljLS4zMjYuMjA1LS42NDguNDE2LS45NjYuNjMzbC0uNzE0LjUwNEMzOS43ODggNDYgMzUgNTQuNjkxIDM1IDY0LjUgMzUgODAuNzkyIDQ4LjIwOCA5NCA2NC41IDk0em0wIDNDODIuNDQ5IDk3IDk3IDgyLjQ0OSA5NyA2NC41UzgyLjQ0OSAzMiA2NC41IDMyIDMyIDQ2LjU1MSAzMiA2NC41IDQ2LjU1MSA5NyA2NC41IDk3eiIvPjxwYXRoIGQ9Ik00Ni41ODkgMzguODQ4Yy4wMzEtLjA0NS4wNjYtLjA4OC4xMDUtLjEyOC4zODMtLjM5OCAxLjAwNS0uMzk4IDEuMzg4IDBsLjc1MS43NzktLjk2Ni42MzMtLjcxNC41MDRMNTIuMzI2IDQ2bDguMTkyIDguNDk2IDguMzQxIDguNjUgMTYuODE1IDE3LjQzOCAyLjA0MiAyLjExOC41My0uNjk2LjY2OC0uOTQyLjgxNi44NDdjLjM4My4zOTguMzgzIDEuMDQyIDAgMS40NC0uMDk2LjEtLjIwNy4xNzQtLjMyNi4yMjQuMDE1LjI3OS0uMDgxLjU2My0uMjg2Ljc3NmwtLjY5NC43MmMtLjM4My4zOTgtMS4wMDUuMzk4LTEuMzg4IDBsLTIuOTU4LTMuMDY3Yy0xLjAwOC42MzEtMi4yMTMuOTk4LTMuNTA3Ljk5OEg0OC40MjlDNDQuODc4IDgzIDQyIDgwLjIzOSA0MiA3Ni44MzNWNTIuMTY3QzQyIDQ4Ljc2MSA0NC44NzggNDYgNDguNDI5IDQ2aC45MzNsLTQuNjY4LTQuODRjLS4zODMtLjM5OC0uMzgzLTEuMDQyIDAtMS40NGwuNjk0LS43MmMuMzI2LS4zMzguODI0LS4zODkgMS4yMDEtLjE1MnpNNTUuMTAzIDQ2aDI1LjQ2OUM4NC4xMjIgNDYgODcgNDguNzYxIDg3IDUyLjE2N3YyNC42NjdhNS45MyA1LjkzIDAgMCAxLS4zMTcgMS45MTdMNzAuMDU4IDYxLjUxYy4zNzctLjc2NS41ODktMS42MTkuNTg5LTIuNTIxIDAtMy4yNTctMi43NTItNS44OTctNi4xNDctNS44OTctLjc3MSAwLTEuNTA4LjEzNi0yLjE4OC4zODRMNTUuMTAzIDQ2em00LjAyMiAxMC4xMjVjLS40OTIuODQ4LS43NzIgMS44MjQtLjc3MiAyLjg2NCAwIDMuMjU3IDIuNzUyIDUuODk3IDYuMTQ3IDUuODk3LjkxMyAwIDEuNzc5LS4xOTEgMi41NTgtLjUzM2wtNy45MzMtOC4yMjd6bTEyLjc5OSAxMy4yNzNjLTIuMTM3LTEuMTk3LTQuNjg3LTEuODkyLTcuNDI0LTEuODkyLTQuOTI5IDAtOS4yNDkgMi4yNTQtMTEuNjUxIDUuNjM0LTIuMTI1IDIuOTkgMS4wNDkgNi4xNiA0LjgyMSA2LjE2aDEzLjY2YzMuMjQzIDAgNi4wNDUtMi4zNDQgNS40MTUtNC45MDJsLTQuODIxLTV6Ii8+PC9zdmc+'; // 1.4KB

const Image: ForwardRefExoticComponent<
  ImageProps & RefAttributes<HTMLImageElement>
> = forwardRef(
  (
    {
      src,
      lazy,
      radius,
      className,
      fit,
      fallback = DEFAULT_FALLBACK,
      onError: onErrorProp,
      ...props
    },
    ref,
  ) => {
    const [isFailed, setFailed] = useState(false);

    const onError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
      if (onErrorProp) {
        onErrorProp(e);
      }
      setFailed(true);
    };

    return (
      <img
        ref={ref}
        loading={lazy ? 'lazy' : 'eager'}
        className={cx(
          radius && theme.common[`radius-${radius}`],
          fit && styles[`fit-${fit}`],
          isFailed && styles['failed'],
          className,
        )}
        {...(isFailed && fallback
          ? {
              src: fallback,
            }
          : {onError, src})}
        {...props}
      />
    );
  },
);

export default Image;
