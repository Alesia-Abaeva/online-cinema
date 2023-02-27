import { formatRuWord } from 'src/utils/formatRUWorld';

describe('formatRuWord function', () => {
  const data = ['фильм', 'фильма', 'фильмов'];

  it('should return correct amount of films', () => {
    expect(formatRuWord(1, data)).toBe('фильм');
    expect(formatRuWord(20, data)).toBe('фильмов');
    expect(formatRuWord(2, data)).toBe('фильма');
    expect(formatRuWord(-3, data)).toBe('фильма');
    expect(formatRuWord(0, data)).toBe('фильмов');
  });
});
