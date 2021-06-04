import { useEffect, useState } from 'react';
import canUseDom from '../utils/canUseDom';

const useMedia = (query, defaultState = false) => {
  const [state, setState] = useState(canUseDom() ? () => window.matchMedia(query).matches : defaultState);
  useEffect(() => {
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

export const QUERIES = {
  mobile: '(min-width: 320px) and (max-width: 731px)',
  tablet: '(min-width: 732px) and (max-width: 1023px)',
  tabletHorizontal: '(min-width: 1024px) and (max-width: 1280px)',
  desktop: '(min-width: 1280px)'
};
export default useMedia;