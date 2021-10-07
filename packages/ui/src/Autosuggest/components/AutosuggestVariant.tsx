import React, {forwardRef} from 'react';
import ReactAutosuggest, {AutosuggestPropsBase} from 'react-autosuggest';
import {
  ISuggestValue,
  TMultiVariantProps,
  TSection,
  TSingleVariantProps,
} from '../types';

type Props = AutosuggestPropsBase<ISuggestValue> &
  (TMultiVariantProps | TSingleVariantProps);

type IAutosuggestComponent = React.ForwardRefExoticComponent<
  // не знаем что там будет
  // eslint-disable-next-line
  Props & React.RefAttributes<ReactAutosuggest<ISuggestValue, any>>
>;

/**
 * Конфигурируем здесь разные варианты автосаджеста: с секциями и без.
 */
const AutosuggestVariant = forwardRef((props, ref) => {
  if (props.multiSection === true) {
    return (
      <ReactAutosuggest<ISuggestValue, TSection>
        ref={ref}
        multiSection={true}
        getSectionSuggestions={({suggestions}) => suggestions}
        {...props}
        theme={{...props.theme, sectionContainer: props.sectionClassName}}
      />
    );
  } else {
    return <ReactAutosuggest<ISuggestValue> ref={ref} multiSection={false} {...props} />;
  }
}) as IAutosuggestComponent;

export default AutosuggestVariant;
