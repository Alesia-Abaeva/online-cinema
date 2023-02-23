import { formatWorldFees } from 'src/components/FilmPage/Handlers/film-data-formaters';

describe('formatWorldFees', () => {
  const feesApiData = {
    world: {
      currency: null,
      value: null,
    },
    russia: {
      currency: null,
      value: null,
    },
    usa: {
      currency: null,
      value: null,
    },
  };

  const feesApiData2 = {
    world: {
      currency: '$',
      value: 2142,
    },
    russia: {
      currency: 'rub',
      value: 212,
    },
    usa: {
      currency: 'eur',
      value: 21122,
    },
  };

  it('should return an empty string', () => {
    expect(formatWorldFees(feesApiData)).toEqual('');
  });
  it('should return a fees as a string', () => {
    expect(formatWorldFees(feesApiData2)).toEqual('$2 142');
  });
});
