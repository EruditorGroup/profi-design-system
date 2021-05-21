import React, {forwardRef} from 'react';
import type {TextareaHTMLAttributes} from 'react';
import classnames from 'classnames';

import styles from './BareTextarea.module.scss';

import type {BaseControlProps} from '../types';

export type BareTextareaProps = Omit<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  'size'
> &
  BaseControlProps<HTMLTextAreaElement> & {
    children?: never;
  };

const BareTextarea = forwardRef<HTMLTextAreaElement, BareTextareaProps>(
  ({className, inputRef, ...props}) => (
    <textarea
      {...props}
      className={classnames(styles['textarea'], className)}
      ref={inputRef}
    ></textarea>
  ),
);

export default BareTextarea;
