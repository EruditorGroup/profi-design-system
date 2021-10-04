import {InputProps} from '../../../Form';

export type TInputPropsWithoutAddons = Omit<InputProps, 'leading' | 'trailing'>;
export type TIconPosition = 'leading' | 'trailing' | 'none';
