import { validateCardNumber } from 'src/components/SubscriptionsPage/components/CheckoutModal/components/Validators/validateCardNumber';

describe('validateCardNumber function', () => {
  it('should return true', () => {
    expect(validateCardNumber('346177170657794')).toBe('amex');
    expect(validateCardNumber('5107102678138723')).toBe('visa');
    expect(validateCardNumber('4494606754502630')).toBe('mastercard');
  });
  it('should return false', () => {
    expect(validateCardNumber('946177170657138')).toBe(false);
    expect(validateCardNumber('041387170657794')).toBe(false);
    expect(validateCardNumber('14138717')).toBe(false);
    expect(validateCardNumber('')).toBe(false);
  });
});
