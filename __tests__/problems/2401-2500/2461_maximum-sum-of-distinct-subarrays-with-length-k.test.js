import { describe, expect, test } from 'bun:test';
import { maximumSubarraySum } from '../../../src/problems/2401-2500/2461_maximum-sum-of-distinct-subarrays-with-length-k.js';

const testcases = [
        { nums: [1, 5, 4, 2, 9, 9, 9], k: 3, expected: 15 },
        { nums: [4, 4, 4], k: 3, expected: 0 },
        { nums: [1, 5, 4, 2, 9, 9, 9, 1, 2], k: 3, expected: 15 },
        { nums: [9, 9, 9, 1, 2, 3], k: 3, expected: 12 },
];

describe('maximumSubarraySum', () => {
        test.each(
                structuredClone(testcases),
        )('maximumSubarraySum($nums, $k) -> $expected', ({
                nums,
                k,
                expected,
        }) => {
                expect(maximumSubarraySum(nums, k)).toStrictEqual(expected);
        });
});
