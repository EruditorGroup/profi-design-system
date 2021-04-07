import {useCallback, useEffect, useState} from 'react';
import type {CSSProperties} from 'react';

export type RelativePositionOffset = {
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
};

export type RelativePositionState = [
  {[key: string]: string} | undefined,
  () => void,
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
export default function useRelativePosition<T extends HTMLElement>(
  element: T | null | undefined,
  align: 'left' | 'right',
  offset?: RelativePositionOffset,
): RelativePositionState {
  const [clientRects, setClientRects] = useState<DOMRect>();
  const [css, setCSS] = useState<CSSProperties>();

  const calcRects = useCallback(() => {
    setClientRects(element ? element.getBoundingClientRect() : undefined);
  }, [element]);

  useEffect(() => calcRects(), [calcRects]);

  useEffect(() => {
    window.addEventListener('resize', calcRects, false);
    return () => {
      window.removeEventListener('resize', calcRects, false);
    };
  }, [calcRects]);

  useEffect(() => {
    if (clientRects) {
      const {top, left, width, height} = clientRects;
      setCSS((css) => ({
        ...css,
        width,
        top: top + height + (offset?.top ?? 0) + window.scrollY,
      }));
      if (align === 'left')
        setCSS((css) => ({
          ...css,
          left: left + (offset?.left ?? 0) - window.scrollX,
        }));
      if (align === 'right')
        setCSS((css) => ({
          ...css,
          left: left - (offset?.right ?? 0),
          // right: right - width + (offset?.right ?? 0) + window.scrollX,
        }));
    } else {
      setCSS(undefined);
    }
  }, [clientRects, align, offset]);

  if (!css) return [undefined, calcRects];
  return [
    {
      position: 'absolute',
      top: `${css.top}px`,
      left: css.left ? `${css.left}px` : 'auto',
      right: css.right ? `${css.right}px` : 'auto',
      minWidth: `${css.width}px`,
      zIndex: '10000000', //TODO: maybe control it from props?
    },
    calcRects,
  ];
}
