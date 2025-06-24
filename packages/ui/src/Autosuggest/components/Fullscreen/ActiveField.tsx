import React, {FormEventHandler, forwardRef, useEffect} from 'react';
import {SearchIcon} from '@eruditorgroup/profi-icons';
import {
  AliasProps,
  useCombinedRef,
  useMoveCaretToEndOnFocus,
} from '@eruditorgroup/profi-toolkit';
import {useFullscreenContext} from './contexts';
import {Textarea, FormControlProps} from '../../../Form';
import {TIconPosition, ForwardingFocusableComponent} from './types';

type TActiveFieldProps = {
  fontSize?: string;
  iconPostion?: Exclude<TIconPosition, 'trailing'>;
  onSubmit?: FormEventHandler<HTMLFormElement>;
  children?: (
    input: JSX.Element,
    handler: {onClose: () => void},
  ) => JSX.Element;
} & AliasProps &
  FormControlProps;

const ActiveField: ForwardingFocusableComponent<
  typeof Textarea,
  TActiveFieldProps
> = forwardRef(
  (
    {
      as: Component = Textarea,
      iconPostion,
      fontSize = '15px',
      children,
      ...props
    },
    ref,
  ) => {
    const {handleClose} = useFullscreenContext();

    const [fieldRef, setLocalRef] = useCombinedRef(ref);

    useEffect(() => {
      fieldRef.current?.focus();
    }, [fieldRef]);

    /** Нужно запланировать эффект после эффекта с фокусом */
    useMoveCaretToEndOnFocus({ref: fieldRef, deps: [], mode: 'onMount'});

    const leading = iconPostion === 'leading' && (
      <SearchIcon style={{fontSize}} />
    );
    const field = <Component leading={leading} ref={setLocalRef} {...props} />;

    return (
      <form onSubmit={props.onSubmit} action=".">
        {children ? children(field, {onClose: handleClose}) : field}
      </form>
    );
  },
);

ActiveField.displayName = 'ActiveField';

export default ActiveField;
