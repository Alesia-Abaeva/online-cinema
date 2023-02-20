import { formatGenres } from 'src/components/FilmPage/Handlers/film-data-formaters';

describe('formatGenres', () => {
  it('should format genres from array of objects to comma separated format with the first work capitalized', () => {
    expect(formatGenres([{ name: 'комедия' }])).toBe('Комедия');
    expect(formatGenres([{ name: 'комедия' }, { name: 'криминал' }, { name: 'драма' }])).toBe(
      'Комедия, криминал, драма'
    );
  });
  it('should handle edge cases', () => {
    expect(formatGenres([{ name: '' }])).toBe('');
    expect(formatGenres([{ name: 'комедия' }, { name: '' }, { name: 'драма' }])).toBe('Комедия, драма');
    expect(formatGenres([{ name: '' }, { name: 1212 }, { name: 'драма' }])).toBe('Драма');
    expect(formatGenres([{ name: '' }, { name: null }, { name: 121 }])).toBe('');
    expect(formatGenres([{ name: 'комедия       ' }, { name: null }, { name: 121 }, { name: '       драма' }])).toBe(
      'Комедия, драма'
    );
  });
});
