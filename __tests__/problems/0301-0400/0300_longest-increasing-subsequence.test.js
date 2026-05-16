import { describe, expect, test } from 'bun:test';
import { lengthOfLIS } from '../../../src/problems/0301-0400/0300_longest-increasing-subsequence.js';

const testcases = [
        { nums: [10, 9, 2, 5, 3, 7, 101, 18], expected: 4 },
        { nums: [0, 1, 0, 3, 2, 3], expected: 4 },
        { nums: [0, 1, 0], expected: 2 },
        { nums: [7, 7, 7, 7, 7, 7, 7], expected: 1 },
        { nums: [1, 3, 6, 7, 9, 4, 10, 5, 6], expected: 6 },
];

describe('lengthOfLIS', () => {
        test.each(
                structuredClone(testcases),
        )('lengthOfLIS($nums) -> $expected', ({ nums, expected }) => {
                expect(lengthOfLIS(nums)).toStrictEqual(expected);
        });
});
