import type { AnchorHTMLAttributes, ForwardRefExoticComponent, RefAttributes } from 'react';
export interface LinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
    to?: string;
    block?: boolean;
    bold?: boolean;
    underlined?: boolean;
    disabled?: boolean;
}
declare const Link: ForwardRefExoticComponent<LinkProps & RefAttributes<HTMLAnchorElement>>;
export default Link;
//# sourceMappingURL=index.d.ts.map