export const numberLoop = (max: number, current: number): number =>
  Math.abs(max + current) % max;
