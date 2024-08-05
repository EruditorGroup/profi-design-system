import type {
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

type RewrittenProps =
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
  ExtraRewrittenProps extends string = RewrittenProps
> = Omit<
  AutosuggestPropsBase<ISuggestValue>,
  RewrittenProps | ExtraRewrittenProps
> &
  (TMultiVariantProps | TSingleVariantProps) & {
    suggestionsSize?: ListProps['size'];
    isLoading?: boolean;
    isMultiple?: boolean;
  } & T;

export type IAutosuggestComponent<
  T = Record<string, unknown>,
  ExtraRewrittenProps extends string = never
> = React.ForwardRefExoticComponent<
  AutosuggestProps<T, ExtraRewrittenProps> &
    // eslint-disable-next-line -- не знаем что там будет
    React.RefAttributes<ReactAutosuggest<ISuggestValue, any>>
>;

export type DataAttrs<Type extends string = string> = {
  [Property in Type as `data-${Property}`]: string;
};
