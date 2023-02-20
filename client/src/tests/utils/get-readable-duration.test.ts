import { getReadableDuration } from '../../utils/get-readable-duration';

describe('getReadableDuration function', () => {
  it('should return readable time', () => {
    expect(getReadableDuration(43)).toBe('0 ч 43 мин');
    expect(getReadableDuration(0)).toBe('0 ч 0 мин');
    expect(getReadableDuration(223)).toBe('3 ч 43 мин');
    expect(getReadableDuration(-70)).toBe('0 ч 0 мин');
  });
  it('should be define', () => {
    expect(getReadableDuration(43)).toBeDefined();
    expect(getReadableDuration(0)).toBeDefined();
    expect(getReadableDuration(223)).toBeDefined();
    expect(getReadableDuration(-70)).toBeDefined();
  });
});
