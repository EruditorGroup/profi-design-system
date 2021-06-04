import type { AnchorHTMLAttributes, ForwardRefExoticComponent, RefAttributes } from 'react';
export interface MenuItemProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    divided?: boolean;
    disabled?: boolean;
    to?: string;
    rounded?: boolean;
    current?: boolean;
}
declare const MenuItem: ForwardRefExoticComponent<MenuItemProps & RefAttributes<HTMLAnchorElement>>;
export default MenuItem;
//# sourceMappingURL=index.d.ts.map