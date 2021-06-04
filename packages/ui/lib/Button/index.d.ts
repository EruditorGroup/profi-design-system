import React from 'react';
import { ForwardingComponent, IColor, ISize, ISocials } from 'uitype';
declare type ButtonSocial = Extract<ISocials, 'fb' | 'ya' | 'vk'>;
declare type ButtonColor = Extract<IColor, 'primary' | 'secondary' | 'light' | 'transparent'>;
export declare type ButtonProps = {
    design?: ButtonColor | ButtonSocial | 'link';
    size?: Extract<ISize, 's' | 'm' | 'l'>;
    block?: boolean;
    rounded?: boolean;
    regular?: boolean;
    leading?: React.ReactNode;
    trailing?: React.ReactNode;
    contentClassName?: string;
};
declare const Button: ForwardingComponent<'button', ButtonProps>;
export default Button;
//# sourceMappingURL=index.d.ts.map