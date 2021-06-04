import React from 'react';
import DropdownToggler from './components/DropdownToggler';
import DropdownPortal from './components/DropdownPortal';
import DropdownItem from './components/DropdownItem';
import type { Dispatch, SetStateAction } from 'react';
export interface IDropdownContext {
    isOpened: boolean;
    setOpened: Dispatch<SetStateAction<boolean>>;
    trigger: 'click' | 'hover';
}
export declare const DropdownContext: React.Context<IDropdownContext | null>;
export declare type DropdownProps = {
    className?: string;
    onChange?: (opened: boolean) => void;
    trigger?: 'click' | 'hover';
};
interface DropdownComponent extends React.FC<DropdownProps> {
    Toggler: typeof DropdownToggler;
    Portal: typeof DropdownPortal;
    Item: typeof DropdownItem;
}
declare const Dropdown: DropdownComponent;
export default Dropdown;
//# sourceMappingURL=index.d.ts.map