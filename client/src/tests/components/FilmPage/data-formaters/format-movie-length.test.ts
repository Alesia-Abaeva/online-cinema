import { formatMovieLength } from 'src/components/FilmPage/Handlers/film-data-formaters';

describe('formatMovieLength', () => {
  it('should return a string with double quotes ', () => {
    expect(formatMovieLength(90)).toBe('90 мин. / 01:30');
    expect(formatMovieLength(32)).toBe('32 мин. / 00:32');
    expect(formatMovieLength(1)).toBe('1 мин. / 00:01');
  });
  it('should return empty string', () => {
    expect(formatMovieLength(0)).toBe('');
    expect(formatMovieLength(NaN)).toBe('');
  });
});
