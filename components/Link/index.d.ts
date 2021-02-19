import React from 'react';
export interface LinkProps extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
    to?: string;
    disabled?: boolean;
    color?: 'default' | 'brand' | 'black' | 'white' | 'dark-grey' | 'medium-grey' | 'inherit';
    design?: 'default' | 'default' | 'bullet' | 'tag' | 'grayTag' | 'plain' | 'red' | 'whiteTag';
    size?: '13' | '14' | '15' | '16' | '17' | '18' | '20' | '24' | '30';
    lineHeight?: '140' | '125' | '120' | '100';
    bold?: boolean;
    block?: boolean;
    underlined?: boolean;
}
declare const Link: React.ForwardRefExoticComponent<LinkProps & React.RefAttributes<HTMLAnchorElement>>;
export default Link;
//# sourceMappingURL=index.d.ts.map