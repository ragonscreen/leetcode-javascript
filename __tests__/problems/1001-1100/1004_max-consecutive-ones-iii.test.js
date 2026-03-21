import { describe, expect, test } from 'bun:test';
import { longestOnes } from '../../../src/problems/1001-1100/1004_max-consecutive-ones-iii.js';

const testcases = [
        { nums: [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], k: 2, expected: 6 },
        {
                nums: [0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1],
                k: 3,
                expected: 10,
        },
];

describe('longestOnes', () => {
        test.each(
                structuredClone(testcases),
        )('longestOnes($nums, $k) -> $expected', ({ nums, k, expected }) => {
                expect(longestOnes(nums, k)).toStrictEqual(expected);
        });
});
