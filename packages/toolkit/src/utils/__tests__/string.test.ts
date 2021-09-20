import * as string from '../string';

jest.unmock('../string');

describe('string', () => {
  it.each([
    ['hello', 'Hello'],
    ['привет', 'Привет'],
    ['salut', 'Salut'],
  ])('.capitalize(%s)', (input, output) => {
    expect(string.capitalize(input)).toBe(output);
  });
});
