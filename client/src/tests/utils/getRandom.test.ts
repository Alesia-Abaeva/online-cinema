import { getRandom } from '../../utils/random';

describe('getRandom function', () => {
  it('should return random value', () => {
    expect(getRandom(70)).toBeGreaterThan(0);
    expect(getRandom(70)).toBeLessThan(70);
    expect(getRandom(70)).toBeTruthy();
  });
});
