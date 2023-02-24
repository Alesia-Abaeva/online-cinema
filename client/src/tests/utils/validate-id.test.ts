import { valiadteId } from 'src/utils/validateId';

describe('valiadteId function', () => {
  it('should return true', () => {
    expect(valiadteId('/films', '21')).toBe(true);
    expect(valiadteId('/name', '12')).toBe(true);
    expect(valiadteId('', '')).toBe(true);
    expect(valiadteId('/person', '0')).toBe(true);
  });
  it('should return false', () => {
    expect(valiadteId('/films', 'NaN')).toBe(false);
  });
});
