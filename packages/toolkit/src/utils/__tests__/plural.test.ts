import plural from '../plural';

jest.unmock('../plural');

describe('plural', () => {
  let pluralUsers;

  beforeEach(() => {
    pluralUsers = (number) => {
      return plural(number, 'пользователь', 'пользователя', 'пользователей');
    };
  });

  it('Пользователь', () => {
    expect(pluralUsers(1)).toBe('пользователь');
    expect(pluralUsers(101)).toBe('пользователь');
    expect(pluralUsers(1001)).toBe('пользователь');
  });
  it('Пользователя', () => {
    expect(pluralUsers(2)).toBe('пользователя');
    expect(pluralUsers(52)).toBe('пользователя');
    expect(pluralUsers(102)).toBe('пользователя');
  });
  it('Пользователей', () => {
    expect(pluralUsers(5)).toBe('пользователей');
    expect(pluralUsers(12)).toBe('пользователей');
    expect(pluralUsers(107)).toBe('пользователей');
  });
});
