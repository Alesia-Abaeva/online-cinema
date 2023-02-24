import { formatCountry } from 'src/components/FilmPage/Handlers/film-data-formaters';

describe('formatCountry', () => {
  const data1 = [{ name: 'USA' }, { name: 'RUS' }, { name: 'ARG' }];
  const data2 = [{ name: 'USA' }, { name: null }];
  const data3 = [{ name: 12 }, { name: null }];
  const data4 = [{ name: '' }, { name: null }];

  it('should return a string', () => {
    expect(formatCountry(data1)).toEqual('USA, RUS, ARG');
    expect(formatCountry(data2)).toEqual('USA, ');
    expect(formatCountry(data3)).toEqual('12, ');
    expect(formatCountry(data4)).toEqual(', ');
  });
});
