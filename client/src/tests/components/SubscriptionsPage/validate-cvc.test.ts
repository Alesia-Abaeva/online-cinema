import { validateCvc } from 'src/components/SubscriptionsPage/components/CheckoutModal/components/Validators/validateCvc';

describe('validateCvc function', () => {
  it('should return true', () => {
    expect(validateCvc('visa', '123')).toBe(true);
    expect(validateCvc('mastercard', '321')).toBe(true);
    expect(validateCvc('amex', '1235')).toBe(true);
  });
  it('should return false', () => {
    expect(validateCvc('amex', '123')).toBe(false);
    expect(validateCvc('visa', '1234')).toBe(false);
    expect(validateCvc('mastercard', '3216')).toBe(false);
    expect(validateCvc('amex', '32')).toBe(false);
    expect(validateCvc('visa', '')).toBe(false);
    expect(validateCvc('mastercard', '-123')).toBe(false);
  });
});
