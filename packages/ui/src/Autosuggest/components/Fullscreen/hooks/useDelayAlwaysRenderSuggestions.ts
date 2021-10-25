import {useEffect, useState} from 'react';

/**
 * Хук нужен, чтобы отложить отрисовку подсказок, если их нужно показывать всегда.
 * Так как Autosuggest пересоздается при каждом открытии полноэкранного режима, при первом рендере тратит ~90мс
 * на отрисовку подсказок, поэтому планируем подсказки на следующий тик после маунта.
 */
export const useDelayAlwaysRenderSuggestions = (
  alwaysRenderSuggestions: boolean,
  isFullscreenActive: boolean,
): boolean => {
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    isFullscreenActive &&
      alwaysRenderSuggestions &&
      setTimeout(() => setFlag(true), 0);

      !isFullscreenActive && setFlag(false);
  }, [isFullscreenActive, alwaysRenderSuggestions]);

  return flag;
};
