import React, {forwardRef} from 'react';
import {SearchIcon} from '@eruditorgroup/profi-icons';
import {useFullscreenContext} from './contexts';
import {Input, Textarea, TextareaProps, InputProps} from '../../../Form';
import {TIconPosition, TWithoutAddons} from './types';

type TInputProps = {
  textarea: false | undefined;
} & TWithoutAddons<InputProps>;

type TTextareProps = {
  textarea: true;
} & TWithoutAddons<TextareaProps>;

type TActiveFieldProps = {
  fontSize?: string;
  iconPostion?: Exclude<TIconPosition, 'trailing'>;
  children?: (
    input: JSX.Element,
    handler: {onClose: () => void},
  ) => JSX.Element;
} & (TInputProps | TTextareProps);

const ActiveField = forwardRef<
  HTMLInputElement | HTMLTextAreaElement,
  TActiveFieldProps
>(({iconPostion, fontSize = '15px', size = 'm', children, ...props}, ref) => {
  const {setInputRef, handleClose} = useFullscreenContext();

  const handleRef = (element: HTMLInputElement | HTMLTextAreaElement) => {
    setInputRef(element);
    if (typeof ref === 'function') ref(element);
    else if (ref) ref.current = element;
  }

  const leading = iconPostion === 'leading' && (
    <SearchIcon style={{fontSize}} />
  );

  let field: JSX.Element = null;
  if (props.textarea === true) {
    /** Можем мутировать пропсы, так как выше деструктурировали их в новый объект */
    delete props['textarea'];
    field = (
      <Textarea
        {...props}
        minRows={props.minRows || 1}
        leading={leading}
        ref={handleRef}
        size={size}
      />
    );
  } else {
    delete props['textarea'];
    field = (
      <Input {...props} leading={leading} ref={handleRef} size={size} />
    );
  }
  return children ? children(field, {onClose: handleClose}) : field;
});

ActiveField.displayName = 'ActiveField';

export default ActiveField;
