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
      <AutosuggestPatch
        ref={ref}
        multiSection={true}
        getSectionSuggestions={({suggestions}) => suggestions}
        {...props}
        theme={{...props.theme, sectionContainer: props.sectionClassName}}
      />
    );
  } else {
    return <AutosuggestPatch ref={ref} multiSection={false} {...props} />;
  }
}) as IAutosuggestComponent;

/**
 * https://github.com/moroshko/react-autosuggest/issues/609
 * Патчинг нужен чтобы улучшить UX на моб. устройствах.
 */
export class AutosuggestPatch extends ReactAutosuggest<ISuggestValue, TSection> {
  constructor(props: ReactAutosuggest<ISuggestValue, TSection>['props']) {
    super(props);
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const self = this as any;
    self.onSuggestionTouchMove = () => {
      self.justSelectedSuggestion = false;
      self.pressedSuggestion = null;
    };
  }
}

export default AutosuggestVariant;
