import {
  AutosuggestPropsBase,
  AutosuggestPropsMultiSection,
  AutosuggestPropsSingleSection,
} from 'react-autosuggest';
import ReactAutosuggest from 'react-autosuggest';
import {ListProps} from '../List';

export type ISuggestValue = {
  value: string;
  [key: string]: React.ReactNode;
};

export type TSection = {suggestions: ISuggestValue[]; title: string};

export type RewrittenProps =
  | 'ref'
  | 'theme'
  | 'getSuggestionValue'
  | 'renderSuggestionsContainer'
  | 'renderInputComponent'
  | 'value'
  | 'onChange';

type SetDifference<A, B> = A extends B ? never : A;
export type Diff<T, U> = Pick<T, SetDifference<keyof T, keyof U>>;

type DiffAutosuggestProps<T extends AutosuggestPropsBase<ISuggestValue>> = Diff<
  T,
  AutosuggestPropsBase<ISuggestValue>
>;

export type TMultiVariantProps = DiffAutosuggestProps<
  Omit<
    AutosuggestPropsMultiSection<ISuggestValue, TSection>,
    'getSectionSuggestions'
  >
> & {sectionClassName?: string};

export type TSingleVariantProps = DiffAutosuggestProps<
  AutosuggestPropsSingleSection<ISuggestValue>
>;

export type AutosuggestProps<
  T = Record<string, unknown>,
  TRewrittenProps extends string = RewrittenProps
> = Omit<AutosuggestPropsBase<ISuggestValue>, TRewrittenProps> &
  (TMultiVariantProps | TSingleVariantProps) & {
    suggestionsSize?: ListProps['size'];
    isLoading?: boolean;
    isMultiple?: boolean;
  } & T;

export type IAutosuggestComponent<
  T = Record<string, unknown>,
  TRewrittenProps extends string = RewrittenProps
> = React.ForwardRefExoticComponent<
  AutosuggestProps<T, TRewrittenProps> &
    // не знаем что там будет
    // eslint-disable-next-line
    React.RefAttributes<ReactAutosuggest<ISuggestValue, any>>
>;
