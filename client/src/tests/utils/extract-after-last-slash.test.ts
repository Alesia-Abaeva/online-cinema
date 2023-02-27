import { extractAfterLastSlash } from '../../utils/extract-after-last-slash';

jest.useFakeTimers().setSystemTime(new Date('2023-01-01'));

describe('extractAfterLastSlash function', () => {
  it('should return string after "/" ', () => {
    expect(extractAfterLastSlash('/path')).toBe('path');
    expect(extractAfterLastSlash('first/second')).toBe('second');
    expect(extractAfterLastSlash('/first/second')).toBe('second');
    expect(extractAfterLastSlash('path')).toBe('path');
  });
  it('should return strinh after empty string ', () => {
    expect(extractAfterLastSlash('/first/')).toBe('');
    expect(extractAfterLastSlash('/')).toBe('');
  });
});
