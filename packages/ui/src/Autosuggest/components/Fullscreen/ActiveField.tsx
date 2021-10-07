import React from 'react';
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

const ActiveField: React.FC<TActiveFieldProps> = (props) => {
  const {
    iconPostion,
    fontSize = '15px',
    size = 'm',
    children,
  } = props;
  const {setInputRef, handleClose} = useFullscreenContext();

  const leading = iconPostion === 'leading' && (
    <SearchIcon style={{fontSize}} />
  );

  let field: JSX.Element = null;
  if (props.textarea === true) {
    field = (
      <Textarea
        {...props}
        children={null}
        minRows={props.minRows || 1}
        leading={leading}
        ref={setInputRef}
        size={size}
      />
    );
  }
  else {
    field = (
      <Input
        {...props}
        children={null}
        leading={leading}
        ref={setInputRef}
        size={size}
      />
    );
  }
  return children ? children(field, {onClose: handleClose}) : field;
};

ActiveField.displayName = 'ActiveField';

export default ActiveField;
