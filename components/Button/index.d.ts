import React from 'react';
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    design?: 'primary' | 'secondary' | 'light' | 'yandex' | 'facebook' | 'vk';
    size?: 'small' | 'normal' | 'large';
    fit?: boolean;
    isLoading?: boolean;
    block?: boolean;
}
declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;
export default Button;
//# sourceMappingURL=index.d.ts.map