import React from 'react';
import TextareaAutosize, {TextareaAutosizeProps} from 'react-textarea-autosize';
import classnames from 'classnames';

import styles from './BareTextarea.module.scss';

import type {BaseControlProps} from '../types';

const DEFAULT_TEXTAREA_ROWS = 3;

export type BareTextareaProps = Omit<TextareaAutosizeProps, 'size'> &
  BaseControlProps<HTMLTextAreaElement>;

const BareTextarea: React.FC<BareTextareaProps> = ({
  className,
  rows,
  minRows,
  maxRows,
  inputRef,
  ...props
}) => {
  if (rows !== undefined) {
    minRows = rows;
    maxRows = rows;
  } else if (minRows === undefined && maxRows === undefined) {
    minRows = DEFAULT_TEXTAREA_ROWS;
    maxRows = DEFAULT_TEXTAREA_ROWS;
  }

  return (
    <TextareaAutosize
      {...props}
      minRows={minRows}
      maxRows={maxRows}
      className={classnames(styles['textarea'], 'input-default', className)}
      ref={(el) => {
        if (typeof inputRef === 'function') {
          inputRef(el);
        } else if (typeof inputRef === 'object' && inputRef !== null) {
          inputRef.current = el;
        }
      }}
    />
  );
};

export default BareTextarea;
