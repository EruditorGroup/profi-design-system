"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useRelativePosition;

var _react = require("react");

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
function useRelativePosition(element, align, offset) {
  const [clientRects, setClientRects] = (0, _react.useState)();
  const [css, setCSS] = (0, _react.useState)();
  const calcRects = (0, _react.useCallback)(() => {
    setClientRects(element ? element.getBoundingClientRect() : undefined);
  }, [element]);
  (0, _react.useEffect)(() => calcRects(), [calcRects]);
  (0, _react.useEffect)(() => {
    window.addEventListener('resize', calcRects, false);
    return () => {
      window.removeEventListener('resize', calcRects, false);
    };
  }, [calcRects]);
  (0, _react.useEffect)(() => {
    if (clientRects) {
      const {
        top,
        left,
        width,
        height
      } = clientRects;
      setCSS(css => {
        var _offset$top;

        return { ...css,
          width,
          top: top + height + ((_offset$top = offset === null || offset === void 0 ? void 0 : offset.top) !== null && _offset$top !== void 0 ? _offset$top : 0) + window.scrollY
        };
      });
      if (align === 'left') setCSS(css => {
        var _offset$left;

        return { ...css,
          left: left + ((_offset$left = offset === null || offset === void 0 ? void 0 : offset.left) !== null && _offset$left !== void 0 ? _offset$left : 0) - window.scrollX
        };
      });
      if (align === 'right') setCSS(css => {
        var _offset$right;

        return { ...css,
          left: left - ((_offset$right = offset === null || offset === void 0 ? void 0 : offset.right) !== null && _offset$right !== void 0 ? _offset$right : 0) // right: right - width + (offset?.right ?? 0) + window.scrollX,

        };
      });
    } else {
      setCSS(undefined);
    }
  }, [clientRects, align, offset]);
  if (!css) return [{
    display: 'none'
  }, calcRects];
  return [{
    position: 'absolute',
    top: `${css.top}px`,
    left: css.left ? `${css.left}px` : 'auto',
    right: css.right ? `${css.right}px` : 'auto',
    minWidth: `${css.width}px`,
    zIndex: '10000000' //TODO: maybe control it from props?

  }, calcRects];
}