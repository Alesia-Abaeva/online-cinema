import { toHoursAndMinutes } from '../../utils/to-hours-and-minutes';

describe('toHoursAndMinutes function', () => {
  it('should return hours and minutes', () => {
    expect(toHoursAndMinutes(43)).toEqual({ hours: 0, minutes: 43 });
    expect(toHoursAndMinutes(0)).toEqual({ hours: 0, minutes: 0 });
    expect(toHoursAndMinutes(223)).toEqual({ hours: 3, minutes: 43 });
  });
});
