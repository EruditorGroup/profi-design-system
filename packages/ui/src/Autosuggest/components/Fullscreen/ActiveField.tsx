import React, {forwardRef} from 'react';
import {SearchIcon} from '@eruditorgroup/profi-icons';
import {
  AliasProps,
  useCombinedRef,
  useMoveCaretToEndOnFocus,
  useSafeLayoutEffect,
} from '@eruditorgroup/profi-toolkit';
import {useFullscreenContext} from './contexts';
import {Textarea, FormControlProps} from '../../../Form';
import {TIconPosition, ForwardingFocusableComponent} from './types';

type TActiveFieldProps = {
  fontSize?: string;
  iconPostion?: Exclude<TIconPosition, 'trailing'>;
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

    useSafeLayoutEffect(() => {
      fieldRef.current?.focus();
    }, []);

    /** Нужно запланировать эффект после эффекта с фокусом */
    useMoveCaretToEndOnFocus({ref: fieldRef, deps: [], mode: 'onMount'});

    const leading = iconPostion === 'leading' && (
      <SearchIcon style={{fontSize}} />
    );
    const field = <Component leading={leading} ref={setLocalRef} {...props} />;
    return children ? children(field, {onClose: handleClose}) : field;
  },
);

ActiveField.displayName = 'ActiveField';

export default ActiveField;
