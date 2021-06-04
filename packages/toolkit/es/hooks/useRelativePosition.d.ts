export declare type RelativePositionOffset = {
    top?: number;
    bottom?: number;
    left?: number;
    right?: number;
};
export declare type RelativePositionState = [
    {
        [key: string]: string;
    } | undefined,
    () => void
];
/**
 * Returns style that relative to passed [element] or undefined if element is not provider
 * @param elementRef DOM element react reference
 * @example
 * const parent = useRef<HTMLDivElement>();
 * const [style, recalc] = useRelativePosition(parent);
 * <>
 *  <div ref={parent}>I'm parent</div>
 *  <div style={style}>I have relative position to "parent"</div>
 * </>
 */
export default function useRelativePosition<T extends HTMLElement>(element: T | null | undefined, align: 'left' | 'right', offset?: RelativePositionOffset): RelativePositionState;
//# sourceMappingURL=useRelativePosition.d.ts.map