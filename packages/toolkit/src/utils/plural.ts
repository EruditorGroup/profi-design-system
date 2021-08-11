export default function plural(
  number: number,
  one: string,
  two: string,
  five: string,
): string {
  let num: number = Math.abs(number);
  num %= 100;
  if (num >= 5 && num <= 20) {
    return five;
  }
  num %= 10;
  if (num === 1) {
    return one;
  }
  if (num >= 2 && num <= 4) {
    return two;
  }
  return five;
}
