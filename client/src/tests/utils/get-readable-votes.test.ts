import { getReadableVotes } from '../../utils/get-readable-votes';

describe('getReadableVotes function', () => {
  it('should return readable voutes', () => {
    expect(getReadableVotes(70)).toBe('0K');
    expect(getReadableVotes(0)).toBe('0K');
    expect(getReadableVotes(1523)).toBe('1K');
    expect(getReadableVotes(1000)).toBe('1K');
    expect(getReadableVotes(-70)).toBe('0K');
  });
});
