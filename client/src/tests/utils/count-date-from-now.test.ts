import { countDateFromNow } from '../../utils/count-date-from-now';

jest.useFakeTimers().setSystemTime(new Date('2023-01-01'));

describe('countDateFromNow function', () => {
  it('should return new date', () => {
    expect(countDateFromNow(new Date(), 30)).toEqual(new Date('2023-01-31'));
    expect(countDateFromNow(new Date(), 0)).toEqual(new Date('2023-01-01'));
    expect(countDateFromNow(new Date(), -1)).toEqual(new Date('2022-12-31'));
  });
  it('should be instance of Date', () => {
    expect(countDateFromNow(new Date(), 30)).toBeInstanceOf(Date);
  });
});
