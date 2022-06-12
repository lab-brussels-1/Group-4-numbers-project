import { sum } from './sum.js';

describe('sum: adds together all the numbers in an array', () => {
  describe('summing numbers', () => {
    it('returns 0 for an empty array', () => {
      const actual = sum([]);
      expect(actual).toEqual(0);
    });
    it('sums a single number', () => {
      const actual = sum([7]);
      expect(actual).toEqual(7);
    });
    it('sums many of the same number', () => {
      const actual = sum([4, 4, 4, 4]);
      expect(actual).toEqual(16);
    });
    it('sums opposites', () => {
      const actual = sum([-2, -1, 1, 2]);
      expect(actual).toEqual(0);
    });
    it('sums a mess of numbers', () => {
      const actual = sum([200, -2, 4, -10, 0, 1, 0.7, 2]);
      expect(actual).toEqual(195.7);
    });
  });
  describe('sum is a pure function', () => {
    it('does not modify the argument', () => {
      const arg = [3, 2, 1];
      sum(arg);
      expect(arg).toEqual([3, 2, 1]);
    });
  });
});
