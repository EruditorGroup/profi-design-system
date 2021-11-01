import {Input, Textarea} from '../../../Form';
import {ForwardingCertainComponent} from '@eruditorgroup/profi-toolkit';

export type TIconPosition = 'leading' | 'trailing' | 'none';

export type FocusableComponents = typeof Input | typeof Textarea;

export type ForwardingFocusableComponent<
  InitialComponent extends FocusableComponents,
  P = unknown
> = ForwardingCertainComponent<FocusableComponents, InitialComponent, P>;
