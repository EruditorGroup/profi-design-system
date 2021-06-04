import type { HTMLAttributes, ForwardRefExoticComponent, RefAttributes } from 'react';
import MenuItem from './components/MenuItem';
export declare type MenuProps = HTMLAttributes<HTMLDivElement>;
interface MenuComponent extends ForwardRefExoticComponent<MenuProps & RefAttributes<HTMLDivElement>> {
    Item: typeof MenuItem;
}
declare const Menu: MenuComponent;
export default Menu;
//# sourceMappingURL=index.d.ts.map