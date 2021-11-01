import useMedia from './useMedia';

type ScreenSize = 'mobile' | 'tablet' | 'tabletHorizontal' | 'desktop';

const MEDIA_QUERIES = {
  mobile: '(min-width: 320px) and (max-width: 731px)',
  tablet: '(min-width: 732px) and (max-width: 1023px)',
  tabletHorizontal: '(min-width: 1024px) and (max-width: 1280px)',
  desktop: '(min-width: 1280px)',
};

export default function useCurrentScreen(
  screen: ScreenSize,
  defaultState?: boolean,
): boolean {
  return useMedia(MEDIA_QUERIES[screen], defaultState);
}
