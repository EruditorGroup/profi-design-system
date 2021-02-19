import { useCallback, useEffect, useLayoutEffect, useMemo, useState } from 'react';
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

export default function useRelativePosition(element, align) {
  const [clientRects, setClientRects] = useState();
  const [css, setCSS] = useState();
  const calcRects = useCallback(() => setClientRects(element === null || element === void 0 ? void 0 : element.getBoundingClientRect()), [element]);
  useLayoutEffect(() => calcRects(), [calcRects]);
  useEffect(() => {
    window.addEventListener('resize', calcRects, false);
    return () => window.removeEventListener('resize', calcRects, false);
  }, [calcRects]);
  useLayoutEffect(() => {
    if (clientRects) {
      const {
        top,
        left,
        right,
        width,
        height
      } = clientRects;
      setCSS({
        width,
        top: top + height
      });
      if (align === 'left') setCSS(css => ({ ...css,
        left
      }));
      if (align === 'right') setCSS(css => ({ ...css,
        right: right - width
      }));
    } else {
      setCSS(undefined);
    }
  }, [clientRects, align]);
  return useMemo(() => {
    if (!css) return undefined;
    return {
      position: 'absolute',
      top: `${css.top}px`,
      left: css.left ? `${css.left}px` : 'auto',
      right: css.right ? `${css.right}px` : 'auto',
      minWidth: `${css.width}px`,
      zIndex: 10000000
    };
  }, [css]);
}