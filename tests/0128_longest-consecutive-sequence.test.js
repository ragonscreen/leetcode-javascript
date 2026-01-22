import { describe, expect, test } from 'vitest';
import { longestConsecutive } from '../src/problems/solved/0128_longest-consecutive-sequence.js';

describe('longestConsecutive', () => {
        test('returns the longest consecutive sequence', () => {
                expect(
                        longestConsecutive([100, 4, 200, 1, 3, 2]),
                ).toStrictEqual(4);
        });

        test('handles long sequences', () => {
                expect(
                        longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]),
                ).toStrictEqual(9);
        });

        test('handles inputs with duplicate elements', () => {
                expect(longestConsecutive([1, 0, 1, 2])).toStrictEqual(3);
        });

        test('handles inputs with no elements', () => {
                expect(longestConsecutive([])).toStrictEqual(0);
        });
});
