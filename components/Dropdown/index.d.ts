import React, { Dispatch, SetStateAction } from 'react';
export interface DropdownProps {
    horizontalPosition?: 'left' | 'right';
    design?: 'light' | 'brand';
    children?: React.ReactNode;
}
interface DropdownContext extends Omit<DropdownProps, 'children'> {
    isOpened: boolean;
    setOpened: Dispatch<SetStateAction<boolean>>;
    togglerRef: React.MutableRefObject<HTMLElement | null>;
    contentRef: React.MutableRefObject<HTMLElement | null>;
}
export declare const DropdownContext: React.Context<DropdownContext | null>;
declare const Dropdown: ({ children, horizontalPosition, design, }: DropdownProps) => React.ReactElement;
export default Dropdown;
export { default as DropdownToggler } from './components/DropdownToggler';
export { default as DropdownItem } from './components/DropdownItem';
export { default as DropdownPortal } from './components/DropdownPortal';
//# sourceMappingURL=index.d.ts.map