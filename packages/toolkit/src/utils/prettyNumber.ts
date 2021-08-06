export default function prettyNumber(digits: string | number): string {
  if (!digits) return '';

  digits = digits.toString();
  return digits.length > 4
    ? digits.replace(/\B(?=(\d{3})+(?!\d))/g, '\u202F')
    : digits.toString();
}
