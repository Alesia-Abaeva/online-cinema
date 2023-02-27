import { formatBudget } from 'src/components/FilmPage/Handlers/film-data-formaters';

const budget1 = { currency: '$', value: 10000 };
const budget2 = { currency: 'r', value: 20000 };
const budget3 = { currency: '', value: 0 };

describe('formatBudget', () => {
  it('should return the budget in a readable form', () => {
    expect(formatBudget(budget1)).toBe('$10 000');
    expect(formatBudget(budget2)).toBe('r20 000');
    expect(formatBudget(budget3)).toBe('0');
  });
});
