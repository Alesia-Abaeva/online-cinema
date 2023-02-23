import { formatAge } from 'src/components/FilmPage/Handlers/film-data-formaters';

describe('formatAge', () => {
  it('should return age in readable string', () => {
    expect(formatAge(21)).toBe('21+');
    expect(formatAge('13')).toBe('13+');
    expect(formatAge('0')).toBe('0+');
  });
  it('should return empty string', () => {
    expect(formatAge(0)).toBe('');
    expect(formatAge(null)).toBe('');
    expect(formatAge('')).toBe('');
    expect(formatAge(NaN)).toBe('');
  });
});
