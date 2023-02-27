import { isNumber } from '../../utils/is-number';

describe('isNumber function', () => {
  it('should return true', () => {
    expect(isNumber('70')).toBeTruthy();
    expect(isNumber('0')).toBeTruthy();
    expect(isNumber('-150')).toBeTruthy();
  });
  it('should return false', () => {
    expect(isNumber('70k')).toBeFalsy();
    expect(isNumber('num')).toBeFalsy();
  });
});
