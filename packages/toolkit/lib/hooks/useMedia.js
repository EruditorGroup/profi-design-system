"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.QUERIES = void 0;

var _react = require("react");

var _canUseDom = _interopRequireDefault(require("../utils/canUseDom"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const useMedia = (query, defaultState = false) => {
  const [state, setState] = (0, _react.useState)((0, _canUseDom.default)() ? () => window.matchMedia(query).matches : defaultState);
  (0, _react.useEffect)(() => {
    let mounted = true;
    const mql = window.matchMedia(query);

    const onChange = () => {
      if (!mounted) {
        return;
      }

      setState(!!mql.matches);
    };

    mql.addListener(onChange);
    setState(mql.matches);
    return () => {
      mounted = false;
      mql.removeListener(onChange);
    };
  }, [query]);
  return state;
};

const QUERIES = {
  mobile: '(min-width: 320px) and (max-width: 731px)',
  tablet: '(min-width: 732px) and (max-width: 1023px)',
  tabletHorizontal: '(min-width: 1024px) and (max-width: 1280px)',
  desktop: '(min-width: 1280px)'
};
exports.QUERIES = QUERIES;
var _default = useMedia;
exports.default = _default;