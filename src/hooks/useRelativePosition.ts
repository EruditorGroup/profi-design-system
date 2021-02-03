import React, {useLayoutEffect, useMemo, useState} from 'react';

/**
 * Returns elements
 * @param elementRef DOM element react reference
 * @example
 * const parent = useRef<HTMLDivElement>();
 * const style = useRelativePosition(parent);
 * <>
 *  <div ref={parent}>I'm parent</div>
 *  <div style={style}>I have relative position to "parent"</div>
 * </>
 */
export default function useRelativePosition<T extends HTMLElement>(
  element: T | undefined,
): React.CSSProperties | undefined {
  const [css, setCSS] = useState<React.CSSProperties>();

  useLayoutEffect(() => {
    if (element) {
      const rects = element.getBoundingClientRect();
      setCSS({
        top: rects.top + rects.height,
        left: rects.left,
        width: rects.width,
      });
    } else {
      setCSS(undefined);
    }
  }, [element]);

  return useMemo(() => {
    if (!css) return undefined;
    return {
      position: 'fixed',
      top: `${css.top}px`,
      left: `${css.left}px`,
      minWidth: `${css.width}px`,
      zIndex: 10000000,
    };
  }, [css]);
}
