import React from 'react';
export interface DropdownItemProps extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
    divided?: boolean;
    disabled?: boolean;
    to?: string;
}
declare const DropdownItem: React.ForwardRefExoticComponent<DropdownItemProps & React.RefAttributes<HTMLAnchorElement>>;
export default DropdownItem;
//# sourceMappingURL=index.d.ts.map