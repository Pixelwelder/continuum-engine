import formatDictionaryNumber from '../formatters/number_dictionary';

describe('formatDictionaryNumber', () => {
  test('it should format a number', () => {
    expect(formatDictionaryNumber(1200, 2)).toBe('1.20k');
    expect(formatDictionaryNumber(1200000, 2)).toBe('1.20M');
    expect(formatDictionaryNumber(12000000000, 2)).toBe('12.00B');
  });
});
