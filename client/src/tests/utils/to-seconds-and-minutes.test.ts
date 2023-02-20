import { toSecondsAndMinutes } from 'src/utils/to-seconds-and-minutes';

describe('toSecondsAndMinutes', () => {
  it('should format seconds to human readable formant with min and sec', () => {
    expect(toSecondsAndMinutes(100)).toBe('01:40');
    expect(toSecondsAndMinutes(0)).toBe('00:00');
    expect(toSecondsAndMinutes(5999)).toBe('99:59');
    expect(toSecondsAndMinutes(6000)).toBe('100:00');
  });
  it('should handle edge cases', () => {
    expect(toSecondsAndMinutes(-Infinity)).toBe('00:00');
    expect(toSecondsAndMinutes(Infinity)).toBe('00:00');
    expect(toSecondsAndMinutes(NaN)).toBe('00:00');
  });
});
