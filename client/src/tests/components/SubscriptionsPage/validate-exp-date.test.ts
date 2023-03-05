import { validateExpDate } from 'src/components/SubscriptionsPage/components/CheckoutModal/components/Validators/validateExpDate';

jest.useFakeTimers().setSystemTime(new Date('2023-01-01'));

describe('validateExpDate function', () => {
  it('should return true', () => {
    expect(validateExpDate('02/23')).toBe(true);
    expect(validateExpDate('01/33')).toBe(true);
  });
  it('should return false', () => {
    expect(validateExpDate('date')).toBe(false);
    expect(validateExpDate('')).toBe(false);
    expect(validateExpDate('134/050')).toBe(false);
    expect(validateExpDate('01/23')).toBe(false);
  });
});
