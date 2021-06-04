import { useEffect } from 'react';

const useClickOutside = (ref, callback) => {
  const handleClick = e => {
    var _ref$current;

    if (ref.current && !((_ref$current = ref.current) !== null && _ref$current !== void 0 && _ref$current.contains(e.target))) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  });
};

export default useClickOutside;