import type { ForwardRefExoticComponent, RefAttributes, ReactNode } from 'react';
export declare type BodyPortalProps = {
    children: ReactNode;
    className?: string;
    style?: {
        [key: string]: string;
    };
};
/**
 * Element creates <div> element and append it to DOM when effect attached.
 * Hook removes <div> from body when effect disposed.
 * @param {BodyPortalProps} props
 * @example
 *  <BodyPortal className="superman">
 *    <h1>I'm in body right now!</h1>
 *  </BodyPortal>
 */
declare const BodyPortal: ForwardRefExoticComponent<BodyPortalProps & RefAttributes<HTMLDivElement>>;
export default BodyPortal;
//# sourceMappingURL=index.d.ts.map