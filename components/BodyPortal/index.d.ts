import React from 'react';
export declare type BodyPortalProps = {
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
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
declare const BodyPortal: React.ForwardRefExoticComponent<BodyPortalProps & React.RefAttributes<HTMLDivElement>>;
export default BodyPortal;
//# sourceMappingURL=index.d.ts.map