type ChunkArray = <T>(input: T[], size: number, fromRight?: boolean) => T[][];

/**
 * Разделяет массив на фрагменты и возвращает их массив
 * @param {T[]} input
 * @param {number} size размер фрагментов
 * @param {boolean} [fromRight] флаг для выполнения разбивки с конца массива
 * @returns { T[][] } массив фрагментов
 */
export const chunkArray: ChunkArray = (input, size, fromRight) => {
  const result = [];
  const source = input.slice(); // splice mutates the source array

  const leadingSizeChunk = fromRight ? source.length % size : 0;

  // Splice до 2х быстрее для массивов вплоть до ~8k элементов в сравнении с slice
  if (leadingSizeChunk) {
    result.push(source.splice(0, leadingSizeChunk));
  }

  while (source.length > 0) {
    result.push(source.splice(0, size));
  }

  return result;
};
