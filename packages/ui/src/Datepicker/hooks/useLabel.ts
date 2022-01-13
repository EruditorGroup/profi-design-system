import * as React from 'react';
import {getReadableDate} from '@eruditorgroup/profi-toolkit';

const defaultTransformer = (date: Date) =>
  getReadableDate(date, {
    withWeekday: true,
    withYear: true,
    omitYearIfThisYear: true,
  });

/**
 * Хук для формирования лейбла.
 * 
 * @param selectedDate Выбранная дата.
 * @param inputLabelTransformerList Список возможных трансформаций переданный от пользователя.
 * @returns Взвращает сформированный лейбл.
 */
export const useLabel = (
  selectedDate: Date,
  inputLabelTransformerList?: ((date: Date) => string)[],
): string => {
  return React.useMemo(() => {
    if (!selectedDate) {
      return '';
    }

    const transformers = [defaultTransformer, ...inputLabelTransformerList];

    while (transformers.length) {
      const transformer = transformers.pop();
      const label = transformer(selectedDate);
      if (label) return label;
    }

    return '';
  }, [selectedDate, inputLabelTransformerList]);
};
