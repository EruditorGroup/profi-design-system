import prettyNumber from '../prettyNumber';

jest.unmock('../prettyNumber');

it('prettyNumber', () => {
  expect(prettyNumber(1000)).toBe('1000');
  expect(prettyNumber(10000)).toBe('10 000');
  expect(prettyNumber(10000000)).toBe('10 000 000');
  expect(prettyNumber(10000.01)).toBe('10 000.01');
  expect(prettyNumber(null)).toBe('');
});
