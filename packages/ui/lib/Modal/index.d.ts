import type { HTMLAttributes, ForwardRefExoticComponent, RefAttributes, MouseEventHandler } from 'react';
export interface ModalProps extends HTMLAttributes<HTMLDivElement> {
    withCloseButton?: boolean;
    withPadding?: boolean;
    autoSize?: boolean;
    width: string;
    height: string;
    visible: boolean;
    title?: string | undefined;
    className?: string;
    onClickBack?: MouseEventHandler<HTMLElement>;
    onClose: MouseEventHandler<HTMLElement>;
}
declare const Modal: ForwardRefExoticComponent<ModalProps & RefAttributes<HTMLDivElement>>;
export default Modal;
//# sourceMappingURL=index.d.ts.map