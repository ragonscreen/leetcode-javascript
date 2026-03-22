import { describe, expect, test } from 'bun:test';
import { checkSubarraySum } from '../../../src/problems/0501-0600/0523_continuous-subarray-sum.js';

const testcases = [
        { nums: [23, 2, 4, 6, 7], k: 6, expected: true },
        { nums: [23, 2, 6, 4, 7], k: 6, expected: true },
        { nums: [23, 2, 6, 4, 7], k: 13, expected: false },
        { nums: [23, 2, 4, 6, 6], k: 7, expected: true },
        { nums: [1, 1, 1, 7], k: 7, expected: false },
        { nums: [7, 1, 1, 1], k: 7, expected: false },
];

describe('checkSubarraySum', () => {
        test.each(
                structuredClone(testcases),
        )('checkSubarraySum($nums, $k) -> $expected', ({
                nums,
                k,
                expected,
        }) => {
                expect(checkSubarraySum(nums, k)).toStrictEqual(expected);
        });
});
