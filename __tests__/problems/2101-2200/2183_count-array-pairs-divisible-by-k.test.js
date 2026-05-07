import { describe, expect, test } from 'bun:test';
import { countPairs } from '../../../src/problems/2101-2200/2183_count-array-pairs-divisible-by-k.js';

const testcases = [
        { nums: [1, 2, 3, 4, 5], k: 2, expected: 7 },
        { nums: [1, 2, 3, 4], k: 5, expected: 0 },
        { nums: [8, 10, 2, 5, 9, 6, 3, 8, 2], k: 6, expected: 18 },
        { nums: [9, 2, 6, 9, 1, 2], k: 9, expected: 9 },
        { nums: [10, 10, 6, 9, 3, 7, 4, 3, 8, 8], k: 4, expected: 27 },
        { nums: [28, 33, 46, 67, 50, 31, 29, 71], k: 56, expected: 2 },
];

describe('countPairs', () => {
        test.each(
                structuredClone(testcases),
        )('countPairs($nums, $k) -> $expected', ({ nums, k, expected }) => {
                expect(countPairs(nums, k)).toStrictEqual(expected);
        });
});
