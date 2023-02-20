import { formatPriceNum } from '../../utils/format-price';

describe('formatPriceNum', () => {
  it('should format price number to human readable formant with spaces', () => {
    expect(formatPriceNum(100)).toBe('100');
    expect(formatPriceNum(0)).toBe('0');
    expect(formatPriceNum(5999)).toBe('5 999');
    expect(formatPriceNum(238412642)).toBe('238 412 642');
    expect(formatPriceNum(43230120300)).toBe('43 230 120 300');
  });
  it('should handle edge cases', () => {
    expect(formatPriceNum(-Infinity)).toBe('');
    expect(formatPriceNum(Infinity)).toBe('');
    expect(formatPriceNum(NaN)).toBe('');
  });
});
