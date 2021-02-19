import React from 'react';
/**
 * Returns style that relative to passed [element] or undefined if element is not provider
 * @param elementRef DOM element react reference
 * @example
 * const parent = useRef<HTMLDivElement>();
 * const style = useRelativePosition(parent);
 * <>
 *  <div ref={parent}>I'm parent</div>
 *  <div style={style}>I have relative position to "parent"</div>
 * </>
 */
export default function useRelativePosition<T extends HTMLElement>(element: T | null | undefined, align: 'left' | 'right'): React.CSSProperties | undefined;
//# sourceMappingURL=useRelativePosition.d.ts.map