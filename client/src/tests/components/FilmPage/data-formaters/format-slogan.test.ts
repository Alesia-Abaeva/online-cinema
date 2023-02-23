import { formatSlogan } from 'src/components/FilmPage/Handlers/film-data-formaters';

describe('formatSlogan', () => {
  it('should return a string with double quotes ', () => {
    expect(formatSlogan('34')).toBe('"34"');
    expect(formatSlogan('hello')).toBe('"hello"');
    expect(formatSlogan('')).toBe('');
    expect(formatSlogan(' ')).toBe('" "');
    expect(formatSlogan('')).toBe('');
  });
  it('should return an empty string', () => {
    expect(formatSlogan('')).toBe('');
  });
});
