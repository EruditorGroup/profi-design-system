import React, {forwardRef} from 'react';
import classnames from 'classnames';
import ReactAutosuggest from 'react-autosuggest';
import {Input, InputProps} from '@eruditorgroup/profi-ui';

import styles from './Autosuggest.module.scss';

export interface AutosuggestProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onInput' | 'onSelect'> {
  options?: {value: string; label?: string}[];
  onSelect?: (value: string) => void;
  onInput?: (value: string) => void;
}

const Autosuggest = forwardRef<HTMLDivElement, AutosuggestProps>(
  function Autosuggest({onSelect, onInput, options, className, ...props}, ref) {
    return (
      <div
        className={classnames(styles['root'], className)}
        {...props}
        ref={ref}
      >
        <Input
          onInput={(ev: React.ChangeEvent<HTMLInputElement>) =>
            onInput && onInput(ev.currentTarget.value)
          }
        />
        <div className={styles['suggest']}>
          <div
            className={styles['option']}
            onClick={() => onSelect && onSelect('123')}
          >
            123
          </div>
        </div>
      </div>
    ); //<ReactAutosuggest />;
  },
);

export default Autosuggest;
